const oMysql = require('mysql')
const oConnection = oMysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'adlai1999',
  database: 'wecancodedb'
})
oConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = oConnection;