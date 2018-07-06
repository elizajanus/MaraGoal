const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diarySchema = new Schema({
  username: { type: String, default: 'MaraGoal user'},
  date: { type: Date, default: Date.now, required: true, },
  pace: { type: String, default: false, required: true,},
  distance: { type: String, default: false, required: true,},
  surface: { type: String, default: false, required: true,},
  injuries: { type: String, default: false, required: true,},
  weather: { type: String, default: false, required: true,},
  soloOrGroup: { type: String, default: false, required: true,},
  speedHillorEasy: { type: String, default: false, required: true,}

});

const Diary = mongoose.model("Diary", diarySchema);

module.exports = Diary;