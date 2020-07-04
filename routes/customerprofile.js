"use strict";

let customers = require('../models/Users').User;
let express = require('express');
const { User } = require('../models/Users');
let router = express.Router();

router.get('/', function(req, res, next) {
	res.render('customerprofile', { customername: customerInfo('sara'), phonenumber: '6' });
});

// trying to get customers info from database ; does not work yet
let customerInfo = async (customer2) => {
    let customer = await customers.findOne({username: customer2});
        if (customer != "") {
            console.log(customer)
            
        }
    return customer
}

module.exports = router;