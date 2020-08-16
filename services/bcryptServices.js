"use strict";

let bcrypt = require('bcrypt');

let encrypt = async (password) => {
	return await bcrypt.hash(password, 10);
}

let compare = async (password, passwordHash) => {
	return await bcrypt.compare(password, passwordHash);
}

module.exports = {encrypt, compare};