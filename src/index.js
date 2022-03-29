
const express = require('express');
const morgan = require('morgan')
const colors = require('colors')
const path = require('path');

const config = require('../src/config');
const { dirname } = require('path');

require('./db');

const app = express();

PORT = config.module.PORT || 5000;

//^middlewares
app.use(morgan('dev'))
app.use(express.json());

//^ rutas API

app.use('/api', require('./routes/tareas.routes'));

//^ rutas estaticas

app.use(express.static(path.join(__dirname,'public'))); //& el index busca el html y lo pinta por pantalla

//^ conexion al servidor 

app.listen(PORT, ()=> {

    console.log(("escuchando desde el localhost:"+PORT+" ").inverse);
})

module.exports = app;


