const http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    errorhandler = require('errorhandler');

const passport = require('passport'),
    LoginController = require('./controllers/login/loginCtr'),
    UsersController = require('./controllers/users'),
    auth = require('./controllers/login/auth');
require('./controllers/login/passport');
const config = require('config');
const isProduction = process.env.NODE_ENV === 'production';

//const osdetail = require('./models/osfilesystem');
//console.log(osdetail);

const app1 = require('./models/osfilesystem');
const port = 4040;

app1.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
//const osapp = require('./models/osfilesystem');

// Create global app object
let app = express();
app.use(cors());
app.use(express.static(__dirname + '/../public/dist'));
app.use(cookieParser());
app.set('jwtTokenSecret', '123456ABCDEF');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    key: 'jwtTokenSecret',
    secret: '123456ABCDEF',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1800000
    }
}));
app.use(cors(corsOptions));
var corsOptions = {
    origin: "http://localhost:3001"
  };
console.log(`Step 1 Server.js`);
app.use('/*', (req, res, next) => {
    if (!req.session) {
        return next(new Error('oh no'))
    }
    next();
});
app.use(passport.initialize());
app.use(passport.session());


if (!isProduction) {
    app.use(errorhandler());
}

// require('./models/User');
// require('./models/Article');
// require('./models/Comment');
// require('./config/passport');

app.use(require('./routes'));

/// catch 404 and forward to error handler
//app.use((req, res, next) => {
   // var err = new Error('API Not Found for report');
   // err.status = 404;
    //next(err);
//});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
    app.use((err, req, res, next) => {
        // console.log(err.stack);
        res.status(err.status || 500);
        res.json({
            'errors': {
                message: err.message,
                error: err
            }
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        'errors': {
            message: err.message,
            error: {}
        }
    });
});
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("../server/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});


require("./routes/report.routes")(app);

// let's start our server...
const server = app.listen(process.env.PORT || config.get('static').port, () => {
    console.log(`Server running at http://localhost:${server.address().port}/`);
});
var index = require('./routes/index');
var users = require('./routes/users');
//var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
