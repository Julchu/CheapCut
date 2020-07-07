"use strict";

let User = require('../models/Users').User;

let getCustomerInfo = async (username) => {
	let customer = await User.findOne({username: username});
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
	user.rating = rating;
	await user.save();
}



module.exports = {getCustomerInfo, setUserRating};