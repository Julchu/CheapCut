"use strict";

let loginUser = require("../services/loginServices").loginUser;

let express = require("express");
let router = express.Router();


router.get("/", (req, res, next) => {
	res.render("login", {title: "CheapCut",	about: "A place for new barbers to exchange experience for affordable haircuts"});
});

router.post("/", async (req, res, next) => {
	let username = req.body.username;
	let password = req.body.password;
	console.log(req.body.username);
	let user = {
		username: username,
		password: password,
	}
	
	let login = await loginUser(user);
	
	res.render("login", {title: "CheapCut",	about: "A place for new barbers to exchange experience for affordable haircuts"});
});

module.exports = router;