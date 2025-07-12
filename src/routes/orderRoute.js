const express = require('express');
const router = express.Router();
const orderControl = require('../controller/orderControl')

router.get("/", (req, res) => {
    res.send("Order's route running.");
});

module.exports = router;