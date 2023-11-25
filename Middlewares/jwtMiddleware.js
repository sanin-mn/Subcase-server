const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    const token = req.headers['authorization'].split(" ")[1]
    console.log("Inside jwt middleware");
    try{
        const jwtResponse =  jwt.verify(token,"superSecretKey123")
        console.log(jwtResponse);
        req.payload = jwtResponse.userId
        next()
    }catch(err){
        res.status(401).json("Authorization failed !!! please login")
    }
}

module.exports = jwtMiddleware