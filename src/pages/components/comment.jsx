import React from 'react';
import {
  CommentDiv,
  Comment,
  SpanName,
  SpanComment,
  AddComment,
  IconNoMargin,
  Textarea,
  Button,
} from '../../styles/commentStyled';
import { BsEmojiSmile } from 'react-icons/bs';

const comment = (props) => {
  return (
    <>
      <CommentDiv>{/* {commentList } */}</CommentDiv>
      <AddComment>
        <IconNoMargin>
          <BsEmojiSmile />
        </IconNoMargin>
        <Textarea cols="50" placeholder="댓글 달기..." />
        <Button>게시</Button>
      </AddComment>
    </>
  );
};

export default comment;
