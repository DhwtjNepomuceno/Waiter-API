const express = require('express');
const orderRoute = express.Router();
const orderController = require('../controllers/orderController');

orderRoute.get('/Orders', orderController.listOrders);
orderRoute.post('/order', orderController.createOrder);
orderRoute.patch('/orders/orderId', orderController.updateOrderStatus);

orderRoute.get('/', (_req, res) => {
    res.send("Order's route running.");
});

module.exports = orderRoute;