const express = require('express');
const router = express.Router();

const movieSearchRouter = require('./movieSearchRouter');
const authRouter = require('./authRouter');
const usersRouter = require('./usersRouter');
const favoritesRouter = require('./favoritesRouter');

router.use("/movie", movieSearchRouter)
router.use("/auth", authRouter)
router.use("/users", usersRouter)
router.use("/favorites", favoritesRouter)

module.exports = router