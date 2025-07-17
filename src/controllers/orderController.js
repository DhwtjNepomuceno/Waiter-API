const orderService = require('../services/orderService');

class orderController {

    listOrders(req, res) {
        try{
           const orders = orderService.getOrders(); 
           

        } catch (error) {
            res.status(500).json({ error: error.message || "Failed to find orders." })
        }
        

    }

}

module.exports = orderController;