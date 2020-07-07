"use strict";

let express = require('express');
let router = express.Router();
let getCustomerInfo = require('../services/profileServices').getCustomerInfo;
let setUserRating = require('../services/profileServices').setUserRating;

router.get('/', async (req, res, next) => {
	let customerInfo = await getCustomerInfo('sara')
	res.render('customerProfile', { customerName: customerInfo.username, userType: customerInfo.userType, userRating: customerInfo.userRating});
});

router.post("/", async (req, res, next) => {
	let rating = req.body.rating;
	let username = "sara";
	await setUserRating(username, rating);
	res.redirect("/customerprofile");
	// res.render('customerProfile', { customerName: customerInfo.username, userType: customerInfo.userType, userRating: customerInfo.userRating});
});


module.exports = router;