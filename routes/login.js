"use strict";


let express = require("express");
//let User = require("../services/mongo").User;
let router = express.Router();

router.get("/", function(req, res, next) {
	res.render("login", {
		title: "Login",
		about: "Sign-in/Register"
	});
});
/*
// Basic login functionality, all credentials (non-encrypted) saved on MongoDB
router.post("/", async function(req, res) {
	console.log("A : " , req.body.email);
    console.log("B : " , req.body.password);
    
	let exists = await User.find({ email: req.body.email });
	if (exists == "") {
		let user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		});
	}
});*/

module.exports = router;

/*
var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/