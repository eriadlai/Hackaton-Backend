const oConnection = require('../../database');
var express = require('express');
var router = express.Router();

router.get('/Usuario', function (req, res) {

  let oQuery = `CALL GetUsuarioSP()`;
  oConnection.query(oQuery, [oid], (error, rows, fields) => {
    if (error) {
      return console.error(error.message);
    }
    return res.json(rows);
  });
})
router.get('/UsuarioById', function (req, res) {

    const {oid} = req.body;
    let oQuery = `CALL GetUsuarioByIdSP(?)`;
    oConnection.query(oQuery, [oid], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
})
router.get('/UsuarioLogin', function (req, res) {

    const {oUser, oPass} = req.body;
    let oQuery = `CALL LoginSP(?,?)`;
    oConnection.query(oQuery, [oUser, oPass], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
})
router.post('/Usuario', function (req, res) {

    const {oNombre, oUsuario, oCorreo, oPass} = req.body;
    let oQuery = `CALL InsertUsuarioSP(?,?,?,?)`;
    oConnection.query(oQuery, [oNombre, oUsuario, oCorreo, oPass], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
})
router.put('/Usuario', function (req, res) {

    const {oID,oNombre, oUsuario, oCorreo} = req.body;
    let oQuery = `CALL InsertUsuarioSP(?,?,?,?,?)`;
    oConnection.query(oQuery, [oID,oNombre, oUsuario, oCorreo], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
})
router.put('/UsuarioDelete', function (req, res) {

    const {oid} = req.body;
    let oQuery = `CALL DeleteUsuarioSP(?)`;
    oConnection.query(oQuery, [oid], (error, rows, fields) => {
      if (error) {
        return console.error(error.message);
      }
      return res.json(rows);
    });
})
module.exports = router;