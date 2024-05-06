const mongoose = require("mongoose");

const chatGuideSchema = new mongoose.Schema({
  email: {
    type: String,
    ref: "User",
    required: true,
  },
  message: [
    {
      type: String,
      required: true,
    },
  ],
  response: [
    {
      type: String,
      required: true,
    },
  ],
  disable: { type: Boolean, default: false },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const ChatGuide = mongoose.model("ChatGuide", chatGuideSchema);

module.exports = ChatGuide;
