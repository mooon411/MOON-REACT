const express = require("express");
const router = express.Router();

// 스키마
const { Comment } = require("../Model/Comment.js");
const { Counter } = require("../Model/Counter.js");

const setUpload = require("../util/upload.js");

// 댓글 쓰기
router.post("/comment", (req, res) => {
  let temp = req.body;
  // 넘버 추가 작업
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.commentNum = counter.commentNum;

      const pfCommnet = new Post(temp);
      pfCommnet.save().then(() => {
        Counter.updateOne(
          { name: "counter" },
          { $inc: { commentNum: 1 } }
        ).then(() => {
          res.status(200).json({ success: true });
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

// 글목록
router.post("/list", (req, res) => {
  Post.find()
    .exec()
    .then((result) => {
      res.status(200).json({ success: true, postList: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ success: false });
    });
});

module.exports = router;
