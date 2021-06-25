const { User } = require("../models");
const bcrypt = require("bcrypt");
LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
	var passport = require("passport"),
		LocalStrategy = require("passport-local").Strategy;

	passport.use(
		new LocalStrategy(async function (username, password, cb) {
			try {
				const user = await User.findOne({ where: {
          username: username
        } });
				if (!user) {
					return cb(null, false);
				}
				if (!(await bcrypt.compare(password, user.password))) {
					return cb(null, false);
				}
				return cb(null, user);
			} catch (err) {
				return cb(err);
			}
		})
	);
	passport.serializeUser(function (user, done) {
    console.log("serializando");
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
    console.log("entra deserialize");
		User.findByPk(id)
      .then(user => done(null, user));
	});
};
