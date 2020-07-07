"Use Strict";

let loginUser = require("../services/loginServices").loginUser;

let express = require("express");
const { User } = require("../models/Users");
let router = express.Router();





let getUser = async (id) => {
    user = await User.findOne({username: barberId});
    return user
}



 router.get("/", async (req, res, next) => {
    barberId = "bjackie" //Temp, for testing purposes
    let barber = await getUser(barberId);
    
    name = barber.username
    bio = barber.bio
    contactInfo = barber.contactInfo
    ratingNum = barber.rating

    res.render("barberProfile", {title: name, about: bio, contact: contactInfo, rating: ratingNum});
});

module.exports = router;