const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// app.use(function (req, res, next) {
//   const origin = req.get('origin');
//   res.header('Access-Control-Allow-Origin', origin);
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

//   // intercept OPTIONS method
//   if (req.method === 'OPTIONS') {
//     res.sendStatus(204);
//   } else {
//     console.log(origin);
//     next();
// }
// });

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
//if (process.env.NODE_ENV === "production") {
 // app.use(express.static("client/public"));
//}
// Add routes, both API and view
app.use(routes);
// require("./client/src/utils/html-routes.js")(app);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/maragoal");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});