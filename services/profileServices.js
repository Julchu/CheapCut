"use strict";

let User = require('../models/Users').User;

let getCustomerInfo = async (username) => {
	let customer = await User.findOne({username: username});
	if (customer.rating) {
		console.log("Rating");
	} else {
		console.log("No rating");
	}
	let customerInfo;
    if (customer != "") {
		customerInfo = {
			username: customer.username,
            userType: customer.userType,
            userRating: customer.rating
		}
    }
	return customerInfo
	
}

let setUserRating = async (username, rating) => {
	let user = await User.findOne({username: username});
	if (user.rating) {
		// rating = (user.rating + rating) / user.
		console.log("Updating user " + username + " rating to: " + rating);
	} else {
		console.log("Setting user " + username + " rating to: " + rating);
		user.rating = rating;
	}
	
	await user.save();
}



module.exports = {getCustomerInfo, setUserRating};