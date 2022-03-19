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

app.get('/check', (req, res) => {
  db.all("SELECT * FROM PRODUCTS", [], (err, products) => {
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
        return console.error(err.message);
      };
    }
    res.sendStatus(200)
})

// app.post('/', (req, res) => {
//   req.body(item => 
//     db.run("INSERT INTO PRODUCTS(name, department, units) VALUES (?, ?, ?)",
//     [item.product, item.department, item.packeging]), (err) => {
//       if(err) {
//         return console.error(err.message)
//       };

//       console.log("a new row has been created")
//     }
//   )
//   res.send("connected!");
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})