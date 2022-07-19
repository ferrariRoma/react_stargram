import Header from "../components/Header";
import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <Header></Header>
      <StyledLoginBox>
        <h1>로그인</h1>
        <input placeholder="id" type="email" name="id"></input>
        <input placeholder="pw" type="password" name="pw"></input>
        <button>로그인</button>
      </StyledLoginBox>
    </>
  );
};

export default Login;

const StyledLoginBox = styled.div`
  margin: auto;
  margin-top: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  width: 30rem;
  height: 30rem;

  > * {
    margin-bottom: 2rem;
    font-family: Gaegu;
    font-size: 1.5rem;
  }
  h1 {
    margin-bottom: 3rem;
  }

  input {
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    width: 50%;
    height: 2rem;
    outline: none;
    &:focus {
      border-bottom: 2px solid rgba(27, 157, 252, 1);
    }
  }
`;
