const express = require('express');
const router = express.Router()

const orderRoute = require('./orderRoute');
const productRoute = require('./productRoute');
const categoryRoute = require('./categoryRoute');

router.get("/", (req, res) => res.status(200).send("Hiya, World!"));

router.use("/order", orderRoute);
router.use("/product", productRoute);
router.use("/category", categoryRoute);

module.exports = router;