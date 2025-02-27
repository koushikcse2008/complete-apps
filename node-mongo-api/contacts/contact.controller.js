const express = require('express');
const Router = express.Router();
const ContactHelper = require('./contact.service');
const Contact = require('./contact.model');

const createContact = (req, res, next) => {

    ContactHelper.createContact(req.body)
    .then((data) => { 
        console.log(data);
        res.status(200).json(data);
    })
    .catch((err) => next(err));
}

const editContact = async (req, res, next) => {
    try {
        const data = await ContactHelper.editContact(req.params.id);
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

const updateContact = (req, res, next) => {

    ContactHelper.updateContact(req.params.id, req.body)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => next(err));
}

const listContact = (req, res, next) => {
    
    ContactHelper.listContact()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => next(error));
}

const listContactPagination = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const brands = await ContactHelper.listContactPagination(page, limit);
        const totalContacts = await Contact.countDocuments();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: brands,
            total: totalContacts,
            totalPages: Math.ceil(totalContacts / limit), 
            currentPage: page
          };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const deleteContact = (req, res, next) => {

    ContactHelper.deleteContact(req.params.id)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => next(error));
}

Router.post('/create', createContact);
Router.get('/edit/:id', editContact);
Router.put('/update/:id', updateContact);
Router.get('/list', listContact);
Router.get('/delete/:id', deleteContact);
Router.get('/list-pagination', listContactPagination);

module.exports = Router;