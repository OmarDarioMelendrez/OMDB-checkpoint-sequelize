const express = require("express");
const router = express.Router();
const {
	getMovieById,
	getMovieByTitle,
} = require("../controllers/moviesControllers");
const { auth } = require("../controllers/authControllers");

// get single movie by id
router.get("/id/:id", auth,getMovieById);
// get movies by title
router.get("/:movie", auth,getMovieByTitle);

module.exports = router;
