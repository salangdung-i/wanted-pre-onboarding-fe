import React, { useRef, useState } from 'react';
import {
  CommentDiv,
  Comment,
  SpanName,
  SpanComment,
  AddComment,
  IconNoMargin,
  Textarea,
  Button,
} from '../../styles/commentStyles';
import { BsEmojiSmile } from 'react-icons/bs';

const comment = ({ onAddComment, commentList }) => {
  const textareaRef = useRef();
  const [active, setActive] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const comment = textareaRef.current.value;
    if (comment === '') return;
    onAddComment(comment);
    textareaRef.current.value = '';
  };

  const onKeyPress = (e) => {
    setActive(true);
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  return (
    <>
      <CommentDiv>
        {commentList &&
          commentList.map((comment, i) => (
            <Comment key={i}>
              <SpanName>{comment.username} </SpanName>
              <SpanComment>{comment.comment}</SpanComment>
            </Comment>
          ))}
      </CommentDiv>
      <AddComment onSubmit={onSubmit}>
        <IconNoMargin>
          <BsEmojiSmile />
        </IconNoMargin>
        <Textarea
          cols="50"
          placeholder="댓글 달기..."
          ref={textareaRef}
          onKeyPress={onKeyPress}
        />
        <Button active={active}>게시</Button>
      </AddComment>
    </>
  );
};

export default comment;
