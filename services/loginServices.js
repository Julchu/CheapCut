"use strict";

let Barber = require('../models/Users').Barber;
let Customer = require('../models/Users').Customer;
let User = require('../models/Users').User;
let bcryptServices = require("./bcryptServices");

let createUser = async (username, password, userType) => {
	let response = "";
	/* 	Checks if barber's username exists in database
		If barber doesn't exist, create new barber object and save it to database
	*/
	if (username && password && (userType==="customer" || userType === "barber")) {
		
		let exists = await User.find({ username: username });
		// If username doesn't exist, check datatype to create specific user type (barber, customer)
		if (exists == "") {
			console.log(exists);
			// If username doesn't exist, check datatype to create specific user type (barber, customer)
			console.log("Trying to create user");
			let encryptedPassword = await bcryptServices.encrypt(password);
			userType = "barber";
			let newUser;
			if (userType === "barber") {
				newUser = new Barber({});			
			} else if (userType === "customer") {
				newUser = new Customer({});
			}
			newUser.username = username;
			newUser.password = encryptedPassword;
			newUser.userType = userType;
			// await newUser.save();
			
			console.log("User created");
			response = "200";
		} else {
			console.log("User already exists");
			response = "User already exists";
		}
	}
	return response;
};

module.exports = {createUser};
