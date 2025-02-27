const express = require('express');
const Router = express.Router();
const UserHelper = require('./user.service');
const User = require('./user.model');

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
        const data = await UserHelper.editUser(req.params.id);
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
        const data = await UserHelper.updateUser(req.params.id, req.body);
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

const listUserPagination = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const users = await UserHelper.listUserPagination(page, limit);
        const totalUsers = await User.countDocuments();
        const return_data = {
            status: 200,
            message: "Successfully fetched.",
            data: users,
            total: totalUsers,
            totalPages: Math.ceil(totalUsers / limit), 
            currentPage: page
          };
        res.status(200).json(return_data);
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const data = await UserHelper.deleteUser(req.params.id);
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
Router.put('/update/:id', updateUser);
Router.get('/list', listUser);
Router.get('/delete/:id', deleteUser);
Router.get('/list-pagination', listUserPagination);
Router.post('/register', registerUser);
Router.post('/login', loginUser);

module.exports = Router;