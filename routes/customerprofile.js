"use strict";

let User = require('../models/Users').User;
let express = require('express');
let router = express.Router();

router.get('/', async (req, res, next) => {
	res.render('customerprofile', { customername: await customerInfo('sara'), phonenumber: '6' });
});

// trying to get User info from database ; does not work yet

let customerInfo = async (username) => {
    let customer = await User.findOne({username: username});
        if (customer != "") {
            console.log(customer)
        }
    return customer.username
}


module.exports = router;