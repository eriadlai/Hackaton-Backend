var express = require('express');
var app = express();
var cors = require('cors')
const bodyParser = require("body-parser");
const oMaterial = require('./src/components/material');
const oUsuario = require('./src/components/usuario');
const oManualidad = require('./src/components/manualidad');
const oCategoria = require('./src/components/categoria');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use("/API/Reciclaje", oMaterial)
app.use("/API/Reciclaje", oUsuario)
app.use("/API/Reciclaje", oManualidad)
app.use("/API/Reciclaje", oCategoria)


app.listen(3001, () => {
    console.log('SERVER RUNNING')
})
module.exports = app;