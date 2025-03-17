const express = require('express');
const Router = express.Router();
const BrandHelper = require('./brand.service');
const Brand = require('./brand.model');

const createBrand = async (req, res, next) => {
    try {
        const data = await BrandHelper.createBrand(req.body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const editBrand = async (req, res, next) => {
    try {
        const data = await BrandHelper.editBrand(req.params.id);
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


const updateBrand = async (req, res, next) => {
    try {
        const data = await BrandHelper.updateBrand(req.params.id, req.body);
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


const listBrand = async (req, res, next) => {
    try {
        const data = await BrandHelper.listBrand();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: data,
        };
        res.status(200).json(return_data);
        //const data = await BrandHelper.listBrand();
    } catch (error) {
        next(error);
    }
}


const deleteBrand = async (req, res, next) => {
    try {
        const data = await BrandHelper.deleteBrand(req.params.id);
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

const listBrandPagination = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const brands = await BrandHelper.listBrandPagination(page, limit);
        const totalBrands = await Brand.countDocuments();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: brands,
            total: totalBrands,
            totalPages: Math.ceil(totalBrands / limit), 
            currentPage: page
          };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

Router.post('/create', createBrand);
Router.get('/edit/:id', editBrand);
Router.put('/update/:id', updateBrand);
Router.get('/list', listBrand);
Router.get('/delete/:id', deleteBrand);
Router.get('/list-pagination', listBrandPagination);

module.exports = Router;