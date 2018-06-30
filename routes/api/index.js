const router = require("express").Router();
const chatRoutes = require("./chat");

// routes
router.use("/chat", chatRoutes);

module.exports = router;
