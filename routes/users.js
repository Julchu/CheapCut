let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.query.type);
	console.log(req.query.username);
	res.send('respond with a resource');
});

// /users?type=barber&username=123
// req.query.type
// req.query.username

router.get('/:type/:username', function(req, res, next) {
	console.log(req.params.type);
	console.log(req.params.username);
	res.send('respond with a resource');
});

// /users/barber/123
// req.params.type
// req.params.username

module.exports = router;
