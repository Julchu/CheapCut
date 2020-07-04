"use strict";

let createUser = require("../services/loginServices").createUser;

let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
	res.render("register", {title: "CheapCut",	about: "A place for new barbers to exchange experience for affordable haircuts"});
});

router.post("/", async (req, res, next) => {
	let username = req.body.username;
	let password = req.body.password;
	let userType = req.body.userType;
	
	let register = await createUser(username, password, userType);
	
	res.redirect("/login");
});

module.exports = router;
