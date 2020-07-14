"use strict";

let getUserInfo = require("../services/profileServices").getUserInfo;

let express = require("express");
let router = express.Router();

router.get("/:profileId", async (req, res, next) => {
    let barberId = req.params.profileId;

    let url = req.originalUrl;
    console.log(req.params.profileId);
    console.log(barberId);

    let name = "Name not Found";
    let bio = "Bio not Found";
    let contactInfo = "Contact info not found";
    let ratingNum = "Rating not found";
    
    let barber = await getUserInfo(barberId);
    
    if (barber) {
        name = barber.username;
        bio = barber.bio;
        contactInfo = barber.contactInfo;
        ratingNum = barber.rating;
        
    }
    res.render("barberProfile", {title: name, about: bio, contact: contactInfo, rating: ratingNum});
});


module.exports = router;