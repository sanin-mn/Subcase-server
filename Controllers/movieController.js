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
exports.getHomeMovies = async (req, res) => {
    try {
        const homeMovies = await movies.find().limit(5)
        res.status(200).json(homeMovies)
    } catch (err) {
        res.status(401).json(`Error!!! Transaction failed :${err}`)
    }
}

// get all movies
exports.getAllMovies = async (req, res) => {
    try {
        const allMovies = await movies.find()
        res.status(200).json(allMovies)
    } catch (err) {
        res.status(401).json(`Error!!! Transaction failed :${err}`)
    }
}

// edit movies
exports.editMovies = async (req, res) => {

    const userId = req.payload
    const { moviename, language, director, transalator, genre, imdb, info, movieImage, subfile } = req.body
    const uploadedImage = req.files ? req.files.movieImage[0].filename : movieImage
    const uploadedsub = req.files ? req.files.subfile[0].filename : subfile

    const { id } = req.params
    try {
        const updateMovie = await movies.findByIdAndUpdate({_id:id},{
            moviename,language,director,transalator,genre,imdb,info,movieImage:uploadedImage,subfile:uploadedsub,userId
        },{new:true})
        await updateMovie.save()
        res.status(200).json(updateMovie)
    } catch (err) {
        res.status(401).json(`Error!!! Transaction failed :${err}`)
    }
}

// deleet movie
exports.deleteMovies = async (req,res) =>{
    const {id} = req.params
    try{
        const removeMovie = await movies.findByIdAndDelete({_id:id})
        res.status(200).json(removeMovie)
    }catch(err){
        res.status(401).json(`Error!!! Transaction failed :${err}`)
    }
}