
const mongoose = require('mongoose');

(()=>{

    mongoose.connect('mongodb://localhost/mern-api-practice')
    .then(db => console.log(("conectado a la base de datos ").bgGreen.black))
    .catch(error => console.error(error))

})();