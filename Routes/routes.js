// import express
const express = require('express')
// import usercontroller.js
const usercontroller = require('../Controllers/userController')
// creating router for express app using Router()
const router = new express.Router()

// define different routes for server app
// register
router.post('/user/register',usercontroller.register)



// export router
module.exports = router