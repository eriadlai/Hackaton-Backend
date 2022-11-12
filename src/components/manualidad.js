const oConnection = require('../../database');
var express = require('express');
var router = express.Router();

  router.get('/Manualidad', function (req, res) {

    let oQuery = `CALL GetManualidad()`;
    oConnection.query(oQuery, [oid], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
  })
  router.get('/ManualidadById', function (req, res) {

      const {oid} = req.body;
      let oQuery = `CALL GetManualidadByIdSP(?)`;
      oConnection.query(oQuery, [oid], (error, rows, fields) => {
        if (error) {
          return console.error(error.message);
        }
        return res.json(rows);
      });
  })
  router.post('/Manualidad', function (req, res) {

      const {oTitulo, oAutor, oContenido, oUrlImage, oFecha, oUserID} = req.body;
      let oQuery = `CALL InsertManualidadSP(?,?,?,?,?,?)`;
      oConnection.query(oQuery, [oTitulo, oAutor, oContenido, oUrlImage, oFecha, oUserID], (error, rows, fields) => {
        if (error) {
          return console.error(error.message);
        }
        return res.json(rows);
      });
  })
  router.put('/Manualidad', function (req, res) {

      const {oTitulo, oAutor, oContenido, oUrlImage, oFecha, oUserID} = req.body;
      let oQuery = `CALL UpdateManualidadSP(?,?,?,?,?,?)`;
      oConnection.query(oQuery, [oTitulo, oAutor, oContenido, oUrlImage, oFecha, oUserID], (error, rows, fields) => {
        if (error) {
          return console.error(error.message);
        }
        return res.json(rows);
      });
  })
  router.put('/ManualidadDelete', function (req, res) {
      const {oid} = req.body;
      let oQuery = `CALL DeleteManualidadSP(?)`;
      oConnection.query(oQuery, [oid], (error, rows, fields) => {
        if (error) {
          return console.error(error.message);
        }
        return res.json(rows);
      });
  })
module.exports = router;