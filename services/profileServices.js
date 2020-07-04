"use strict";

let User = require('../models/Users').User;

let getCustomerInfo = async (username) => {
	let customer = await User.findOne({username: username});
	let customerInfo;
    if (customer != "") {
		customerInfo = {
			username: customer.username,
			userType: customer.userType
		}
     }
	return customerInfo
	
}

module.exports = {getCustomerInfo};