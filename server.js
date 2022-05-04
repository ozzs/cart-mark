const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const { Dvr } = require('@mui/icons-material')
const port = 5000

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./shopListDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) 
    return console.error(err.message);

  console.log('connection with database successful');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: '*',
  credentials: true
}));

app.get('/', (req, res) => {
  res.send("HELLO WORLD");
})

app.get('/createlist', (req, res) => {
  db.all("SELECT * FROM PRODUCTS ORDER BY name", [], (err, products) => {
    if(err) return console.error(err.message);
      
    products.forEach(prod => {
      console.log(prod);
    })
    res.send(products);
  })
})

app.get('/showlists', (req, res) => {
  db.all("SELECT Date FROM SHOPPING_LISTS WHERE Status = 0", [], (err, dates) => {
    if(err) return console.error(err.message);

    dates.forEach(date => {
      console.log(date);
    })
    res.send(dates);
  })
})

app.post('/additem', (req, res) => {
  db.run("INSERT INTO PRODUCTS(name, department, units) VALUES (?, ?, ?)",
    [req.body.product, req.body.department, req.body.packeging]), (err) => {
      if(err) {
        res.send({inserted: false})
        return console.error(err.message);
      };
    }
    res.send({inserted: true})
})

app.get('/closelist', (req, res) => {
  res.send("CLOSE LIST")
})

app.post('/closelist', (req, res) => {

  db.get("SELECT 1 FROM SHOPPING_LISTS WHERE Status = 1", (err, check) => {
    if(err) 
      return console.error(err.message);

    if(check === undefined) {
      console.log("NO LIST EXISTS")
      db.run("INSERT INTO SHOPPING_LISTS(Date, Status) VALUES (DATE(), 1)"), 
      (err) => {
        if(err) return console.error(err.message);
        res.send(req.body.map(product => (product.id)));
      }

      db.get("SELECT ID FROM SHOPPING_LISTS WHERE Status = 1", (err, id) => {
        if(err) return console.error(err.message);
        console.log("ID is:", id);
        
        req.body.map(product => {
          db.run("INSERT INTO RELATIONAL(ListID, ProductID, Amount, Comment) VALUES(?, ?, ?, ?)",
          [id.ID, product.id, product.amount, product.comment]), (err) => {
            if(err) return console.error(err.message);
          }
        })
      });
    }

    else {
      console.log("LIST EXISTS!")
      db.get("SELECT ID FROM SHOPPING_LISTS WHERE Status = 1", (err, id) => {
        if(err) return console.error(err.message);
        console.log("ID is:", id);
        
        req.body.map(product => {
          db.run("INSERT INTO RELATIONAL(ListID, ProductID, Amount, Comment) VALUES(?, ?, ?, ?)",
          [id.ID, product.id, product.amount, product.comment]), (err) => {
            if(err) return console.error(err.message);
          }
        })
      });
    }
  })
  res.send("DONE!");
});

app.get('/shoppinglist', (req, res) => {
  db.all("SELECT PRODUCTS.ID, PRODUCTS.name, PRODUCTS.department, RELATIONAL.Amount, PRODUCTS.units, RELATIONAL.Comment \
	          FROM PRODUCTS \
		          INNER JOIN RELATIONAL ON PRODUCTS.ID = RELATIONAL.ProductID \
		          INNER JOIN SHOPPING_LISTS ON SHOPPING_LISTS.ID = RELATIONAL.ListID WHERE Status = 1",
    [], (err, list) => {
      if(err) return console.error(err.message);
      
    list.forEach(prod => {
      console.log(prod);
    })
    res.send(list);
  })
})

app.post('/finishshopping', (req, res) => {
  db.run("UPDATE SHOPPING_LISTS SET Status = 0 WHERE Status = 1"), (err) => {
    if(err) return console.error(err.message);
    res.send("Status updated to 0!")
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})