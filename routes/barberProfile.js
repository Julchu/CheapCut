"use strict";

let profileServices = require("../services/profileServices");
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
	
	// let data = await profileServices.getUserInfo(req.params.profileId);
	let user = await profileServices.getUser(req.params.profileId);

	res.render("barberProfile", {title: user.email, about: user.bio, contact: user.contactInfo, rating: user.rating, profileId: user.profileId});
});

/* Unnecessary when FE form can be set to GET request with action="profileId"/appointment/ */

// router.post("/:profileId", async (req, res, next) => {
// 	res.redirect("/barberProfile/" +  req.params.profileId + "/appointment");
// });

// Test Appointment dashboard
router.get("/:profileId/appointment", async (req, res, next) => {
	if (req.isAuthenticated()) {
		let userType = await profileServices.getUserType(req.params.profileId);
		if (userType === "barber") {
			res.render("appointment", { title: "Book an appointment", about: "Choose a timeslot with ", profileId: req.params.profileId });
		} else {
			res.redirect("/barberProfile/" +  req.params.profileId);
		}
	} else {
		res.redirect("/login");
	}
});

// Create appointment with current logged-in user and selected (viewed) profile
router.post("/:profileId/appointment", async (req, res, next) => {
	console.log(req.user.userType);
	if (req.isAuthenticated()) {
		// let appointment = await createAppointment(req.body.startTime, req.body.endTime, req.params.profileId, req.user.id);
		let daySelect = req.body.daySelect;
		let timeSelect = req.body.timeSelect;

		console.log(daySelect);
		console.log(timeSelect);
	
		
		// res.status(response);
		res.redirect("/barberprofile/" + req.params.profileId);

		// TODO: redirect to successful appointment page
	} else {
		res.redirect("/login");
	}
});

module.exports = router;