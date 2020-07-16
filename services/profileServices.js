"use strict";

let User = require('../models/Users').User;
let bcryptServices = require("./bcryptServices");

let getUserId = async (profileId) => {
	let userId = await User.findOne({profileId: profileId});
	// TODO edge cast catching
	return userId;
};

let getCustomerInfo = async (profileId) => {
	let customer = await User.findOne({profileId: profileId});
	if (customer.rating) {
		console.log("Rating");
	} else {
		console.log("No rating");
	}
	let customerInfo;
    if (customer != "") {
		customerInfo = {
			userId: customer.id,
			username: customer.username,
            userType: customer.userType,
            userRating: customer.rating
		}
    }
	return customerInfo	
};

let setUserRating = async (username, rating) => {
	let user = await User.findOne({username: username});
	if (user.rating) {
		// user.rating = ((rating + user.rating * user.pastApt.length) / user.pastApt.length + 1)
		console.log("Updating user " + username + " rating to: " + rating);
	} else {
		console.log("Setting user " + username + " rating to: " + rating);
		user.rating = rating;
	}
	await user.save();
};

let setUsername = async (username, newUsername) => {
	let user = await User.findOne({username: username});
	user.username = newUsername;
	await user.save();
};

let setPassword = async (username, newPassword) => {
	let user = await User.findOne({username: username});
	let encryptedPassword = await bcryptServices.encrypt(newPassword);
	user.password = encryptedPassword;
	await user.save();
};

let getUserInfo = async (id) => {
	let data = {
		name: "Name not Found",
		bio: "Bio not Found",
		contactInfo: "Contact info not found",
		ratingNum: "Rating not found"
	}

	let user = await User.findOne({profileId: id});
	
	if (user) {
		data.name = user.username;
		data.bio = user.bio;
		data.contactInfo = user.contactInfo;
		data.ratingNum = user.rating;
	}

    return data;
};

module.exports = {getCustomerInfo, setUserRating, getUserInfo, getUserId};