const {User, Favorite} = require('../models');

// register user
const register = async (req,res,next) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        })
        newUser.password = null
        res.status(201).send(newUser)
    } catch (err) {
        console.log("entro al catch register");
        next(err)
    }
}

// get all users
const getAllUsers = async (req,res,next) => {
    try {
        const users = await User.findAll({include: {
            model: Favorite
        }});
        users.map(user => user.password = null)
        res.send(users)
    } catch (err) {
        next(err)
    }
}

// get user by id with his favorites
const getUserById = async (req,res,next) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: Favorite
            }
        });
        user.password = null
        res.send(user)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    register,
    getAllUsers,
    getUserById
}