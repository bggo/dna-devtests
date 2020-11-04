const express = require('express')
const userController = require('./Controllers/userController')
const routes = express.Router()

routes.get('/users', userController.list)
routes.post('/login', userController.auth)

module.exports = routes