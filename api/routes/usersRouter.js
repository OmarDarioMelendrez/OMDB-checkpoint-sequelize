const express = require('express');
const router = express.Router();
const {register,getAllUsers, getUserById} = require('../controllers/usersControllers');
const {auth} = require('../controllers/authControllers')
    

// register user
router.post("/register", register)

// get user by id with his favorites
router.get("/:id",auth, getUserById)

// register user
router.get("/",auth, getAllUsers)


module.exports = router