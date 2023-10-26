const { commentInfos } = require("../model/Comment");

// views의 index를 렌더하는 main이라는 함수
// routes index.js의 get("/")이 사용하는 부분
exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  const commentData = commentInfos();
  // commentData = [{...},{...}]
  res.render("comments", {
    commentInfos: commentData,
  });
};
