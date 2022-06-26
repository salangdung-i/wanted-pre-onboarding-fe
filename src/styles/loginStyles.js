import styled, { css } from 'styled-components';

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding-bottom: 32px;
  margin-top: 32px;
`;

const Card = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 396px;
  padding: 10px 0;
  margin-bottom: 10px;
  border: 1px solid #dbdbdb;
`;

const LogoDiv = styled.div`
  background-color: inherit;
  /* background-color: ; */
  padding-bottom: 12px;
  margin-top: 36px;
`;

const FormDiv = styled.div`
  margin-top: 24px;
  display: flex;
  flex-basis: 20%;
  justify-content: center;
  align-items: center;
  width: 348px;
  height: 265px;
`;

const Form = styled.form``;

const Cdiv = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 6px;
  line-height: 38px;
`;

const InputDiv = styled.div`
  display: flex;
  width: 268px;
  height: 38px;
  border: 1px solid #dbdbdb;
  background: #fafafa;
  font-size: 12px;
  color: #8e8e8e;
  padding-left: 8px;
  border-radius: 3px;

  ${(props) =>
    props.pass &&
    css`
      border: 1px solid red;
    `}
`;
const Input = styled.input`
  font-size: 12px;
  width: 100%;
  height: 100%;
  background-color: inherit;
`;

const LoginDiv = styled.div`
  width: 268px;
  height: 30px;
  background-color: rgba(0, 149, 246, 0.3);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 40px;

  ${(props) =>
    props.isActive &&
    css`
      color: #fff;
    `}
  ${(props) =>
    props.active &&
    css`
      background-color: #0095f6;
      color: #fff;
      cursor: pointer;
    `}
`;

const LoginButton = styled.button`
  font-size: 14px;
  width: 100%;
  border: 0;
  outline: 0;
  color: #fff;
  background-color: transparent;
`;

export {
  Body,
  Container,
  Card,
  LogoDiv,
  FormDiv,
  Form,
  Cdiv,
  InputDiv,
  Input,
  LoginDiv,
  LoginButton,
};
