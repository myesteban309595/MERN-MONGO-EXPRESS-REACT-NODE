 const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({

    nombre: {
        type:String,
        require: true
    },
    apellido: {
        type:String,
        require: true
    },
    email: {
        type:String,
        require: true
    },
    edad: {
        type:Number,
        require: true
    },
    telefono: {
        type:String,
        require: true
    },
    direccion: {
        type:String,
        require: true
    }
 })

 module.exports = mongoose.model('user', userSchema)