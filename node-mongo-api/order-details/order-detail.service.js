const OrderDetails = require('./order-detail.model');

const createOrderDetails = async(newDetails) => {
    if (!newDetails || typeof newDetails !== 'object') {
        throw new Error('Invalid order details data');
    }

    try {
        return await new OrderDetails(newDetails).save();
    } catch(error) {
        throw error;
    }
}

const editOrderDetails = async (editId) => {
    try {
        return await OrderDetails.findById(editId);
    } catch(error) {
        throw error;
    }
}

const updateOrderDetails = async (updateDetails) => {
    try {
        return await OrderDetails.findByIdAndUpdate(
            { _id: updateDetails._id }, 
            { }, 
            { new: false }
        );
    } catch(error) {
        throw error;
    }
}

const listOrderDetails = async() => {
    try {
        return await OrderDetails.find();
    } catch(error) {
        throw error;
    }
}

const deleteOrderDetails = async (delId) => {
    try {
        const deleteDetails = await OrderDetails.findByIdAndDelete(delId);
        if(!deleteDetails) {
            throw new Error("No record found.");
        }
        return deleteDetails;
    } catch (error) {
        throw error;
    }
}

exports.module = {
    createOrderDetails,
    editOrderDetails,
    updateOrderDetails,
    listOrderDetails,
    deleteOrderDetails
} 