const oConnection = require('../../database');
var express = require('express');
var router = express.Router();

  router.get('/Categoria', function (req, res) {

    let oQuery = 'CALL GetCategoriaSP();';
    oConnection.query(oQuery, (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  router.get('/CategoriaById', function (req, res) {

    const {oid} = req.body;
    let oQuery = `CALL SP(?)`;
    oConnection.query(oQuery, [oid], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  router.post('/Categoria', function (req, res) {

    const{oNombre,oDescripcion} = req.body;
    let oQuery = 'CALL InsertCategoriaSP(?,?);';
    oConnection.query(oQuery,[oNombre,oDescripcion], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  router.put('/Categoria', function (req, res) {

    const{oNombre,oDescripcion,oID} = req.body;
    let oQuery = 'CALL UpdateCategoriaSP(?,?,?);';
    oConnection.query(oQuery,[oNombre,oDescripcion,oID], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  router.put('/CategoriaDelete', function (req, res) {

    const {oid} = req.body;
    let oQuery = `CALL UpdateCategoriaSP(?)`;
    oConnection.query(oQuery, [oid], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  module.exports = router;