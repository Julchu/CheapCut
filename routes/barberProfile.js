"use strict";

let getUserInfo = require("../services/profileServices").getUserInfo;
let createAppointment = require("../services/appointmentServices").createAppointment;

let express = require("express");
let router = express.Router();

router.get("/", async (req, res, next) => {
	if (!req.isAuthenticated()) {
		res.redirect("/login");
	}

	res.render("barberProfile", {title: "Barber Profile"});
});

// Get profile information of selected (profileId) 
router.get("/:profileId", async (req, res, next) => {
	if (!req.isAuthenticated()) {
		res.redirect("/login");
	}
	
	let data = await getUserInfo(req.params.profileId);

	res.render("barberProfile", {title: data.name, about: data.bio, contact: data.contactInfo, rating: data.ratingNum});
});

// Test Appointment dashboard
router.get("/:profileId/appointment", (req, res, next) => {
	if (req.isAuthenticated()) {
		res.render("appointment");
	} else {
		res.redirect("/login");
	}
});

// Create appointment with current logged-in user and selected (viewed) profile
router.post("/:profileId/appointment", async (req, res, next) => {
	console.log(req.user.userType);
	if (req.isAuthenticated()) {
		let appointment = await createAppointment(req.body.startTime, req.body.endTime, req.params.profileId, req.user.id);
		
		// res.status(response);
		res.redirect("/barberprofile/" + req.params.profileId);

		// TODO: redirect to successful appointment page
	} else {
		res.redirect("/login");
	}
});

module.exports = router;