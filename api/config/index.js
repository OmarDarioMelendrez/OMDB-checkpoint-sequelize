const dotenv = require('dotenv');

const envFound = dotenv.config();
if(!envFound){
    throw new Error("Couldn't find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports ={
    port: 3001,
    omdbApiUrl: "http://www.omdbapi.com/?apikey=7bbb11a0"
}