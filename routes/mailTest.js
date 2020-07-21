"use strict";

let express = require('express');
let router = express.Router();
let main = require('../services/mailServices').main;

let mailService = require("../services/mailServices");


router.get('/', async (req, res, next) => {
	main();
	res.render('mailTest');

});

module.exports = router;