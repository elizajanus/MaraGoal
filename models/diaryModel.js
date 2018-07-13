const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//connect with user either one or multiple diarySchemas associated with array or just one...connect with Karen about users (.populate associated diaries)

const diarySchema = new Schema({
  dateOfRun: { type: Date, default: Date.now, required: true, },
  runningTime: { type: String, default: false, required: true,},
  runningDistance: { type: String, default: false, required: true,},
  runningSurface: { type: String, default: false, required: true,},
  runningInjury: { type: String, default: false, required: true,},
  weatherOnRun: { type: String, default: false, required: true,},
  soloOrGroup: { type: String, default: false, required: true,},
  speedHillsOrNormal: { type: String, default: false, required: true,}

});

const Diary = mongoose.model("Diary", diarySchema);

module.exports = Diary;