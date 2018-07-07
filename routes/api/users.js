// Requiring our models and passport as we've configured it
const router = require("express").Router();
const usersController = require('../../controllers/usersController');

router.post('/signup', usersController.signUp);


module.exports = router;