const oConnection = require('../../database');
var oMongo = require('mongodb');
var express = require('express');
var router = express.Router();

router.get('/Usuario', function (req, res) {
  oConnection.connect(err => {
    oConnection.db('Recycle').collection('usuario').find({ isActive: 1 }).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.get('/UsuarioById', function (req, res) {
  const { _id } = req.body;
  let oFiltro = {
    $and: [
      { _id: new oMongo.ObjectID(_id) },
      { isActive: 1 }
    ]
  }
  oConnection.connect(err => {
    oConnection.db('Recycle').collection('usuario').find(oFiltro).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.get('/UsuarioLogin', function (req, res) {
  const { oCorreo, oPass } = req.body;
  let oFiltro = {
    $and: [
      { oCorreo: oCorreo },
      { oPass: oPass },
      { isActive: 1 }
    ]
  }
  oConnection.connect(err => {
    oConnection.db('Recycle').collection('usuario').find(oFiltro).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.post('/Usuario', function (req, res) {
  const { oNombre, oUsuario, oPass, oCorreo } = req.body;
  let oDatos = {
    "oNombre": oNombre,
    "oUsuario": oUsuario,
    "oPass": oPass,
    "oCorreo": oCorreo,
    "isActive": 1
  }
  console.log(oDatos);
  oConnection.connect(err => {
    oConnection.db('Recycle').collection('usuario').insertOne(oDatos, function (error, response) {
      if (error) {
        console.log('Error occurred while inserting');
        // return 
      } else {
        return res.json(response);
        // return 
      }
    })
    if (err) throw err;
  })
})
router.put('/Usuario', function (req, res) {
  const { _id, oNombre, oUsuario, oPass, oCorreo } = req.body;
  let oDatos = {
    "oNombre": oNombre,
    "oUsuario": oUsuario,
    "oPass": oPass,
    "oCorreo": oCorreo
  }
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  oConnection.connect(err => {
    oConnection.db('Recycle').collection('usuario').replaceOne(oFiltro, oDatos, function (error, response) {
      if (error) {
        console.log('Error occurred while inserting');
        // return 
      } else {
        return res.json(response);
        // return 
      }
    })
    if (err) throw err;
  });
})
router.put('/UsuarioDelete', function (req, res) {
  const { _id } = req.body;
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  let oDatos = { $set: { isActive: 0 } }
  oConnection.connect(err => {
    oConnection.db('Recycle').collection('usuario').updateOne(oFiltro, oDatos, function (error, response) {
      if (error) {
        console.log('Error occurred while inserting');
        // return 
      } else {
        return res.json(response);
        // return 
      }
    })
    if (err) throw err;
  });
})
module.exports = router;