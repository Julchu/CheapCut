"use strict";

let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
	if (req.isAuthenticated()) {
		res.render("successPlaceholder", {title: "Success", id: req.user.id});
	} else {
		res.redirect("/login");
	}
});

module.exports = router;