const express = require('express');
const Router = express.Router();
const ServiceHelper = require('./service.service');
const Service = require('./service.model');
const multer = require('multer');
const path = require('path');

// Set up storage for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

const createService = async (req, res, next) => {

    const { sv_name, sv_desc } = req.body;
    const sv_image = req.file ? req.file.path : null;

    const serviceData = {
        sv_name,
        sv_desc,
        sv_image
    };

    try {
        const data = await ServiceHelper.createService(serviceData);
        res.status(200).json(data);
    } catch (error) {
        /*next(error);*/
        res.status(400).json({ error: err.message });
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
        const { sv_name, sv_desc } = req.body;
        const sv_image = req.file ? req.file.path : null;
        const serviceData = {
            sv_name,
            sv_desc,
            sv_image
        };

        const data = await ServiceHelper.updateService(req.params.id, serviceData);
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


Router.post('/create', upload.single('sv_image'), createService);
Router.get('/edit/:id', editService);
Router.put('/update/:id', upload.single('sv_image'), updateService);
Router.get('/list', listService);
Router.get('/delete/:id', deleteService);
Router.get('/list-pagination', listServicePagination);

module.exports = Router;