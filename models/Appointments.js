"use strict";

let mongoose = require("mongoose");

var appointmentSchema = new mongoose.Schema({
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
    barber: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}
});

let Appointment = mongoose.model("Appointment", userSchema, "Appointments");

module.exports = {Appointment};