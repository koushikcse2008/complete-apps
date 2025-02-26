const express = require('express');
const Router = express.Router();
const CategoryHelper = require('./category.service');
const Category = require('./category.model');
//const Joi = require('joi');

const createCategory = async (req, res, next) => {
    try {
        const data = await CategoryHelper.createCategory(req.body);
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

const editCategory = async (req, res, next) => {
    try {
        const data = await CategoryHelper.editCategory(req.params.id);
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

const updateCategory = async (req, res, next) => {

    // Define the validation schema
    // const schema = Joi.object({
    //     _id: Joi.string().required(),
    //     cat_name: Joi.string().min(3).max(255).required(),
    //     cat_status: Joi.string().valid('active', 'inactive').required(),
    // });

    // // Validate the input data
    // const { error } = schema.validate(updateCategory);
    // if (error) {
    //     throw new Error(`Validation error: ${error.details[0].message}`);
    // }

    try {
        const data = await CategoryHelper.updateCategory(req.params.id, req.body);
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

const listCategory = async (req, res, next) => {
    try {
        const data = await CategoryHelper.listCategory();
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

const listCategoryPagination = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const categories = await CategoryHelper.listCategoryPagination(page, limit);
        const totalCategories = await Category.countDocuments();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: categories,
            total: totalCategories,
            totalPages: Math.ceil(totalCategories / limit), 
            currentPage: page
          };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const deleteCategory = async (req, res, next) => {
    try {
        const data = await CategoryHelper.deleteCategory(req.params.id);
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



Router.post('/create', createCategory);
Router.get('/edit/:id', editCategory);
Router.put('/update/:id', updateCategory);
Router.get('/list', listCategory);
Router.get('/delete/:id', deleteCategory);
Router.get('/list-pagination', listCategoryPagination);

module.exports = Router;
