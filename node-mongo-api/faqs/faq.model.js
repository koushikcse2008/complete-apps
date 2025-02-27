const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Faq = new Schema({
    faq_question: {
        type: String,
        required: true
    },
    faq_answer: {
        type: String,
        required: true
    },
    faq_status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Faq', Faq);