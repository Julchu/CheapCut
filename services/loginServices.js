"use strict";

let Barber = require('../models/Barber').Barber;

let createUser = async (username, password) => {
	let barb1 = new Barber({
		username: username,
		password: password
	});

	console.log(username);
	console.log(password);

	await barb1.save();
};

module.exports = {createUser};
