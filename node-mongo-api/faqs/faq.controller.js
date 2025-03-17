const express = require('express');
const Router = express.Router();
const FaqHelper = require('./faq.service');
const Faq = require('./faq.model');

const createFaq = async (req, res, next) => {
    try {
        const data = await FaqHelper.createFaq(req.body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const editFaq = async (req, res, next) => {
    try {
        const data = await FaqHelper.editFaq(req.params.id);
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

const updateFaq = async (req, res, next) => {
    try {
        const data = await FaqHelper.updateFaq(req.params.id, req.body);
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


const listFaq = async (req, res, next) => {
    try {
        const data = await FaqHelper.listFaq();
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


const deleteFaq = async (req, res, next) => {
    try {
        const data = await FaqHelper.deleteFaq(req.params.id);
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

const listFaqPagination = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const faqs = await FaqHelper.listFaqPagination(page, limit);
        const totalFaqs = await Faq.countDocuments();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: faqs,
            total: totalFaqs,
            totalPages: Math.ceil(totalFaqs / limit), 
            currentPage: page
          };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}


Router.post('/create', createFaq);
Router.get('/edit/:id', editFaq);
Router.put('/update/:id', updateFaq);
Router.get('/list', listFaq);
Router.get('/delete/:id', deleteFaq);
Router.get('/list-pagination', listFaqPagination);

module.exports = Router;