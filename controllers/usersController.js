var passport = require("../config/passport");
var db = require("../models");
module.exports = {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    signin: function(req, res) {
      // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
      // So we're sending the user back the route to the members page because the redirect will happen on the front end
      // They won't get this or even be able to access this page if they aren't authed
      res.json("/members");
    },
  
    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    signUp: function(req, res) {
      console.log("signuppppppp!!!");
      console.log(req.body.email);

      db.User.create(req.body)
      .then(newUser => {
        console.log("newUser: " + newUser);
        res.json(newUser);
      }).catch(err => {
        console.log("err: " + err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
      console.log("hmmm");
    },
  
    // Route for logging user out
    logout: function(req, res) {
      req.logout();
      res.redirect("/");
    },
  
    // Route for getting some data about our user to be used client side
    getUser: function(req, res) {
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      }
      else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          username: req.user.username,
          email: req.user.email,
          id: req.user.id,
          selectedDay: req.user.selectedDay
        });
      }
    },
  
  };