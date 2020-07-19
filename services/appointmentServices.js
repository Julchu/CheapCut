"use strict";

let getUserId = require("./profileServices").getUserId;
let Appointment = require("../models/Appointments").Appointment;

let createAppointment = async (startTime, endTime, profileId, customerId) => {
	let response = "";
	// Validate against front-end script modifications (and changing to unavailable times)
	let starTimeValidator = (startTime.getMinutes() % 30 == 0);
	let endTimeValidator = (endTime.getMinutes() === startTime.getMinutes() + 30);

	if (starTimeValidator && endTimeValidator) {
		let barberId = await getUserId(profileId);
		let appointment = new Appointment({
			startTime: startTime,
			endTime: endTime,
			barber: barberId,
			customer: customerId
		});

		// Test error/response to saving document
		// await appointment.save();
	} else {
		response = "Appointment not created"
	}
	return response;
}

module.exports = {createAppointment};