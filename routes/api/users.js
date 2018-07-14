// Requiring our models and passport as we've configured it
const passport = require('../../config/passport');
const router = require("express").Router();
const usersController = require('../../controllers/usersController');
router.post('/login', 
// console.log(router.trace);
    passport.authenticate('local'), (req, res) => {
    console.log('in login action');
    console.log(req.user);
    res.json(req.user)
});
router.post('/signup', usersController.signUp);

module.exports = router;