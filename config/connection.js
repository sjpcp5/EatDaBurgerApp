const mysql = require('mysql')
const pn = require('../password')

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: pn,
  database: 'burgerDB'
})
module.exports = connection
