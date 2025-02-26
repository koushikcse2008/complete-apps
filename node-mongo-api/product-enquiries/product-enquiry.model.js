const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productEnquiry = new Schema({
    prod_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },    
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_phone: {
        type: String
    },
    query_details: {
        type: String,
        required: true
    },
    query_status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('product-enquiry', productEnquiry);