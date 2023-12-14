import { post } from '../types/post';

interface Props {
  key: number;
  post: post;
}

const PracPostItem = ({ key, post }: Props) => {
  // const { post } = props;

  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PracPostItem;
