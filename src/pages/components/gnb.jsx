import React from 'react';
import {
  Navbar,
  NavContainer,
  Img,
  RightNav,
  InputDiv,
  Input,
  MenuDiv,
  Icon,
} from '../../styles/gnbStyles';

import {
  MdHomeFilled,
  MdFavoriteBorder,
  MdLogout,
  MdOutlineAddBox,
} from 'react-icons/md';
import { AiOutlineCompass } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

const gnb = ({ onLogout }) => {
  return (
    <Navbar>
      <NavContainer>
        <Img logo alt="instagram-logo" src="images/logo.png" />
        <RightNav>
          <InputDiv>

            <Input type="search" placeholder="search" />
          </InputDiv>
          <MenuDiv>
            <Icon>
              <MdHomeFilled />
            </Icon>
            <Icon>
              <FiSend />
            </Icon>
            <Icon>
              <MdOutlineAddBox />
            </Icon>
            <Icon>
              <AiOutlineCompass />
            </Icon>
            <Icon>
              <MdFavoriteBorder />
            </Icon>
            <Icon onClick={onLogout}>
              <MdLogout />
            </Icon>
          </MenuDiv>
        </RightNav>
      </NavContainer>
    </Navbar>
  );
};

export default gnb;
