const router = require("express").Router();
const chatController = require("../../controllers/chatController");

// Matches with "/api/messages"
router.route("/")
  .get(chatController.findAll)
  .post(chatController.create);

// Matches with "/api/messagez/:id"
router
  .route("/:id")
 //make a findByDate get route
 // .get(articlesController.findById)
 //edit your messages


module.exports = router;
