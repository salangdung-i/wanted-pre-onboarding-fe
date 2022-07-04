import React, { useEffect, useState } from 'react';
import GNB from '../pages/components/gnb';
import Feed from '../pages/components/feed';
import styled from 'styled-components';
import service from './../service/instagramService';

const main = ({ onLogout }) => {
  
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    service.getData().then((res) => setDatas(res));
  }, []);

  return (
    <>
      <GNB onLogout={onLogout} />
      <Div>
        {datas && datas.map((data) => <Feed key={data.index} data={data} />)}
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
