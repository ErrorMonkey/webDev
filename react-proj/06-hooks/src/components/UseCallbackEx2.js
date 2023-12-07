import React, { useCallback, useState, useEffect } from "react";

function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState("");
  const [text, setText] = useState("");
  // https://jsonplaceholder.typicode.com/posts/
  const fetchData = useCallback(async () => {
    console.log("useCallback!");
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await res.json();
    setPost(post);
  }, [postId]);
  // useCallback의 의존성 배열은 비우고 useEffect의 의존성 배열에 postId를 사용하면,
  // text 같은 다른 state에 변경 사항이 생기면 useCallback 선언을 해도
  // 다시 함수를 선언하게 된다

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h3>UseCallbackEx2</h3>
      <div>조회한 Post id: {postId}</div>
      {post && (
        <div>
          <div>{post.id}</div>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
      )}
      <input onChange={(e) => setText(e.target.value)} />
      <div>{text}</div>
    </>
  );
}

// useMemo vs useCallback
// useMemo: 특정 값을 기억하여, 불필요한 연산 방지
// useCallback: 특정 함수를 기억하여, 불필요한 재선언 방지

export default UseCallbackEx2;
