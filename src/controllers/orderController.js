const orderService = require('../services/orderService');

class orderController {

    listOrders(req, res) {
        try{
           const orders = orderService.getOrders(); 

           if(!orders) {
            return res.status(404).json({ message: "No orders found." });
           }

           res.status(200).json(orders);
           

        } catch (error) {
            res.status(500).json({ error: error.message || "Failed to find orders." })
        };
    };

    createOrder(req, res) {
        try{
            const { clientTable, products, quantity } = req.body
            const orderCreated = orderService.postOrder(clientTable, products, quantity);

            if(!clientTable || !products || !quantity) {
                return res
                .status(400)
                .json({ message: "Table, product(s) and quantity are required."});
            }
            res.status(201).json(orderCreated);
        } catch (error) {
            res.status(500).json({ error: error.message || "Failed to make order." });
        };
    };

}

module.exports = orderController;