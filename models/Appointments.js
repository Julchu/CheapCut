"use strict";

let mongoose = require("mongoose");

var appointmentSchema = new mongoose.Schema({
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
    barber: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true},
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true}
});

let Appointment = mongoose.model("Appointment", appointmentSchema, "Appointments");

module.exports = {Appointment};