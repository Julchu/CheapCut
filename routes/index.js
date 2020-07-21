"use strict";

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.isAuthenticated()) {
		res.render('index', { title: 'CheapCut', about: "A place to find cheap hairstyles in exchange for hairstyle practice" });
	} else {
		res.redirect("/login");
	}
});

module.exports = router;