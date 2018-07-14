const router = require("express").Router();
const diaryController = require("../../controllers/diaryController");

// Matches with "/api/diary"
router.route("/")
  .get(diaryController.findAll)
  .post(diaryController.create);

// Matches with "/api/diary/:id"
router
  .route("/:id")
  // .get(diaryController.findById)
  .put(diaryController.update)
  .delete(diaryController.remove);

module.exports = router;

