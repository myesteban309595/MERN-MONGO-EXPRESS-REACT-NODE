
const express = require('express');
const colors = require('colors')
const config = require('../src/config')

const app = express();

PORT = config.module.PORT || 5000;

//^middlewares

app.use(express.json());

//^ conexion al servidor 

app.listen(PORT, ()=> {

    console.log(("escuchando desde el localhost:"+PORT+" ").inverse);
})

module.exports = app;