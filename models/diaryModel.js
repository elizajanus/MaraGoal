const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//connect with user either one or multiple diarySchemas associated with array or just one...connect with Karen about users (.populate associated diaries)

const diarySchema = new Schema({
  username: { type: String, required: true },
  dateOfRun: { type: Date, default: Date.now, required: true },
  runningTime: { type: String, required: true },
  runningDistance: { type: String, required: true },
  runningSurface: { type: String, required: true },
  runningInjury: { type: String, required: true },
  weatherOnRun: { type: String, required: true },
  soloOrGroup: { type: String, required: true },
  speedHillsOrNormal: { type: String, required: true,}

});

const Diary = mongoose.model("Diary", diarySchema);

module.exports = Diary;