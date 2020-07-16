"use strict";

let express = require("express");
let router = express.Router();

let profileServices = require("../services/profileServices");
let Appointment = require("../models/Appointments").Appointment;

router.get("/", (req, res, next) => {
	if (req.isAuthenticated()) {
		res.render("testAppointment");
	} else {
		res.redirect("/login");
	}
});

router.get("/:profileId", async (req, res, next) => {
	if (!req.isAuthenticated()) {
		res.redirect("/login");
	}
	
	let data = await profileServices.getUserInfo(req.params.profileId);

	res.render("barberProfile", {title: data.name, about: data.bio, contact: data.contactInfo, rating: data.ratingNum});
});

router.post("/:profileId", async (req, res, next) => {
	if (req.isAuthenticated()) {
		res.redirect("/testappointment/" + req.params.profileId);
	} else {
		res.redirect("/login");
	}

	// TODO: move to services file
	let startTime = req.body.startTime;
	let endTime = req.body.endTime;
	
	let barberId = await profileServices.getUserId(req.params.profileId);
	let customerId = req.user.id;

	let appointment = new Appointment({
		startTime: startTime,
		endTime: endTime,
		barber: barberId,
		customer: customerId
	});

	console.log("appointment");
	console.log(appointment);
	// await appointment.save()
	
});

module.exports = router;