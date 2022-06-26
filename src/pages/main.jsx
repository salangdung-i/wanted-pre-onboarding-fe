import React from 'react';
import GNB from '../pages/components/gnb';
import Feed from '../pages/components/feed';
import styled from 'styled-components';

const main = (props) => {
  return (
    <>
      <GNB />
      <Div>
        <Feed />
      </Div>
    </>
  );
};

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default main;
