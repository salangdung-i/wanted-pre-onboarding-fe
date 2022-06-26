import styled, { css } from 'styled-components';

const CommentDiv = styled.div`
  margin-bottom: 10px;
`;

const Comment = styled.div`
  margin-bottom: 4px;
`;
const SpanName = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
const SpanComment = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
const AddComment = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0px;
  border-top: 1px solid #efefef;
  min-height: 48px;
`;

const IconNoMargin = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 20px;
  padding: 8px 10px 8px 0;
`;

const Textarea = styled.textarea`
  background: none;
  border: none;
  color: #262626;
  resize: none;
  display: flex;
  height: 16px;
  width: 100%;
  align-items: center;
`;

const Button = styled.button`
  width: 60px;
  color: #bfdffd;
  cursor: 'auto';
  background-color: transparent;
  font-size: 15px;
  ${(props) =>
    props.active &&
    css`
      color: #0095f6;
      cursor: pointer;
    `}
`;

export {
  CommentDiv,
  Comment,
  SpanName,
  SpanComment,
  AddComment,
  IconNoMargin,
  Textarea,
  Button,
};
