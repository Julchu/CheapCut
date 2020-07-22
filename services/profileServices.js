"use strict";

let User = require('../models/Users').User;
let bcryptServices = require("./bcryptServices");

let getUser = async (profileId) => {
	let user = await User.findOne({profileId: profileId});
	return user;
}

let getUserId = async (profileId) => {
	let user = await getUser(profileId);
	return user._id;
};

let getUserType = async (profileId) => {
	let user = await getUser(profileId);
	return user.userType;
}

let getUserInfo = async (profileId) => {
	let data = {
		name: "Name not Found",
		bio: "Bio not Found",
		contactInfo: "Contact info not found",
		ratingNum: "Rating not found",
		userType: "Customer"
	}

	let user = await getUser(profileId);
	
	if (user) {
		data.name = user.email;
		data.bio = user.bio;
		data.contactInfo = user.contactInfo;
		data.ratingNum = user.rating;
		data.userType = user.userType;
	}

	return data;
};

let getUserEmail = async (profileId) => {
	let user = await getUser(profileId);
	return user.email;
}

let getCustomerInfo = async (profileId) => {
	let customer = await getUser(profileId);
	if (customer.rating) {
		console.log("Rating");
	} else {
		console.log("No rating");
	}
	let customerInfo;
	if (customer != "") {
		customerInfo = {
			userId: customer.id,
			email: customer.email,
			userType: customer.userType,
			userRating: customer.rating
		}
	}
	return customerInfo	
};

let setUserRating = async (email, rating) => {
	let user = await User.findOne({email: email});
	if (user.rating) {
		// user.rating = ((rating + user.rating * user.pastApt.length) / user.pastApt.length + 1)
		console.log("Updating user " + email + " rating to: " + rating);
	} else {
		console.log("Setting user " + email + " rating to: " + rating);
		user.rating = rating;
	}
	await user.save();
};

// TODO: validate proper user, and validate new email isn't taken
let setUsername = async (email, profileId) => {
	let response = "";
	let user = await User.findOne({email: email});
	if (user) {
		let exists = await User.findOne({profileId: profileId});
		if (!exists) {
			user.email = newUsername;
			await user.save();
		} else {
			response = "email already exists";
		}
	} else {
		response = "User not found";
	}
	return response;
};

let setPassword = async (email, newPassword) => {
	let user = await User.findOne({email: email});

	if (user) {			
		let encryptedPassword = await bcryptServices.encrypt(newPassword);
		user.password = encryptedPassword;
		await user.save();
	} else {
		response = "User not found";
	}
};

module.exports = {
	getUser, getCustomerInfo, getUserInfo, getUserId, getUserType,
	setUserRating, setUsername, setPassword, getUserEmail
};