
const mongoose = require('mongoose');

const tareaModel = require('./models/tareas.models');

(async()=>{
    //mongodb://localhost/mern-api-practice
    //mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
    await mongoose.connect('mongodb://localhost/mern-api-practice-tasks',{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(db => console.log(("conectado a la base de datos ").bgGreen.black))
    .catch(error => console.error(error))

    //^ verificamos si hay informacion en la base de datos, de no haber, los creamos automaticamente

    const tareaExist = await tareaModel.find();

    if( tareaExist.length == 0)
    {
        const tarea1 = new tareaModel({

            tarea : "comer",
            descripcion : "es la hora de comer"

        })
        const tarea2 = new tareaModel({

            tarea : "programar",
            descripcion : "es la hora de programar",

        })

        tarea1.save();
        tarea2.save();
    }

})();