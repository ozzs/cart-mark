const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 5000

const sqlite3 = require('sqlite3').verbose();
const axios = require('axios');

const db = new sqlite3.Database('./shopListDB.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) 
    return console.error(err.message);

  console.log('connection with database successful');
});

app.use(bodyParser.json());

app.use(cors({
  origin: '*',
  credentials: true
}));

// app.get('/check', (req, res) => {
//   res.send('Hello World!')
// })

//http://localhost:3000/

app.get('/check', (req, res) => {
  db.all("SELECT * FROM PRODUCTS", [], (err, products) => {
    if(err) return console.error(err.message);
      
    products.forEach(prod => {
      console.log(prod);
    })
    res.send(products);
  })
})

// app.post('/', (req, res) => {
//   req.body.map(prod => 
//     db.run("INSERT INTO SHOPLIST(Product, Comment) VALUES (?,?)",
//     [prod.product, prod.comment]), (err) => {
//       if(err) {
//         return console.error(err.message)
//       };

//       console.log("a new row has been created")
//     }
//   )
// })


// db.all("SELECT * FROM PRODUCTS", [], (err, rows) => {
//   if(err) return console.error(err.message);
  
//   rows.forEach(row => {
//     console.log(row);
//   })
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})