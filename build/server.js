"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _models = require("./models");

var _models2 = _interopRequireDefault(_models);

var _multer = require("../config/multer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const cloudinary = require('cloudinary');
var _require = require("./util/Cloudinary"),
    cloudRoute = _require.cloudRoute;

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

var port = process.env.PORT || 8005; // set the view engine to ejs
app.set("view engine", "ejs");

// make express look in the public directory for assets (css/js/img)
app.use(_express2.default.static(__dirname + "/public"));

app.use((0, _cors2.default)());

// force: true will drop the table if it already exits
// models.sequelize.sync({ force: true }).then(() => {
_models2.default.sequelize.sync().then(function () {
  console.log("Drop and Resync with {force: true}");
});

// passport middleware
app.use(_passport2.default.initialize());
// import other routes
require("./routes/GIS.js")(app);
require("./routes/user.js")(app);
require("./routes/Director.js")(app);
// require("./routes/PostGIS.js")(app);
cloudRoute(app);

// passport config
require("./config/passport")(_passport2.default);
//create a server
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});