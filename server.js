const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 5000

const sqlite3 = require('sqlite3').verbose();
const axios = require('axios');

const db = new sqlite3.Database('./shopListDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
    console.log('connection successful');
});

app.use(bodyParser.json());

app.use(cors({
  origin: '*',
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  req.body.map(prod => 
    db.run("INSERT INTO SHOPLIST(Product, Comment) VALUES (?,?)",
    [prod.product, prod.comment]), (err) => {
      if(err) {
        return console.error(err.message)
      };

      console.log("a new row has been created")
    }
  )
})


db.all("SELECT * FROM SHOPLIST", [], (err, rows) => {
  if(err) return console.error(err.message);
  
  rows.forEach(row => {
    console.log(row);
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})