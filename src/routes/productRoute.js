const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Product's route running.");
});

module.exports = router;