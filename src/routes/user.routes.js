
const express = require('express')
const route = express.Router();

const {getUser} = require('../controllers/user.controller')

route.get('/',getUser)

module.exports = route;