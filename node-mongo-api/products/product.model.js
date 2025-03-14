const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    cat_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    brand_id: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    prod_name: {
        type: String,
        required: true
    },
    prod_slug: {
        type: String,
        required: true
    },
    prod_inventory: {
        type: Number,
        required: true
    },
    prod_price: {
        type: Number,
        required: true
    },
    prod_short_desc: {
        type: String,
        required: true
    },
    prod_desc: {
        type: String,
        required: true
    },
    prod_status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', product);

