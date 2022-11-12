var express = require('express');
var app = express();
const oMaterial = require('./src/components/material');
const oUsuario = require('./src/components/usuario');
const oManualidadMaterial = require('./src/components/manualidadMaterial');
const oManualidad = require('./src/components/manualidad');
const oCategoria = require('./src/components/categoria');


app.use("/API/Reciclaje",oMaterial)
app.use("/API/Reciclaje",oUsuario)
app.use("/API/Reciclaje",oManualidadMaterial)
app.use("/API/Reciclaje",oManualidad)
app.use("/API/Reciclaje",oCategoria)


app.listen(3000,() => {
    console.log('SERVER RUNNING')
})
module.exports = app;