"use strict";

let createUser = require("../services/loginServices").createUser;

let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
	res.render("login", {title: "CheapCut",	about: "Sign-in/Register"});
});

router.post("/", (req, res, next) => {
	let username = req.body.username;
	let password = req.body.password;

	createUser(username, password);
	
	res.render("login", {title: "CheapCut",	about: "Sign-in/Register"});
});

module.exports = router;
