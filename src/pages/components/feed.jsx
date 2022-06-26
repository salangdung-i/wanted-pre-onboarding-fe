import React from 'react';
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
import { BsThreeDots, BsBookmark } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaRegCommentDots } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';

const feed = (props) => {
  return (
    <Card>
      <CardHeader>
        <User>
          <Img />
          <Name></Name>
        </User>
        <Detail>
          <BsThreeDots />
        </Detail>
      </CardHeader>
      <Div>
        <ContentImg />
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
          <Like>좋아요 1100개</Like>
          {/* comment */}
        </Board>
      </Div>
    </Card>
  );
};

export default feed;
