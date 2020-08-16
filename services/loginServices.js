"use strict";

let Barber = require('../models/Users').Barber;
let Customer = require('../models/Users').Customer;
let User = require('../models/Users').User;
let bcryptServices = require("./bcryptServices");

let createUser = async (email, password, userType) => {
	let response = "";

	/* 	Checks if barber's email exists in database
		If barber doesn't exist, create new barber object and save it to database
	*/
	if (email && password && (userType==="customer" || userType === "barber")) {
		let exists = await User.find({ email: email });
		// If email doesn't exist, check datatype to create specific user type (barber, customer)
		if (exists == "") {
			// If email doesn't exist, check datatype to create specific user type (barber, customer)
			console.log("Trying to create user");
			let encryptedPassword = await bcryptServices.encrypt(password);
	
			// Setting type of user: barber/customer
			let newUser;
			if (userType === "barber") {
				newUser = new Barber({});			
			} else if (userType === "customer") {
				newUser = new Customer({});
			}

			// Default user attributes
			newUser.email = email;
			newUser.password = encryptedPassword;
			newUser.userType = userType;

			// TODO: error catching
			await newUser.save();

			// let response = await newUser.save().then(() => {
			// 	console.log("user created");
			// 	console.log(response);
			// }).catch((err) => {
			// 	console.log(err.msg);
			// });
			
			
		} else {
			response = "User already exists";
		}
	}
	return response;
};

module.exports = {createUser};
