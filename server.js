const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors({
  origin: '*',
  credentials: true
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})