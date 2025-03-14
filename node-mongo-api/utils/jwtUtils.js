// utils/jwtUtils.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Function to generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: config.jwtExpire,
  });
};

module.exports = generateToken;
