const express = require('express');
const productRoute = express.Router();
const productController  = require('../controllers/productController');

productRoute.get('/products', productController.listProducts);
productRoute.post('/product', productController.createProduct);
productRoute.get('/:categoryId/products', productController.listProductsByCategory )

productRoute.get('/', (req, res) => {
    res.send("Product's route running.");
});

module.exports = productRoute;