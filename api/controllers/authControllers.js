const {User} = require('../models');

// auth of the user is loged in
const auth = (req,res,next) => {
    let user = req.user
    if (user){
        next()
    } else {
        res.status(403).send({msg: "unathorized"})
    }
}

// log in user
const login = (req,res,next) => {
    let user = req.user;
    user.password = null;
    res.send(user)
}

// logout
const logout = (req,res,next) => {
    console.log("entro al log out");
    req.logOut();
    res.send(req.user)
}


module.exports = {
    auth,
    login,
    logout
}