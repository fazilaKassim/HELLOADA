const express = require("express");
const router = new express.Router();
const bcrypt = require("bcrypt");
const userModel = require("./../models/User");


router.get('/inscriptions', (req, res) => {
    res.render("inscriptions", {title: "Inscription"});
  });

router.post("/inscriptions", (req, res, next) => {
    
    res.redirect("/connectionCandidat");
});

module.exports = router;
