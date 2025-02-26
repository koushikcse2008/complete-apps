const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema(
    { 
        user_type: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
            required: true
        },
        user_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: false
        },
        addr: {
            type: String
        },
        country: {
            type: String
        },
        state: {
            type: String
        },
        city: {
            type: String
        },
        zipcode: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', Users);



