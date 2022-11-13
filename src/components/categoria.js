const oConnection = require('../../database');
var oMongo = require('mongodb');
var express = require('express');
var router = express.Router();

router.get('/Categoria', function (req, res) {

  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('categoria').find({ isActive: 1 }).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.get('/CategoriaById', function (req, res) {

  const { _id } = req.body;
  let oFiltro = {
    $and: [
      { _id: new oMongo.ObjectID(_id) },
      { isActive: 1 }
    ]
  }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('categoria').find(oFiltro).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.post('/Categoria', function (req, res) {

  const { oNombre, oDescripcion } = req.body;
  let oDatos = {
    "oNombre": oNombre,
    "oDescripcion": oDescripcion
  }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('categoria').insertOne(oDatos, function (error, response) {
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
router.put('/Categoria', function (req, res) {

  const { _id, oNombre, oDescripcion } = req.body;
  let oDatos = {
    "oNombre": oNombre,
    "oDescripcion": oDescripcion,
  }
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('categoria').replaceOne(oFiltro, oDatos, function (error, response) {
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
router.put('/CategoriaDelete', function (req, res) {

  const { _id } = req.body;
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  let oDatos = { $set: { isActive: 0 } }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('categoria').updateOne(oFiltro, oDatos, function (error, response) {
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