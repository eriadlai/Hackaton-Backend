const oConnection = require('../../database');
var oMongo = require('mongodb');
var express = require('express');
var router = express.Router();

router.get('/Manualidad', function (req, res) {

  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidades').find({ isActive: 1 }).toArray((err, result) => {
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
    oConnection.db('wecancodeDB').collection('manualidades').find(oFiltro).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.get('/ManualidadByCategoria', function (req, res) {
  const { oCategoria } = req.body;
  let oFiltro = {
    $and: [
      { oCategorias: oCategoria  },
      { isActive: 1 }
    ]
  }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidades').find(oFiltro).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.get('/ManualidadByMaterial', function (req, res) {
  const { oMaterial } = req.body;
  let oFiltro = {
    $and: [
      { oMateriales: oMaterial },
      { isActive: 1 }
    ]
  }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidades').find(oFiltro).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.post('/Manualidad', function (req, res) {

  const { oTitulo, oAutor, oContenido, oUrlImage, oFecha, oConteoRanking, oMateriales, oCategorias, oComentarios } = req.body;
  let oDatos = {
    "oTitulo": oTitulo,
    "oAutor": oAutor,
    "oContenido": oContenido,
    "oUrlImage": oUrlImage,
    "oFecha": oFecha,
    "oConteoRanking": oConteoRanking,
    "oMateriales": [oMateriales],
    "oCategorias": [oCategorias],
    "oComentarios": [oComentarios],
    "isActive": 1
  }

  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidades').insertOne(oDatos, function (error, response) {
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
router.put('/ManualidadComentarios', function (req, res) {

  const { _id, oComentario } = req.body;
  let oDatos = {
    $push:

      { "oComentario": oComentario }
  }
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidades').updateOne(oFiltro, oDatos, function (error, response) {
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
router.put('/ManualidadCategoria', function (req, res) {

  const { _id, oCategorias } = req.body;
  let oDatos = {
    $push:

      { "oCategorias": oCategorias }
  }
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidades').updateOne(oFiltro, oDatos, function (error, response) {
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
router.put('/ManualidadMaterial', function (req, res) {

  const { _id, oMateriales } = req.body;
  let oDatos = {
    $push:

      { "oMateriales": oMateriales }
  }
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('manualidades').updateOne(oFiltro, oDatos, function (error, response) {
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
    oConnection.db('wecancodeDB').collection('manualidades').replaceOne(oFiltro, oDatos, function (error, response) {
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
    oConnection.db('wecancodeDB').collection('manualidades').updateOne(oFiltro, oDatos, function (error, response) {
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