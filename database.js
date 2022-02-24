const sqlite3 = require('sqlite3').verbose();
const axios = require('axios');


const db = new sqlite3.Database('./shopListDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.error(err.message);
    console.log('connection successful');
});

db.close((err) => {
    if(err) return console.error(err.message);
});