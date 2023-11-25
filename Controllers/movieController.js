const movies = require('../Models/movieSchema')

// add movies
exports.addMovie = async (req, res) => {
    console.log("Inside add movie function");
    const { moviename, language, director, transalator, genre, imdb, info, userId } = req.body
    const movieImage = req.files.movieImage[0].filename
    const subfile = req.files.subfile[0].filename
    // console.log(`${moviename},${language},${director},${transalator},${genre},${imdb},${info},${movieImage},${subfile},${userId}`);
    try {
        const existingMovie = await movies.findOne({ moviename })
        if (existingMovie) {
            res.status(406).json("Project already exist...")
        } else {
            const newMovie = new movies({
                moviename, language, director, transalator, genre, imdb, info, movieImage, subfile, userId
            })
            await newMovie.save()
            res.status(200).json(newMovie)
        }
    } catch (err) {
        res.status(402).json(`Error Transaction failed : ${err}`)
    }
}
// get all movie for admin
exports.getAllMovies = async (req, res) => {
    const userId = req.payload
    try {

        const adminMovies = await movies.find({ userId })
        res.status(200).json(adminMovies)

    } catch (err) {
        res.status(401).json(`Error!!! Transaction failed :${err}`)
    }
}

// get home movies 
exports.getHomeMovies = async(req,res)=>{
    try{
        const homeMovies = await movies.find().limit(5)
        res.status(200).json(homeMovies)
    }catch(err){
        res.status(401).json(`Error!!! Transaction failed :${err}`)
    }
}

// get all movies
exports.getAllMovies = async(req,res)=>{
    try{
        const allMovies = await movies.find()
        res.status(200).json(allMovies)
    }catch(err){
        res.status(401).json(`Error!!! Transaction failed :${err}`)
    }
}