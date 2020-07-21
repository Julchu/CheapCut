# CheapCut: a place for new barbers to exchange experience for affordable haircuts
Hosted with Heroku @ https://cheapcut.herokuapp.com/

## About 
CheapCut is a web app to find affordable local haircuts in exchange for new barbers to practice their expertise

## Features
```
- Encrypted signing in is required as a measure of verifying users and moderating appointment bookings
- Allows users to saving personal hair preferences and rate and bookmark barbers
- Uses GMaps api to find cafes
```

## Example format of objects
```
{
	cafes
	{
		name: {type: String, default: "Name"},
		type: {
			type: String,
			default: "Cafe",
			enum: ["Cafe", "Restaurant", "Other"]
		},
		wifi: {
			available: {type: Boolean, default: false},
			name: {type: String, default: ""},
			// TODO: encrypt password
			password: {type: String, default: ""},
			fast: {type: Boolean, default: false}
		},
		outlet: {type: Boolean, default: false},
		bathroom: {
			available: {type: Boolean, default: false},
			locked: {type: Boolean, default: false},
			key: {type: Boolean, default: false},
			code: {type: String, default: ""},
			clean: {type: Boolean, default: false}
		},
		clean: {type: Boolean, default: true},
		busy: {
			morning: {type: Boolean, default: false},
			afternoon: {type: Boolean, default: false},
			evening: {type: Boolean, default: false}
		},
		parking: {type: Boolean, default: false}
	}
}

```
## // TODOs: 
```

- Google Maps
-- Implement update re-search and current location circle on map move
--- https://stackoverflow.com/questions/6981308/google-map-api-v3-drag-event-on-map
--- https://stackoverflow.com/questions/28493846/search-when-i-move-the-map

- NodeJ
-- Implement update/overwrite/merge functionality
-- Implement functionality to search by filter

- User sessions with PassportJS
-- Get authentication working
-- Local
-- Google
-- Facebook

- Password encryption with BCryptJS (not BCrypt)

- Bootstrap 4
-- Login page
--- Search functionality

-- Filter Tables based on location

- jQuery, React, React Native
```

## Links
**Convert HTML/Pug**
-- https://html2jade.org/

**Nav bar tutorial**
-- https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp

**Collapsable nav bar**
-- https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_navbar_collapse

**Trello board**
-- https://trello.com/b/5Y90A6Vz/cheapcut

**Template project code**
-- https://github.com/Julchu/TeaWork
-- https://github.com/JuliusFan/CP476-Project

