"use strict";

let passport = require('passport');
let express = require("express");

let router = express.Router();


router.get("/login", (req, res, next) => {
	// If user is already logged in, redirect to success placeholder page
	if (req.isAuthenticated()) {
		res.redirect('/successPlaceholder');
	} else {
		res.render("login", { title: "Login", about: "Login to your account" });
	}
});

// Login logic, validates credentials with database using Passport.js (login Strategy in appJS)
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res, next) => { // , successRedirect: "/chat" 
	res.redirect("/successPlaceholder");
});

// Logout must be in the same router as login, otherwise redirection tries to fetch (GET) a /logout page (does not exist)
router.post('/logout', (req, res, next) => {
	req.logout();
	res.redirect('/login');
});

module.exports = router;