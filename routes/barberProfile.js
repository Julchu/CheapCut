"Use Strict";

let loginUser = require("../services/loginServices").loginUser;
let getUserService = require("../services/getUserService");

let express = require("express");
let router = express.Router();

router.get("/", async (req, res, next) => {
    barberId = "bjackie" //Temp, for testing purposes
    let barber = await getUserService.getUser(barberId);
    
    name = barber.username
    bio = barber.bio
    contactInfo = barber.contactInfo
    ratingNum = barber.rating

    res.render("barberProfile", {title: name, about: bio, contact: contactInfo, rating: ratingNum});
});

module.exports = router;