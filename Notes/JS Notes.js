// JavaScript:

// Use strict JS rules (vs "everything works without reason" rules
// Strict JS is closer to normal programming languages in terms of making sense)
"use strict";

// Variable types: 

// Constants, cannot be altered, good for imports
const a = 'abc';
// a = 'acbd'; // Will not work because of const

// Normal variables we're used to in terms of blocks/scopes
// Ex: for loops, variable inside loop cannot be altered outside loop
let b = 'abc'
// let b = 'abcd'; // Will not work because you cannot redeclare variable name
b = 'abcd'; // Will work

// Do not use, block-/scope-less
var c = 'abc';
var c = 'abcd'; // Will work

function functioName(test) {
	// Test
}
module.exports = { objectName, functionName }: // Let you import objectName from another file
// let oN = fileName.objectName;
// let fN = fileName.functionName;
// functionName(test);

// Class template
class name {
	constructor(n) {
		// Cannot assign member to variable of same name; causes infinite recursive loop
		this.name = n;
	}

	// Get is a built-in JS getter, will return this._test
	get name() {
		return this.name;
	}

	set name(n) {
		this.name = n;
	}
	/*
		The built-in getter/setter methods allow you to access/modify using `object._member` syntax
		Ex: 
			let n = new name("cheese");
			n.name; // Will return "cheese"
			n.name = "cheese2"; // Will set n.name to "cheese2"
	*/
}

//ES5
var setNameIdsEs5 = function setNameIds(id, name) {
	return {
		id: id,
	};
};

// ES6
var setNameIdsEs6 = (id, name) => ({
	id: id,
	name: name
});

console.log(setNameIdsEs6(4, "Kyle"));   // Object {id: 4, name: "Kyle"}
// NodeJS

// In app.js
const about = require('./routes/about'); // Imports about about.js from routes
app.use('/about', about); // Waits for URL/about

// In about.js
router.get('/', function (req, res, next) { // Renders about page when page is called, with "/" page
	res.render('About', { title: 'About' });
});

// Ex: if app.use('/', about), and router.get('/about', function(req, res, next), same result
// Better to use app.use('/about', about) and app.get('/') (or any subpages of about)

// More info: https://www.terlici.com/2014/09/29/express-router.html
// App.js
app.use('/cars', cars)

// Cars.js
app.get('/brands')
app.get('/models')

// URLs: URL/cars/brands, URL/cars/models



// REST API
/*
	// Paramaters vs arguments for queries

	// req.params
	
	Params is for url-values
		Ex: /user/:id -> req.params.id

	Queries: req.query contains the query params of the request.
		Ex: sample.com?arg=true&cheese=bad, req.query would be {arg:"true"}

	Router path: /users/:userId/books/:bookId
	Request URL: http://localhost:3000/users/34/books/8989
	req.params: { "userId": "34", "bookId": "8989" }

	The name of route parameters must be made up of “word characters” ([A-Za-z0-9_])

	Route path: /flights/:from-:to
	Request URL: http://localhost:3000/flights/LAX-SFO
	req.params: { "from": "LAX", "to": "SFO" }

	Route path: /plantae/:genus.:species
	Request URL: http://localhost:3000/plantae/Prunus.persica
	req.params: { "genus": "Prunus", "species": "persica" }

	// req.body 

	Contains anything in the request body. Typically this is used on PUT and POST requests.


	req.body contains anything in the request body. Typically this is used on PUT and POST requests.

	For example a POST to sample.com with the body of {"foo":"bar"} and a header of type application/json, req.body would contain {foo: "bar"}

	// POST user[name]=tobi&user[email]=tobi@learnboost.com
	req.body.user.name
	// => "tobi"

	req.body.user.email
	// => "tobi@learnboost.com"

	// POST { "name": "tobi" }
	req.body.name
	// => "tobi"

	if you were to use req.body instead of req.query, it would most likely not find anything in the body, and therefore not be able to validate the jwt.

	CRUD
	POST: create
	GET: read/retrieve
	PUT: insert
	PATCH: update
	DELETE: delete


	Let's look at one of your examples.

	{ "username": "skwee357", "email": "skwee357@domain.com" }
	If you POST this document to /users, as you suggest, then you might get back an entity such as

	## /users/1

	{
	    "username": "skwee357",
	    "email": "skwee357@domain.com"
	}
	If you want to modify this entity later, you choose between PUT and PATCH. A PUT might look like this:

	PUT /users/1
	{
	    "username": "skwee357",
	    "email": "skwee357@gmail.com"       // new email address
	}
	You can accomplish the same using PATCH. That might look like this:

	PATCH /users/1
	{
	    "email": "skwee357@gmail.com"       // new email address
	}
*/

// MongoDB / Mongoose
// Mongoose.model() params: Mongoose#model(type, [schema], [collection name], [skipInit])
// Ex: model("User") === User is true

// Static methods: does not require instantiating; attributes are class-wide
animalSchema.statics.findByName = function (name, cb) {
	return this.find({ name: new RegExp(name, 'i') }, cb);
};

// Instance methods: requires instantiating; attributes are object-specific
animalSchema.methods.findSimilarTypes = function (cb) {
	return this.model('Animal').find({ type: this.type }, cb);
};

