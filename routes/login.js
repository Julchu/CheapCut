"use strict";

let express = require("express");
let router = express.Router();

router.get("/", function(req, res, next) {
	res.render("login", {
		title: "Login",
		about: "Sign-in/Register"
	});
});

module.exports = router;
