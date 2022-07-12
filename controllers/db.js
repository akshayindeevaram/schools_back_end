const util = require("util");
const mysql = require("mysql");
function makeDb() {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3300,
    user: "root",
    password: "root",
    database: "schools",
  });

  return {
    query(sql, args) {
      return util.promisify(connection.query).call(connection, sql, args);
    },
    close() {
      return util.promisify(connection.end).call(connection);
    },
  };
}

module.exports = makeDb;

// const express = require("express")
// const mysql = require("mysql")
// const app = express()
// const db = mysql.createConnection({

//     host:'localhost',
//     port:3300,
//     user: 'root',
//     password: 'root',
//     database:'schools'
//   })

//   db.connect((err)=>{
//         if (err) {
//         throw err;
//     }
//     console.log('You are now connected...')
// });

// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE nodemysql';
//     db.query(sql, (err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...');
//     })
// });

// module.exports = db
