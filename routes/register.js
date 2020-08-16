"use strict";

let createUser = require("../services/loginServices").createUser;

let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
	if (req.isAuthenticated()) {
		res.redirect('/successPlaceholder');
	} else {
		res.render("register", { title: "CheapCut",	about: "Register an account" });
	}
});

router.post("/", async (req, res, next) => {
	let username = req.body.username;
	let password = req.body.password;
	let userType = req.body.userType;

	let response = await createUser(username, password, userType);
	console.log(response);
	if (response === "") {
		res.redirect("/login");
	} else {
		res.render("register", { title: "CheapCut",	about: "Register an account", error: response });
	}
});

module.exports = router;
