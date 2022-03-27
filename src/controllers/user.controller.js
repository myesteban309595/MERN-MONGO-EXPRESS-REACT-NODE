

const user = require('../models/user.models')

exports.getUser= async (req,res)=> {

    const allUser = await user.find();
    res.json(allUser)
    console.log(("se han obtenido todos los usuarios ").bgGreen.black);
    //res.send("se han obtenido todos los usuarios")
    console.log(allUser);

}

