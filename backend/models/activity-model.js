const mongoose = require("mongoose");

const { Schema } = mongoose;

const ActivitySchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  duration: { type: Number, required: true },
  description: { type: String },
  creator: [{ type: mongoose.Types.ObjectId, required: true, ref: "User" }],
});

module.exports = mongoose.model("Activity", ActivitySchema);
