const oConnection = require('../../database');
var oMongo = require('mongodb');
var express = require('express');
var router = express.Router();

router.get('/Manualidad', function (req, res) {

  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidad').find({ isActive: 1 }).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.get('/ManualidadById', function (req, res) {
  const { _id } = req.body;
  let oFiltro = {
    $and: [
      { _id: new oMongo.ObjectID(_id) },
      { isActive: 1 }
    ]
  }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidad').find(oFiltro).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.post('/Manualidad', function (req, res) {

  const { oTitulo, oAutor, oContenido, oUrlImage, oFecha, oUserID } = req.body;
  let oDatos = {
    "oTitulo": oTitulo,
    "oAutor": oAutor,
    "oContenido": oContenido,
    "oUrlImage": oUrlImage,
    "oFecha": oFecha,
    "oUserId": oUserID,
  }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidad').insertOne(oDatos, function (error, response) {
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
router.put('/Manualidad', function (req, res) {

  const { _id, oTitulo, oAutor, oContenido, oUrlImage, oFecha, oUserID } = req.body;
  let oDatos = {
    "oTitulo": oTitulo,
    "oAutor": oAutor,
    "oContenido": oContenido,
    "oUrlImage": oUrlImage,
    "oFecha": oFecha,
    "oUserId": oUserID,
  }
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidad').replaceOne(oFiltro, oDatos, function (error, response) {
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
router.put('/ManualidadDelete', function (req, res) {
  const { _id } = req.body;
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  let oDatos = { $set: { isActive: 0 } }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidad').updateOne(oFiltro, oDatos, function (error, response) {
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