"Use Strict";

let loginUser = require("../services/loginServices").loginUser;

let express = require("express");
const { User } = require("../models/Users");
let router = express.Router();



barberId = "njackie" //Temp, for testing purposes

let testDB = async (id) => {
    user = await User.findOne({username: barberId});
    return user
}

barber = testDB(barberId);

router.get("/", (req, res, next) => {
    name = "placeholder name"
    bio = "placeholder bio";
    contactInfo = "xxx - xxx - xxxx";
    ratingNum = 5;
    
    res.render("barberProfile", {title: name, about: bio, contact: contactInfo, rating: ratingNum});
    //res.render("login", {headline: "Barber", about: "profile"});

});

module.exports = router;