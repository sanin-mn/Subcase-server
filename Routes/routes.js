// import express
const express = require('express')
// import usercontroller.js
const usercontroller = require('../Controllers/userController')
// import movie controller
const movieController = require('../Controllers/movieController')
// import multer middleware
const multerConfig = require('../Middlewares/multerMiddleware')
// import jwt middleware
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

// creating router for express app using Router()
const router = new express.Router()

// define different routes for server app
// register
router.post('/user/register',usercontroller.register)
// login
router.post('/user/login',usercontroller.login)
// add movies
router.post('/movie/add',jwtMiddleware,multerConfig,movieController.addMovie)
// get admin movies
router.get('/admin/movies',jwtMiddleware,movieController.getAllMovies)
// get home movies
router.get('/home/homemovies',movieController.getAllMovies)
// get all movies
router.get('/movies/all',jwtMiddleware,movieController.getAllMovies)

// export router
module.exports = router