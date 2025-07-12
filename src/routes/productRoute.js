const express = require('express');
const router = express.Router();
const productControl = require('../controller/productControl')

router.get("/", (req, res) => {
    res.send("Product's route running.");
});

module.exports = router;