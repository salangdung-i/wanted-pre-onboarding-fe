import styled from 'styled-components';

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;

const Img = styled.img`
  margin-top: 7px;
  width: 103px;
  height: 29px;
  margin-right: 20px;
`;

const RightNav = styled.div`
  display: flex;
`;

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
`;

const Input = styled.div`
  width: 268px;
  height: 36px;
  border-radius: 8px;
  background: rgb(239, 239, 239);
  display: flex;
  padding: 0 16px;

  // search icon
  input::-webkit-input-placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-repeat: no-repeat;
    text-align: center;
    text-indent: 0;
    font-size: 16px;
    width: 100%;
  }

  // x button clear
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const Icon = styled.div`
  height: 100%
  cursor: pointer;
  margin: 0 10px;
  font-size: 28px;
`;

export { Navbar, NavContainer, Img, RightNav, Input, MenuDiv, Icon };
