
const mongoose = require('mongoose');

const userModel = require('./models/user.models');

(async()=>{

    await mongoose.connect('mongodb://localhost/mern-api-practice')
    .then(db => console.log(("conectado a la base de datos ").bgGreen.black))
    .catch(error => console.error(error))

    //^ verificamos si hay informacion en la base de datos, de no haber, los creamos automaticamente

    const userExist = userModel.find();

    if( userExist.length == 0)
    {
        const user1 = new userModel({

            nombre : "marlon yoel",
            apellido : "esteban valencia",
            email: "marlon@hotmail.com",
            edad: 26,
            telefono : "3124568987",
            direccion : "cll estorbo",

        })
        const user2 = new userModel({

            
            nombre : "ingrid paola",
            apellido : "jimenez",
            email: "ingrid@hotmail.com",
            edad: 25,
            telefono : "3002455689",
            direccion : "cll siempre viva",

        })

        user1.save();
        user2.save();
    }

})();