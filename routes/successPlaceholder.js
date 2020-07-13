"use strict";

let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log(req.user.id);
		res.render("successPlaceholder", {title: "Success"});
	} else {
		res.redirect("/login");
	}
});

module.exports = router;