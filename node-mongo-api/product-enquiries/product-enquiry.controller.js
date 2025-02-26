const express = require('express');
const Router = express.Router();
const ProductEnquiryHelper = require('./product-enquiry.service');

const createProductEnquiry = async (req, res, next) => {
    try {
        const data = await ProductEnquiryHelper.createProductEnquiry(req.body);
        const return_data = {
            status: 200,
            data: data
        };
        res.status(200).json(return_data);
    } catch(error) { next(error); };
}

const editProductEnquiry = async (req, res, next) => {
    try {
        const data = await ProductEnquiryHelper.editProductEnquiry(req.params.id);
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

const updateProductEnquiry = async (req, res, next) => {
    try {
        const data = await ProductEnquiryHelper.updateProductEnquiry(req.body);
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

const listProductEnquiry = async (req, res, next) => {
    try {
        const data = await ProductEnquiryHelper.listProductEnquiry();
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

const deleteProductEnquiry = async (req, res, next) => {
    try {
        const data = await ProductEnquiryHelper.deleteProductEnquiry(req.body._id);
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

Router.post('/create', createProductEnquiry);
Router.get('/edit/:id', editProductEnquiry);
Router.post('/update', updateProductEnquiry);
Router.get('/list', listProductEnquiry);
Router.post('/delete', deleteProductEnquiry);

module.exports = Router;