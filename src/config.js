const {config} = require('dotenv');

config();

exports.module = {
    
     PORT: process.env.PORT
}