// Schema, model(Schema) method
const animalSchema = mongoose.Schema({
	name: { type: String, default: "" },
	type: { type: String, default: "" },
	sound: String
});

animalSchema.methods.speak = function () {
	console.log(this.sound);
}

// First argument of model(String, Schema): table will be created with name String
const Animal = mongoose.model('Animal', animalSchema);

// or model({schema parameters}) method
const Animal = mongoose.model("Animal", {
	name: { type: String, default: "" },
	type: { type: String, default: "" },
	sound: String
});

const cat = new Animal({
	name: 'Dawg',
	type: 'cat',
	sound: 'Meow'
});

// Option 1 to save:
cat.save(function (err, cat) {
	if (err) {
		console.log("Something wrong with MongoDB");
	} else {
		cat.speak();
	}
});
// Option 2 to save: only creates Animal document
Animal.create({});

// Searches Wifi document model (const Wifi = mongoose.model('Wifi, wifiSchema);)
// These do not work:
// const Wifis = mongoose.model('Wifi', wifiSchema);
// const Wifi = mongoose.model('Wifis', wifiSchema);
Wifi.find({ name: "Eduroam" }, (err, wifiNetwork) => {
	console.log(wifiNetwork);
});

// Schema subschema type: https://stackoverflow.com/questions/42019679/object-type-in-mongoose

//	let wifiSchema = mongoose.Schema({
// 	availability: {type: Boolean, default: false},
// 	name: {type: String, default: ""},
// 	// TODO: encrypt password
// 	password: {type: String, default: ""},
// 	speed: {type: String, default: ""}
// });

// let bathroomSchema = mongoose.Schema({
// 	availability: {type: Boolean, default: false}

// }):

// // Describing schema (class attributes) cafeSchema for Cafe class
// let cafeSchema = mongoose.Schema({
// 	name: {type: String, default: ""},
// 	type: {type: String, default: "cafe"},
// 	wifi: {type: wifiSchema, default: () => ({
// 		availability: false, 
// 		name: "", 
// 		speed: ""})
// 	},
// 	bathroom: {type: bathroomSchema, default: false},
// 	outlet: {type: Boolean, default: false}
// });

// let Cafe = mongoose.model('Cafe', cafeSchema);
// let Wifi = mongoose.model('Wifi', wifiSchema);

// let addWifi = function(availability, name, password, speed) {
// 	let wifi = new Wifi({
// 		availability: availability,
// 		name: name, //req.params.name,
// 		password: password,
// 		speed: speed
// 	});

// 	return wifi;
// };

// JSON
// Attribute types:
String: "t"
Number: 1, 0.3, 1.10
Object
Array: []
Boolean: true, false
Value
null

let products = req.body['products'];
let products = file.products;

let inventory_count = parseInt(product.inventory_count);
// Access using: products[req.params.product];

{
	"products": {
		"cheese":
		{
			"title": "cheese",
				"price": "3.00",
					"inventory_count": "27"
		},
		"banana":
		{
			"title": "banana",
				"price": "0.56",
					"inventory_count": "34"
		},
		"car":
		{
			"title": "car",
				"price": "32500",
					"inventory_count": "12"
		},
		"potato":
		{
			"title": "potato",
				"price": "123",
					"inventory_count": "0"
		}
	}
}


let inventory_count = parseInt(product[0].inventory_count);
// or products.filter(item => item.title === req.params.product);

{
	"products": [
		{
			"title": "cheese",
			"price": "3.00",
			"inventory_count": "27"
		},
		{
			"title": "banana",
			"price": "0.56",
			"inventory_count": "34"
		},
		{
			"title": "car",
			"price": "32500",
			"inventory_count": "12"
		},
		{
			"title": "potato",
			"price": "123",
			"inventory_count": "0"
		}
	]
}

// Dealing with Callback Hell using Promises

// "use strict";

// let express = require("express");
// let canadaPostService = require("../services/canadaPostService");
// let router = express.Router();

// // TODO: change to POST
// router.get('/', async function (req, res, next) {
// 	let postalCode = req.body.postalCode;
// 	let canadaPostRate, boxKnightRate;
// 	let rateObject = await canadaPostService.getBestShippingRate(postalCode);
// 	res.send(rateObject);
// });

// module.exports = router;

// // console.log(canadaPostService("h9b3k8"));

// "use strict";

// let request = require("request");

// /* Gets postalCode
//  * Returns array of shipping rate objects
//  * Shipping rate object example: {
//  * 	"id": "id",
//  * 	"description": "Canada Post Standard Delivery",
//  * 	"price": price
//  * 	"estimate_days": 14
//  * }
//  */
// let getBestShippingRate = ((postalCode) => {
// 	let rateObject = new Promise((resolve, reject) => {
// 		request("https://7ywg61mqp6.execute-api.us-east-1.amazonaws.com/prod/rates/" + postalCode, (error, response, body) => {
// 			resolve(body);
// 			reject(error);
// 		});
// 	});
// 	return rateObject;
// });

// module.exports = {
// 	getBestShippingRate
// };