const express = require('express');
const Router = express.Router();
const ServiceHelper = require('./service.service');
const Service = require('./service.model');

const createService = async (req, res, next) => {
    try {
        const data = await ServiceHelper.createService(req.body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const editService = async (req, res, next) => {
    try {
        const data = await ServiceHelper.editService(req.params.id);
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

const updateService = async (req, res, next) => {
    try {
        const data = await ServiceHelper.updateService(req.params.id, req.body);
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


const listService = async (req, res, next) => {
    try {
        const data = await ServiceHelper.listService();
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}


const deleteService = async (req, res, next) => {
    try {
        const data = await ServiceHelper.deleteService(req.params.id);
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

const listServicePagination = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const services = await ServiceHelper.listServicePagination(page, limit);
        const totalServices = await Service.countDocuments();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: services,
            total: totalServices,
            totalPages: Math.ceil(totalServices / limit), 
            currentPage: page
          };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}


Router.post('/create', createService);
Router.get('/edit/:id', editService);
Router.put('/update/:id', updateService);
Router.get('/list', listService);
Router.get('/delete/:id', deleteService);
Router.get('/list-pagination', listServicePagination);

module.exports = Router;