const oConnection = require('../database');

app.get('/Material', function (req, res) {

    const {oid} = req.body;
    let oQuery = `CALL SP(?)`;
    oConnection.query(oQuery, [oid], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  module.exports = router;