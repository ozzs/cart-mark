const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./database');
const port = 5000

app.use(bodyParser.json());

app.use(cors({
  origin: '*',
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log(req.body)
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