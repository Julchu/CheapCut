"use strict";

let express = require("express");
let router = express.Router();


router.get("/", (req, res, next) => {
	res.render("testAppointment");
});

router.post("/", async (req, res, next) => {
	let startTime = req.body.startTime;
	let endTime = req.body.endTime;
    
    
	res.render("testAppointment");
});

module.exports = router;