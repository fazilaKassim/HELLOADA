const express = require("express");
const router = new express.Router();

router.get("/dashboard", (req, res) => {
    res.render("dashboard/dashboard");
});

module.exports = router;