"use strict";

let Barber = require('../models/Users').Barber;
let Customer = require('../models/Users').Customer;
let User = require('../models/Users').User;

let express = require("express");
let router = express.Router();

let bcrypt = require('bcrypt');
const saltRounds = 12;

let addUser = async function(user, hash) {
	let newUser;
	if (user.userType === "barber") {
		newUser = new Barber({});			
	} else if (user.userType === "customer") {
		newUser = new Customer({});
	}
	newUser.username = user.username;
	newUser.password = hash;
	newUser.userType = user.userType;
	await newUser.save();
}

let createUser = async (user) => {
	// Checks if barber's username exists in database
	//	If barber doesn't exist, create new barber object and save it to database
	//
	let exists = await User.find({ username: user.username });
	// If username doesn't exist, check datatype to create specific user type (barber, customer)
	if (exists == "") {
		// If username doesn't exist, check datatype to create specific user type (barber, customer)
		bcrypt.hash(user.password, saltRounds, function(err, hash) {
			addUser(user, hash);
		});
	} else {
		console.log("User already exists");
	}
};
module.exports = {createUser};