// load env file
require('dotenv').config()

// import express
const express = require('express')
// import cors
const cors = require('cors')


// create express server
const subServer = express()

// use cors
subServer.use(cors())
// parse json data to server
subServer.use(express.json())

// port for server
const PORT = 4000 || process.env.PORT

// to run server
subServer.listen(PORT,()=>{
    console.log(`subServer started at port:${PORT}`);
})
// resolve request to local host
subServer.get('/',(req,res)=>{
    res.send(`<p> subServer server started !!! <p/>`)
})