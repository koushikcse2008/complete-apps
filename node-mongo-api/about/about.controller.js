const express = require('express');
const Router = express.Router();
const AboutHelper = require('./about.service');
const About = require('./about.model');
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

const createAbout = async (req, res, next) => {

    const { ab_name, ab_desc } = req.body;
    const ab_image = req.file ? req.file.path : null;

    const aboutData = {
        ab_name,
        ab_desc,
        ab_image
    };

    try {
        const data = await AboutHelper.createAbout(aboutData);
        const return_data = {
            status: 200,
            message: "Successfully added.",
            data: data,
        };
        res.status(200).json(return_data);
    } catch (error) {
        /*next(error);*/
        const return_data = {
            status: 400,
            message: "Error.",
            data: { error: err.message },
        };
        res.status(400).json(return_data);
    }
}

const editAbout = async (req, res, next) => {
    try {
        const data = await AboutHelper.editAbout(req.params.id);
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

const updateAbout = async (req, res, next) => {
    try {
        const { ab_name, ab_desc } = req.body;
        const ab_image = req.file ? req.file.path : null;
        const aboutData = {
            ab_name,
            ab_desc,
            ab_image
        };

        const data = await AboutHelper.updateAbout(req.params.id, aboutData);
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


const listAbout = async (req, res, next) => {
    try {
        const data = await AboutHelper.listAbout();
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


const listAboutPagination = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const abouts = await AboutHelper.listAboutPagination(page, limit);
        const totalAbouts = await About.countDocuments();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: abouts,
            total: totalAbouts,
            totalPages: Math.ceil(totalAbouts / limit), 
            currentPage: page
          };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}


const deleteAbout = async (req, res, next) => {
    try {
        const data = await AboutHelper.deleteAbout(req.params.id);
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


Router.post('/create', upload.single('ab_image'), createAbout);
Router.get('/edit/:id', editAbout);
Router.put('/update/:id', upload.single('ab_image'), updateAbout);
Router.get('/list', listAbout);
Router.get('/delete/:id', deleteAbout);
Router.get('/list-pagination', listAboutPagination);

module.exports = Router;