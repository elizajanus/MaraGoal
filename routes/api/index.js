const router = require("express").Router();
const chatRoutes = require("./chat");

// routes
router.use("/messages", chatRoutes);

module.exports = router;
