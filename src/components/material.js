const oConnection = require('../../database');
var express = require('express');
var router = express.Router();


  router.get('/Material', function (req, res) {

  const {oid} = req.body;
  let oQuery = `CALL GetMaterialSP(?)`;
  oConnection.query(oQuery, [oid], (error, rows, fields) => {
    if (error) {
      return console.error(error.message);
    }
    return res.json(rows);
  });
  })
  router.get('/MaterialById', function (req, res) {

    const {oid} = req.body;
    let oQuery = `CALL GetMaterialByIDSP(?)`;
    oConnection.query(oQuery, [oid], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  router.post('/Material', function (req, res) {

    const {oNombre, oDescripcion, oCategoria} = req.body;
    let oQuery = `CALL GetMaterialByIDSP(?,?,?)`;
    oConnection.query(oQuery, [oNombre, oDescripcion, oCategoria], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  router.put('/Material', function (req, res) {

    const {oID, oNombre, oDescripcion, oCategoria} = req.body;
    let oQuery = `CALL GetMaterialByIDSP(?,?,?,?)`;
    oConnection.query(oQuery, [oID,oNombre, oDescripcion, oCategoria], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  router.put('/MaterialDelete', function (req, res) {

    const {oid} = req.body;
    let oQuery = `CALL DeleteMaterialSP(?)`;
    oConnection.query(oQuery, [oid], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  module.exports = router;