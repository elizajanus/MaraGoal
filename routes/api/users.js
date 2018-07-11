// Requiring our models and passport as we've configured it
const passport = require('../../config/passport');
const router = require("express").Router();
const usersController = require('../../controllers/usersController');

router.post('/signup', usersController.signUp);
router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('in login action');
    res.json({ redirect: '/dashboard' });
});


module.exports = router;