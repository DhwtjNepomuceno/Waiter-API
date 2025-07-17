const express = require('express');
const productRoute = express.Router();
const productController  = require('../controllers/productController');

productRoute.get('/products', productControl.listProducts);
productRoute.post('/product', productControl.createProduct);
productRoute.get('/:categoryId/products', productController.listProductsByCategory )

productRoute.get('/', (req, res) => {
    res.send("Product's route running.");
});

module.exports = productRoute;