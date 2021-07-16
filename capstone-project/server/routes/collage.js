const express = require("express");
const router = express.Router();
const collage = require("../data/collage.json")


router.get('/collage', (_req, res) => {
    res.status(200).json(collage);
})

module.exports = router;