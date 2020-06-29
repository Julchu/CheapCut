"use strict";

let Barber = require('../models/Users').Barber;
let Customer = require('../models/Users').Customer;
let User = require('../models/Users').User;

let createUser = async (user) => {
	/* Checks if barber's username exists in database
		If barber doesn't exist, create new barber object and save it to database
	*/
	let exists = await User.find({ username: user.username });
	// If username doesn't exist, check datatype to create specific user type (barber, customer)
	if (exists == "") {
		console.log("Trying to create user");
		let newUser;
		if (user.userType === "barber") {
			newUser = new Barber({});			
		} else if (user.userType === "customer") {
			newUser = new Customer({});
		}

		newUser.username = user.username;
		newUser.password = user.password;
		newUser.userType = user.userType;
		await newUser.save();
		console.log("User created");
	} else {
		console.log("User exists");
	}
};

module.exports = {createUser};
