 const mongoose = require('mongoose');

 const tareaSchema = new mongoose.Schema({

    tarea: {
        type:String,
        require: true
    },
    descripcion: {
        type:String,
        require: true
    }
 })

 module.exports = mongoose.model('tareas', tareaSchema)