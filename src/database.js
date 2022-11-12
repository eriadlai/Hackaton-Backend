const oMysql = require('mysql')
const oConnection = mysql.createConnection({
  host: 'localhost',
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
})
oConnection.connect()

module.exports = oConnection;