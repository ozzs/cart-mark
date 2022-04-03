const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
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
  // db.run("INSERT INTO SHOPPING_LISTS(Date, Status) VALUES (datetime('now'), 1)"), 
  //   (err) => {
  //     if(err) return console.error(err.message);
  //   //res.send(req.body.map(product => (product.id)));
  //   };
  db.get("SELECT EXISTS(SELECT ID FROM SHOPPING_LISTS WHERE Status = 1)", (err, exists) => {
    if(err) return console.error(err.message);
    console.log("exists? ", exists)
    res.send(exists);
  })
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
});

app.get('/shoppinglist', (req, res) => {
  db.all("SELECT PRODUCTS.ID, PRODUCTS.name, PRODUCTS.department, RELATIONAL.Amount, PRODUCTS.units, RELATIONAL.Comment \
	          FROM PRODUCTS \
		          INNER JOIN RELATIONAL ON PRODUCTS.ID = RELATIONAL.ProductID \
		          INNER JOIN SHOPPING_LISTS ON Status = 1",
    [], (err, list) => {
      if(err) return console.error(err.message);
      
    list.forEach(prod => {
      console.log(prod);
    })
    res.send(list);
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})