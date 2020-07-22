"use strict";

let mongoose = require("mongoose");

/* Using discriminators allows us to create base User "classes"
	Subclasses can inherit the attribute requirements from the User class
*/
var options = { discriminatorKey: 'Users' };

/* User base class */
var userSchema = new mongoose.Schema({
	// Username: must be unique
	email: {type: String, required: true},

	// TODO: encrypt password with BCrypt
	password: {type: String, required: true},

	// Username (unique identifier when people search)
	profileId: {type: String},

	// User's join date
	joinDate: {type: Date, required: true, default: Date.now()},
	
	// User type must be either customer or barber: enumerators "customer", "barber"
	userType: {type: String, required: true, enum: ['customer', 'barber']},

	// TODO: validate phone number (REGEX?)
	phone: {type: Number},

	// TODO: validate email
	email: {type: String},

	// Average of user's ratings from other people
	rating: {type: Number},

	// Dictionary of user's ratings of other people (to ensure only one rating for a person)
	userRatingsNum: {type: Map, of: String},
	
	// Dictionary of user's ratings description of other people (to give a reason for a rating (contestable))
	userRatingsDesc: {type: Map, of: String},

	// TODO: upcoming (singular) appointment and list of past appointments: {reference appointment database object};
	upcomingApt: {type: mongoose.Schema.Types.ObjectId, ref: 'Appointments'},
	pastApt: [{type: mongoose.Schema.Types.ObjectId, ref: 'Appointments'}]

	/* Mongoose schema referencing other users; populate documentation
		https://stackoverflow.com/questions/18001478/referencing-another-schema-in-mongoose
	*/

}, options);

let User = mongoose.model("User", userSchema, "Users");

/* Barber users */
let barberSchema = new mongoose.Schema({
	// Address is information is only required by barbers
	address: {type: String},

	bio: {type: String, default: "No Bio Yet"},

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
