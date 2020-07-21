"use strict";

let express = require('express');
let router = express.Router();

let mailService = require("../services/mailServices");


router.get('/', async (req, res, next) => {
	res.render('mailTest');

});

module.exports = router;