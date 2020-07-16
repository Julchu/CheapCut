"use strict";



let name = "Name not Found";
let bio = "Bio not Found";
let contactInfo = "Contact info not found";
let ratingNum = "Rating not found";

let barber = await profileServices.getUserInfo(barberId);

if (barber) {
	name = barber.username;
	bio = barber.bio;
	contactInfo = barber.contactInfo;
	ratingNum = barber.rating;
}