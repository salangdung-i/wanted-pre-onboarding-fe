import React, { useCallback, useState } from 'react';
import {
  Card,
  CardHeader,
  User,
  Img,
  Name,
  Detail,
  ContentImg,
  Div,
  MenuDiv,
  IconsDiv,
  Icon,
  IconSmall,
  Board,
  Like,
} from '../../styles/feedStyles';
import Comment from './comment';
import { BsThreeDots, BsBookmark } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaRegCommentDots } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';

const defaultImg = '../images/defaultImg.jpeg';
const feed = ({ data }) => {
  const {
    username,
    userProfilePhotoURL,
    userProfilePhotoName,
    cardPhotoName,
    cardPhotoURL,
    likeCount,
    comments,
  } = data;
  const [commentList, setCommentList] = useState(comments);
  const onAddComment = (comment) => {
    setCommentList((prev) => [
      ...prev,
      { username: localStorage.getItem('username'), comment },
    ]);
  };

  const [loaded, setLoaded] = useState(false);
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <Card>
      <CardHeader>
        <User>
          <Img
            style={{ display: loaded ? 'block' : 'none' }}
            onLoad={onLoad}
            src={userProfilePhotoURL || defaultImg}
            alt={userProfilePhotoName}
          />
          <Name>{username}</Name>
        </User>
        <Detail>
          <BsThreeDots />
        </Detail>
      </CardHeader>
      <Div>
        <ContentImg src={cardPhotoURL} alt={cardPhotoName} />
        <Div>
          <MenuDiv>
            <IconsDiv>
              <Icon>
                <MdFavoriteBorder />
              </Icon>
              <Icon>
                <FaRegCommentDots />
              </Icon>
              <Icon>
                <GrSend />
              </Icon>
            </IconsDiv>
            <IconSmall>
              <BsBookmark />
            </IconSmall>
          </MenuDiv>
        </Div>
        <Board>
          <Like>좋아요 {likeCount.toLocaleString()}개</Like>
          <Comment onAddComment={onAddComment} commentList={commentList} />
        </Board>
      </Div>
    </Card>
  );
};

export default feed;
