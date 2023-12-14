import { useEffect, useState } from 'react';
import PracPostItem from './PracPostItem';
import { post } from '../types/post';

// PostList 컴포넌트 입니다.
const PracPostList = () => {
  const [posts, setPosts] = useState<post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await res.json();

      setPosts(jsonData.slice(0, 10));
    };

    setTimeout(() => {
      getPosts();
      console.log('posts', posts);
    }, 2000);
  }, []);

  return (
    <div className="PostList">
      <header>Post List</header>
      {posts.length > 0 ? (
        posts.map((post: post) => {
          return <PracPostItem key={post.id} post={post} />;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default PracPostList;
