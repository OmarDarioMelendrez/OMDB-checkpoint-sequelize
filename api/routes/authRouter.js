const express = require('express');
const passport = require('passport');
const router = express.Router();
const {
    auth,
    login,
    logout} = require('../controllers/authControllers');
    


// log in user
router.post("/login", passport.authenticate("local"), auth ,login)

//log out user
router.post("/logout", auth, logout)

router.get("/me",auth, (req, res ,next) => {
    res.send(req.user);
})



module.exports = router