const {Favorite, User} = require('../models')

// add a favorite movie
const addFavorite = async (req,res,next) => {
    try {
        const newFavorite = await Favorite.create({
            imdbID: req.body.imdbID,
            Title: req.body.Title,
            Poster: req.body.Poster
        })
        const user = await User.findByPk(req.user.id)
        // console.log(Object.keys(Favorite.prototype));
        newFavorite.setUser(user)
        res.send(newFavorite)
    } catch (err) {
        next(err)
    }
} 
// get favorites of a user
const getFavoritesOfUser = async (req,res,next) => {
    try {
        console.log("busca favoritoooos");
        const favorites = await Favorite.findAll({where: {
            userId: req.user.id
        }})
        res.send(favorites)
    } catch (err) {
        next(err)
    }
}

// delete favorite of a user
const deleteFavoriteOfUser = async (req,res,next) => {
    try {
        console.log("imdbID", req.body.id);
        const deletedFavorite = await Favorite.destroy({where:{
            userId: req.user.id,
            imdbID: req.params.movieId
        }})
        const favorites = await Favorite.findAll({where: {
            userId: req.user.id
        }})
        res.send(favorites)    
    } catch (err) {
        next(err)
    }
}

module.exports = {
    addFavorite,
    getFavoritesOfUser,
    deleteFavoriteOfUser
}