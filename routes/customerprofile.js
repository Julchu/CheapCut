"use strict";

let express = require('express');
let router = express.Router();
let getCustomerInfo = require('../services/profileServices').getCustomerInfo;

router.get('/', async (req, res, next) => {
	let customerInfo = await getCustomerInfo('sara')
	res.render('customerProfile', { customerName: customerInfo.username, userType: customerInfo.userType});
});

module.exports = router;