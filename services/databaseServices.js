"use strict";

let mongoose = require('mongoose');

let uri = "";
if (typeof process.env.MONGODB_URI == 'undefined') {
	uri = "mongodb://heroku_w2q13l05:vv8vjro1vft19oc8npfqnitke9@ds235411.mlab.com:35411/heroku_w2q13l05";
} else {
	uri = process.env.MONGODB_URI;
}

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});