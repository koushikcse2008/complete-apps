// config/config.js
require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE,
  mongoURI: process.env.MONGO_DB_URI,
};
