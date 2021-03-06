"use strict";

let Barber = require('../models/Users').Barber;
let Customer = require('../models/Users').Customer;
let User = require('../models/Users').User;
let bcryptService = require("./bcryptService");

let createUser = async (user) => {
	// Checks if barber's username exists in database
	//	If barber doesn't exist, create new barber object and save it to database
	//
	let exists = await User.find({ username: user.username });
	// If username doesn't exist, check datatype to create specific user type (barber, customer)
	if (exists == "") {
		// If username doesn't exist, check datatype to create specific user type (barber, customer)

		console.log("Trying to create user");
		let password = await bcryptService.encrypt(user.password);

		let newUser;
		if (user.userType === "barber") {
			newUser = new Barber({});			
		} else if (user.userType === "customer") {
			newUser = new Customer({});
		}
		newUser.username = user.username;
		newUser.password = password;
		newUser.userType = user.userType;
		await newUser.save();
		
		console.log("User created");
	} else {
		console.log("User already exists");
	}
};

let loginUser = async (user) => {
	let exists = await User.findOne({ username: user.username});
	let login = false;
	if (exists != "") {
		if (await bcryptService.compare(user.password, exists.password)) {
			login = true;
			console.log("User credentials correct")
		} else {
			console.log("Incorrect password")
		}
	} else {
		console.log("User does not exist")
	}
	return login
}

module.exports = {createUser, loginUser};
