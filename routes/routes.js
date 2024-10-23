const express = require('express');
const route = express.Router();
// controllers
const { 
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoControllers');
const {
    signup,
    login
} = require('../controllers/authController');
const authenticateToken = require('../middleware/authenticateToken');

// Todo routes
route.get('/todo',authenticateToken,getTodo);

route.post('/todo',authenticateToken,createTodo);

route.put('/todo/:id',authenticateToken,updateTodo);

route.delete('/todo/:id',authenticateToken,deleteTodo);

// user routes
route.post('/signup',signup);

route.post('/login',login);

module.exports = route;