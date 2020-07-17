"use strict";

let getUserId = require("./profileServices").getUserId;
let Appointment = require("../models/Appointments").Appointment;

let createAppointment = async (startTime, endTime, profileId, customerId) => {
	let barberId = await getUserId(profileId);
	let appointment = new Appointment({
		startTime: startTime,
		endTime: endTime,
		barber: barberId,
		customer: customerId
	});

	// Test error/response to saving document
	await appointment.save();
}

module.exports = {createAppointment};