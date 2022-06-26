import styled from 'styled-components';

const Card = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  background-color: #ffffff;
  margin-top: 16px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 4px 8px 12px;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const Name = styled.div`
  display: flex;
  margin-left: 8px;
  font-size: 14px;
  font-weight: 700;
`;

const Detail = styled.div`
  width: 40px;
  font-size: 18px;
  padding: 8px;
`;

const ContentImg = styled.img`
  width: 100%;
`;

const Div = styled.div``;

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
`;

const IconsDiv = styled.div`
  display: flex;
`;
const Icon = styled.div`
  height: 24px;
  cursor: pointer;
  margin: 0 10px;
  font-size: 24px;
`;
const IconSmall = styled.div`
  height: 100%;
  cursor: pointer;
  margin: 0 10px;
  font-size: 18px;
`;

const Board = styled.div`
  padding: 5px 12px;
`;

const Like = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 10px 0;
`;

export {
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
};
