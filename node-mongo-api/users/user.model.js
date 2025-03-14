const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

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
            required: true,
            unique: true,
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
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active',
            required: true
        }
    },
    { timestamps: true }
);

// Password hash middleware
Users.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Password verification method
Users.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', Users);


// {
//     "user_type": "user",
//     "user_name": "koushik",
//     "email": "koushik@gmail.com",
//     "password": "123456",
//     "phone": "9876543210",
//     "addr": "laketown",
//     "country": "India",
//     "state": "West Bengal",
//     "city": "Kolkata",
//     "zipcode": "700089",
//     "status": "active"
// }


