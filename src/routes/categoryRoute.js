const express = require('express');
const router = express.Router();
const categoryControl = require('../controller/categoryControl')

router.get("/", (req, res) => {
    res.send("Category's route running.");
});

module.exports = router;