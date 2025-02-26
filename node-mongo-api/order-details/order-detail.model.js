const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderDetails = new Schema({
    order_id: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    prod_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    prod_qty: {
        type: Number,
        required: true
    },
    prod_price: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Order-details', orderDetails);