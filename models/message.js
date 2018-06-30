const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  username: { type: String, default: 'MaraGoal user'},
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  fromMe: { type: Boolean, default: false}
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;