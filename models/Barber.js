"use strict";

let mongoose = require("mongoose");

let barberSchema = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
});

let Barber = mongoose.model("Barber", barberSchema, "Barbers");

module.exports = {Barber};