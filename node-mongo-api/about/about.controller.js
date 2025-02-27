const express = require('express');
const Router = express.Router();
const AboutHelper = require('./about.about');
const About = require('./about.model');

const createAbout = async (req, res, next) => {
    try {
        const data = await AboutHelper.createAbout(req.body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
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
        const data = await AboutHelper.updateAbout(req.params.id, req.body);
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
        res.status(200).json(data);
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


Router.post('/create', createAbout);
Router.get('/edit/:id', editAbout);
Router.put('/update/:id', updateAbout);
Router.get('/list', listAbout);
Router.get('/delete/:id', deleteAbout);
Router.get('/list-pagination', listAboutPagination);

module.exports = Router;