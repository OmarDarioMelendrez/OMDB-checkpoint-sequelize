const User = require('./User')
const Favorite = require('./Favorite')


User.hasMany(Favorite);
Favorite.belongsTo(User);

User.belongsToMany(User, { through: 'friends', as: "user" });
User.belongsToMany(User, { through: 'friends' , as: "friend"});


module.exports = {
    User,
    Favorite
}