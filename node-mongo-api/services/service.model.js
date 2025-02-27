const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Service = new Schema({
    sv_name: {
        type: String,
        required: true
    },
    sv_desc: {
        type: String,
        required: true
    },
    sv_image: {
        type: String,
        required: false
    },
    sv_status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Service', Service);