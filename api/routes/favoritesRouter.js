const express = require('express');
const router = express.Router();
const {addFavorite, getFavoritesOfUser,deleteFavoriteOfUser} = require('../controllers/favoritesControllers');
const {auth} = require('../controllers/authControllers');
    
// add a favorite movie
router.post("/",auth, addFavorite)

// get favorites of a user
router.get("/",auth, getFavoritesOfUser)

// delete favorite of a user
router.delete("/:movieId",auth, deleteFavoriteOfUser)


module.exports = router