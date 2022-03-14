const express = require("express");
const router = new express.Router();


// we need to define the router

router.get(`/ali`, (req, res) => {
    res.send("Hello Ali")
})

module.exports = router;