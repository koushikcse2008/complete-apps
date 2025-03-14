const express = require('express');
const Router = express.Router();
const ProductHelper = require('./product.service');
const Product = require('./product.model');

const createProduct = async (req, res, next) => {
    try {
        const data = await ProductHelper.createProduct(req.body);
        const return_data = {
            status: 200,
            data: data
        };
        res.status(200).json(return_data);
    } catch(error) { next(error); };
}

const editProduct = async (req, res, next) => {
    try {
        const data = await ProductHelper.editProduct(req.params.id);
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: data,
        };
        console.log(req.params.id);
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const data = await ProductHelper.updateProduct(req.body);
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

const listProduct = async (req, res, next) => {
    try {
        const data = await ProductHelper.listProduct();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            totalCount: data.length,
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const listProductPagination = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const products = await ProductHelper.listProductPagination(page, limit);
        const totalProducts = await Product.countDocuments();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: products,
            total: totalProducts,
            totalPages: Math.ceil(totalProducts / limit), 
            currentPage: page
          };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const data = await ProductHelper.deleteProduct(req.params.id);
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

Router.post('/create', createProduct);
Router.get('/edit/:id', editProduct);
Router.post('/update', updateProduct);
Router.get('/list', listProduct);
Router.get('/delete/:id', deleteProduct);
Router.get('/list-pagination', listProductPagination);

module.exports = Router;

