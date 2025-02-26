const express = require('express');
const Router = express.Router();
const UserHelper = require('./user.service');

const createUser = async (req, res, next) => {
    try {
        const data = await UserHelper.createUser(req.body);
        const return_data = {
            status: 200,
            data: data
        };
        res.status(200).json(return_data);
    } catch(error) {
        next(error);
    }
}

const editUser = async (req, res, next) => {
    try {
        const data = await UserHelper.editUser(req.body);
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

const updateUser = async (req, res, next) => {
    try {
        const data = await UserHelper.updateUser(req.body);
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

const listUser = async (req, res, next) => {
    try {
        const data = await UserHelper.listUser();
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

const deleteUser = async (req, res, next) => {
    try {
        const data = await UserHelper.deleteUser(req.body._id);
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

const registerUser = (req, res, next) => {
    try {
        UserHelper.registerUser(req.body)
        .then((data) => { 
            res.status(200).json(data);
        })
        .catch((err) => next(err));
    } catch (error) {
        next(error); 
    }
}

const loginUser = (req, res, next) => {
    try {
        UserHelper.loginUser(req.body)
        .then((data) => { 
            res.status(200).json(data);
        })
        .catch((err) => next(err));
    } catch (error) {
        next(error); 
    }
}

Router.post('/create', createUser);
Router.get('/edit/:id', editUser);
Router.post('/update', updateUser);
Router.get('/list', listUser);
Router.post('/delete', deleteUser);
Router.post('/register', registerUser);
Router.post('/login', loginUser);

module.exports = Router;