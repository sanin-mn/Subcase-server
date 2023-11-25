const movies = require('../Models/movieSchema')

// add movies
exports.addMovie = async (req,res)=>{
    console.log("Inside add movie function");
    const {moviename,language,director,transalator,genre,imdb,info,userId} = req.body  
    const movieImage = req.files.movieImage[0].filename
    const subfile = req.files.subfile[0].filename
    // console.log(`${moviename},${language},${director},${transalator},${genre},${imdb},${info},${movieImage},${subfile},${userId}`);
    try{
        const existingMovie = await movies.findOne({moviename})
        if(existingMovie){
            res.status(406).json("Project already exist...")  
        }else{
            const newMovie = new movies({
                moviename,language,director,transalator,genre,imdb,info,movieImage,subfile,userId
            })
            await newMovie.save()
            res.status(200).json(newMovie)
        }
    }catch(err){
    res.status(402).json(`Error Transaction failed : ${err}`)
    }
}