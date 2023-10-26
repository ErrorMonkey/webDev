exports.commentInfos = () => {
  // mysql 연결 select * from comment;
  return [
    {
      id: 1,
      userId: "leecoder",
      date: "2023-10-26",
      comment: "hello",
    },
    {
      id: 2,
      userId: "kimketer",
      date: "2023-10-27",
      comment: "world",
    },
  ];
};
