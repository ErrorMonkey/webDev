import React from 'react';
import CommentTr from './CommentTr';
import { commentRow } from '../types/types';

interface Props {
  comments: commentRow[];
  test?: string;
}

// 타입스크립트와 함께하는 리액트에서는 props도 type 지정해줘야 한다!
export default function CommentTable({ comments }: Props) {
  return (
    <>
      <table border={1} style={{ marginTop: '30px', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((value, idx) => {
            return <CommentTr key={idx} comment={value} idx={idx} />;
          })}
        </tbody>
      </table>
    </>
  );
}
