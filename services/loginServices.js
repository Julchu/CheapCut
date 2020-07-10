"use strict";

let Barber = require('../models/Users').Barber;
let Customer = require('../models/Users').Customer;
let User = require('../models/Users').User;
let bcryptService = require("./bcryptService");

let createUser = async (username, password, userType) => {
	let register = false;
	/* 	Checks if barber's username exists in database
		If barber doesn't exist, create new barber object and save it to database
	*/
	let exists = await User.find({ username: username });
	// If username doesn't exist, check datatype to create specific user type (barber, customer)
	if (exists == "") {
		// If username doesn't exist, check datatype to create specific user type (barber, customer)
		console.log("Trying to create user");
		let encryptedPassword = await bcryptService.encrypt(password);

		let newUser;
		if (userType === "barber") {
			newUser = new Barber({});			
		} else if (userType === "customer") {
			newUser = new Customer({});
		}
		newUser.username = username;
		newUser.password = encryptedPassword;
		newUser.userType = userType;
		await newUser.save();
		
		console.log("User created");
		register = true;
	} else {
		console.log("User already exists");
	}
	return register;
};

let loginUser = async (username, password) => {
	if (!username || !password) {
		console.log("User did not enter a username or password")
		return false;
	}
	let exists = await User.findOne({ username: username});
	let login = false;
	if (exists != "") {
		if (await bcryptService.compare(password, exists.password)) {
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
