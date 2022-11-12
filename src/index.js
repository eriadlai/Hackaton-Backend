var express = require('express');
var app = express();
const oMaterial = require('./components/material');

app.use("/API/Reciclaje",oMaterial)

app.listen(3000,() => {
    console.log('SERVER RUNNING')
})
module.exports = router