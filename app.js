let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let passport = require('passport');
let Strategy = require('passport-local').Strategy;
let session = require('express-session');

// Project files
let User = require("./models/Users").User;
let bcryptServices = require("./services/bcryptServices");
let databaseServices = require("./services/databaseServices");

// Routers
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let loginRouter = require('./routes/login');
let registerRouter = require('./routes/register');
let customerProfileRouter = require('./routes/customerProfile');
let successPlaceholderRouter = require('./routes/successPlaceholder');
let testAppointmentRouter = require('./routes/testAppointment');
let barberProfileRouter = require('./routes/barberProfile');

let app = express();

// User authentication validation
passport.use(new Strategy(
	(username, password, done) => {
		User.findOne({ username: username }, async (err, user) => {
			if (err) { 
				return done(err);
			}

			// User does not exist
			if (!user) {
				return done(null, false, { message: "User does not exist." });
			}

			// Returns true if password matches encrypted password
			if (await bcryptServices.compare(password, user.password)) {
				return done(null, user, {message: "User credentials correct."});
			}

			// Wrong password
			return done(null, false, { message: "Incorrect password." });
		});
	}
));

// Serializing/deserializing for persistant user sessions
passport.serializeUser(function(user, cb) {
	cb(null, user.username);
});
  
passport.deserializeUser(function(username, cb) {
	User.findOne({ username: username }, function (err, user) {
		if (err) { return cb(err); }
		cb(null, user);
	});
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passport sessions
app.use(session({ secret: 'CheapCut', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);

// /login and /logout request paths exist within router rather than in app.js, to keep login and logout together
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/customerprofile', customerProfileRouter);
app.use('/testAppointment', testAppointmentRouter);

// Temporary successful login placeholder
app.use('/successPlaceholder', successPlaceholderRouter);
app.use('/barberProfile', barberProfileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
