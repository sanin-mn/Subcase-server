// import express
const express = require('express')
// import usercontroller.js
const usercontroller = require('../Controllers/userController')
// import movie controller
const movieController = require('../Controllers/movieController')
// import multer middleware
const multerConfig = require('../Middlewares/multerMiddleware')

// creating router for express app using Router()
const router = new express.Router()

// define different routes for server app
// register
router.post('/user/register',usercontroller.register)
// login
router.post('/user/login',usercontroller.login)
// add movies
router.post('/movie/add',multerConfig,movieController.addMovie)


// export router
module.exports = router