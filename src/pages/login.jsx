import React from 'react';
import {
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
} from '../styles/loginStyles';

const login = () => {
  return (
    <Body>
      <Container>
        <Card>
          <LogoDiv>
            <img src="images/logo.png" alt="instagram logo" />
          </LogoDiv>
          <FormDiv>
            <Form>
              <Cdiv>
                <InputDiv>
                  <Input
                    name="username"
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                  />
                </InputDiv>
              </Cdiv>
              <Cdiv>
                <InputDiv>
                  <Input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                  />
                </InputDiv>
              </Cdiv>
              <LoginDiv>
                <LoginButton>로그인</LoginButton>
              </LoginDiv>
            </Form>
          </FormDiv>
        </Card>
      </Container>
    </Body>
  );
};
export default login;
