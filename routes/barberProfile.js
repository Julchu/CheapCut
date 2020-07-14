"Use Strict";

let loginUser = require("../services/loginServices").loginUser;
let getUserService = require("../services/getUserService");

let express = require("express");
let router = express.Router();

router.get("/:profileId", async (req, res, next) => {
    barberId = req.params.profileId

    let url = req.originalUrl;
    console.log(req.params.profileId)
    console.log(barberId)

    name = "Name not Found"
    bio = "Bio not Found"
    contactInfo = "Contact info not found"
    ratingNum = "Rating not found"
    
    let barber = await getUserService.getUser(barberId);
    
    if (barber) {
        name = barber.username
        bio = barber.bio
        contactInfo = barber.contactInfo
        ratingNum = barber.rating
        
    }
    res.render("barberProfile", {title: name, about: bio, contact: contactInfo, rating: ratingNum});
});


module.exports = router;