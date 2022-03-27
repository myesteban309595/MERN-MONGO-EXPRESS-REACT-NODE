
const express = require('express');
const morgan = require('morgan')
const colors = require('colors')
const config = require('../src/config')

require('./db');

const app = express();

PORT = config.module.PORT || 5000;

//^middlewares
app.use(morgan('dev'))
app.use(express.json());

//^ rutas

app.use('/api', require('./routes/user.routes'));

//^ conexion al servidor 

app.listen(PORT, ()=> {

    console.log(("escuchando desde el localhost:"+PORT+" ").inverse);
})

module.exports = app;