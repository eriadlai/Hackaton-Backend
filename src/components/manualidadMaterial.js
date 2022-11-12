const oConnection = require('../../database');
var express = require('express');
var router = express.Router();

  router.post('/ManualidadMaterial', function (req, res) {

    const {oMaterial, oManualidad} = req.body;
    let oQuery = `CALL InsertManualidadMaterialSP(?,?)`;
    oConnection.query(oQuery, [oMaterial, oManualidad], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  module.exports = router;