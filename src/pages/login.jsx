import React, { useRef, useState } from 'react';
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

import {
  validationEmail,
  validationPassword,
} from '../service/validateService';

const login = ({ onLogIn }) => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  // button active
  const [active, setActive] = useState(false);

  // validate check.
  const [passPassword, setPassword] = useState(true);
  const [passName, setName] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if (passPassword === false || passName === false) return;

    const user = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
    };

    onLogIn(user);
    formRef.current.reset();
  };

  const onChange = (e) => {
    if (e.target.name === 'username') {
      setName(validationEmail(e.target.value));
    }
    if (e.target.name === 'password') {
      setPassword(validationPassword(e.target.value));
    }

    if (nameRef.current.value !== '' && passwordRef.current.value !== '') {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <Body>
      <Container>
        <Card>
          <LogoDiv>
            <img src="images/logo.png" alt="instagram logo" />
          </LogoDiv>
          <FormDiv>
            <Form ref={formRef}>
              <Cdiv>
                <InputDiv pass={!passName}>
                  <Input
                    name="username"
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    ref={nameRef}
                    onChange={onChange}
                  />
                </InputDiv>
              </Cdiv>
              <Cdiv>
                <InputDiv pass={!passPassword}>
                  <Input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    ref={passwordRef}
                    onChange={onChange}
                  />
                </InputDiv>
              </Cdiv>
              <LoginDiv isActive={active} active={active}>
                <LoginButton onClick={onSubmit}>로그인</LoginButton>
              </LoginDiv>
            </Form>
          </FormDiv>
        </Card>
      </Container>
    </Body>
  );
};
export default login;
