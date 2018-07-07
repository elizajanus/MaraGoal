// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var Schema = mongoose.Schema;
// Creating our User model
// module.exports = {
var UserSchema = new Schema({
  // The email cannot be null, and must be a proper email before creation
  username: {
    type: String,
    required: true,
    unique: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (val) => (/[^@]+@[^@]+.{2,}/).test(val),
    //   message: '{VALUE} is not a valid email address',
    // }
  },
  // The password cannot be null
  password: {
    type: String,
    required: true
  },

  selectedDay: {
    type: String
  }
});

// UserSchema.methods.validPassword = function(password) {
//   console.log('UserSchema.methods.validPassword');
//   return bcrypt.compareSync(password, this.password);
// };

// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
// UserSchema.pre('save', function(next) {
//   console.log('UserSchema.pre save');
//   this.password = bcrypt.hashSync(UserSchema.password, bcrypt.genSaltSync(10), null);
//   // bcrypt.genSalt(10, function(err, salt) {

//     // if (err) return; //handle error

//     // bcrypt.hash(UserSchema.password, salt, function(err, hash) {

//       // if (err) return; //handle error

//       // Store hash in your password DB.

//     // });
//   // });
//   next();
// });

var User = mongoose.model("User", UserSchema);



module.exports = User;
// return User;
// };