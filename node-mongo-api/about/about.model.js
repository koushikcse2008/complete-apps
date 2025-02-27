const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const About = new Schema({
    ab_name: {
        type: String,
        required: true
    },
    ab_desc: {
        type: String,
        required: true
    },
    ab_image: {
        type: String,
        required: false
    },
    ab_status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('About', About);