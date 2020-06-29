"use strict";

let mongoose = require("mongoose");

/* Using discriminators allows us to create base User "classes"
	Subclasses can inherit the attribute requirements from the User class
*/
var options = { discriminatorKey: 'Users' };

/* User base class */
var userSchema = new mongoose.Schema({
	// Username: must be unique
	username: {type: String, required: true},

	// TODO: encrypt password with BCrypt
	password: {type: String, required: true},

	// User's join date
	joinDate: {type: Date, required: true, default: Date.now()},
	
	// User type must be either customer or barber: enumerators "customer", "barber"
	userType: {type: String, required: true, enum: ['customer', 'barber']},

	// TODO: validate phone number (REGEX?)
	phone: {type: Number},
	contactInfo: [{type: String}],
	rating: {type: Number, default: 5}
}, options);

let User = mongoose.model("User", userSchema, "Users");

/* Barber users */
let barberSchema = new mongoose.Schema({
	// Address is information is only required by barbers
	address: {type: String},

	// TODO: differentiate/allocate between different social media platforms
	socialMedia: [{type: String}]
}, options);

/* Customer users */
let customerSchema = new mongoose.Schema({
}, options);

// Admin users will be able to perform maintenance functionalities
let adminSchema = new mongoose.Schema({
}, options);

var Barber = User.discriminator('Barber', barberSchema);
var Customer = User.discriminator('Customer', customerSchema);
var Admin = User.discriminator('Admin', adminSchema);

module.exports = {User, Barber, Customer, Admin};

/* Info/example of schema discriminators
	http://thecodebarbarian.com/2015/07/24/guide-to-mongoose-discriminators
*/
