const multer = require('multer')


const storage  = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const name = Date.now()+'-'+file.originalname
        callback(null,name)
    }
})

const multerConfig = multer({
    storage,
}).fields([{name : 'movieImage',maxCount:1},{name : 'subfile',maxCount:1}])

module.exports = multerConfig