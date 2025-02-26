const express = require('express');
const Router = express.Router();
const OrderDetailsHelper = require('./order-detail.service');

const createOrderDetails = async (req, res, next) => {
    try {
        const data = await OrderDetailsHelper.createOrderDetails(req.body);
        const return_data = {
            status: 200,
            message: "Successfully added.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const editOrderDetails = async (req, res, next) => {
    try {
        const data = await OrderDetailsHelper.editOrderDetails(req.params.id);
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const updateOrderDetails = async (req, res, next) => {
    try {
        const data = await OrderDetailsHelper.updateOrderDetails(req.body);
        const return_data = {
            status: 200,
            message: "Successfully updated.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const listOrderDetails = async (req, res, next) => {
    try {
        const data = await OrderDetailsHelper.listOrderDetails();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const deleteOrderDetails = async (req, res, next) => {
    try {
        const data = await OrderDetailsHelper.deleteOrderDetails(req.body._id);
        const return_data = {
            status: 200,
            message: "Successfully deleted.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error); 
    }
}

Router.post('/create', createOrderDetails);
Router.get('/edit/:id', editOrderDetails);
Router.post('/update', updateOrderDetails);
Router.get('/list', listOrderDetails);
Router.post('/delete', deleteOrderDetails);

module.exports = Router;
