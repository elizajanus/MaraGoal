const router = require("express").Router();
const chatRoutes = require("./chat");
const userRoutes = require("./users");
const diaryRoutes = require("./diary");

// routes
router.use("/messages", chatRoutes);
router.use("/users", userRoutes);
router.use("/diary", diaryRoutes);

module.exports = router;
