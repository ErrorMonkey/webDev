import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../App.scss";

function PostList() {
  const [posts, setPosts] = useState([]);

  // fetch 사용 예시
  // useEffect(() => {
  //   fetch("/url")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setTimeout(() => {
  //         setPosts(res);
  //       }, 2000);
  //     });
  // }, []);

  // useEffect의 콜백함수에 async를 걸어도 제대로 작동하지 않는다
  useEffect(() => {
    setTimeout(() => {
      getPosts();
      console.log("func component: 🧐 posts update");
    }, 2000);
  }, []);

  const getPosts = async () => {
    try {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setPosts(res.data);
        });
    } catch {}
  };
  // 비동기 함수라 posts의 변경은 useEffect로 확인
  // useEffect(() => {
  //   console.log("posts", posts);
  // }, [posts]);

  let mountedPosts;
  if (posts.length === 0) {
    mountedPosts = <div className="title">"loading"</div>;
  } else {
    mountedPosts = posts.map((el) => {
      return (
        <div key={el.id} className="post-box">
          <div className="title">
            <div>"No.{el.id}"</div>
            <p>{el.title}</p>
          </div>
          <p className="body">{el.body}</p>
        </div>
      );
    });
  }

  return (
    <>
      {/* 마운트 되고 2초 뒤에 post의 값을 fakePosts 값으로 변경 */}
      <div className="post-wrapper">{mountedPosts}</div>
    </>
  );
}

export default PostList;
