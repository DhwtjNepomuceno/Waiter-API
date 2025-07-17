const express = require('express');
const categoryRoute = express.Router();
const categoryController = require('../controllers/categoryController');

categoryRoute.get('/categories', categoryController.listCategories);
categoryRoute.post('/category', categoryController.createCategory);

categoryRoute.get('/', (_req, res) => {
    res.send("Category's route running.");
});

module.exports = categoryRoute;