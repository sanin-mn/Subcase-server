// const multer = require('multer')


// const storage  = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpeg'){
//             callback(null,'./public/uploads')
//         }else{
//             callback(null,'./public/subtitles')
//         }
//     },
//     filename:(req,file,callback)=>{
//         const name = Date.now()+'-'+file.originalname
//         callback(null,name)
//     }
// })

// const fileFilter = (req,file,callback)=>{
//     if(file.fieldname === "movieImage"){
//         (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpeg') ? callback(null,true) : callback(null,false)
//     }else if(file.fieldname === "subfile"){
//         (file.mimetype === 'application/srt' || file.mimetype === 'application/txt') ? callback(null,true) : callback(null,false)
//     }
// }

// const multerConfig = multer({
//     storage,
//     fileFilter
// }).fields([{name : 'movieImage',maxCount:1},{name : 'subfile',maxCount:1}])

// module.exports = multerConfig