const axios = require('axios')
const config = require('../config')

// get movie by id
const getMovieById = async (req,res,next) => {
    try {
        const singleMovie = await axios.get(`${config.omdbApiUrl}&i=${req.params.id}&plot=full`)
        res.send(singleMovie.data)

    } catch (err) {
        next(err)
    }
}

// get movie by title
const getMovieByTitle = async(req,res,next) => {
    try {
        // console.log(req.user);
        const result = await axios.get(`${config.omdbApiUrl}&s=${req.params.movie}`)
        // console.log(result.data);
        res.send(result.data)    
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getMovieById,
    getMovieByTitle
}