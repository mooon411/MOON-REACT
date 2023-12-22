const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    feedNum: Number,
    comment: String,
    commentNum: Number,
  },
  { collection: "comment" } // 이름변경 가능
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
