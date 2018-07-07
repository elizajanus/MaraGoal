const router = require("express").Router();
const chatRoutes = require("./chat");
const userRoutes = require("./users");

// routes
router.use("/messages", chatRoutes);
router.use("/users", userRoutes);

module.exports = router;
