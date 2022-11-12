const oConnection = require('../../database');
var oMongo = require('mongodb');
var express = require('express');
var router = express.Router();



router.get('/Material', function (req, res) {
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('material').find({ isActive: 1 }).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.get('/MaterialById', function (req, res) {
  const { _id } = req.body;
  let oFiltro = {
    $and: [
      { _id: new oMongo.ObjectID(_id) },
      { isActive: 1 }
    ]
  }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('material').find(oFiltro).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.get('/MaterialByName', function (req, res) {
  const { oNombre } = req.body;
  let oFiltro = {
    $and: [
      { 'oNombre': new RegExp(oNombre, 'i') },
      { isActive: 1 }
    ]
  }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('material').find(oFiltro).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.get('/MaterialByCategoria', function (req, res) {
  const { oNombre } = req.body;
  let oFiltro = {
    $and: [
      { oCategoria: { $elemMatch: { $elemMatch: { $in: [new RegExp(oNombre, 'i')] } } } },

      { isActive: 1 }
    ]
  }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('material').find(oFiltro).toArray((err, result) => {
      if (err) throw err;

      return res.json(result);
    })
    if (err) throw err;
  })
})
router.post('/Material', function (req, res) {

  const { oNombre, oDescripcion, oCategoria } = req.body;
  let oDatos = {
    "oNombre": oNombre,
    "oDescripcion": oDescripcion,
    "oCategoria": [oCategoria],
    "isActive": 1
  }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('material').insertOne(oDatos, function (error, response) {
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
router.put('/Material', function (req, res) {

  const { _id, oNombre, oDescripcion, oCategoria } = req.body;
  let oDatos = {
    "oNombre": oNombre,
    "oDescripcion": oDescripcion,
    "oCategoria": oCategoria
  }
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('material').replaceOne(oFiltro, oDatos, function (error, response) {
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
router.put('/MaterialDelete', function (req, res) {
  const { _id } = req.body;
  let oFiltro = { _id: new oMongo.ObjectID(_id) }
  let oDatos = { $set: { isActive: 0 } }
  oConnection.connect(err => {
    oConnection.db('wecancodeDB').collection('material').updateOne(oFiltro, oDatos, function (error, response) {
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