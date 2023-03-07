const mongoose = require("mongoose");
const DiarySchema = new mongoose.Schema(
  {
    diaryDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      default: "null",
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "diary",
  },
  {
    timestamps: true,
  }
);

const Diary = mongoose.model("Diary", DiarySchema);
module.exports = Diary;
