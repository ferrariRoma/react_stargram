import Header from "../components/Header";
import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const refId = useRef(null);
  const refPw = useRef(null);

  const navigate = useNavigate();

  const onClickChecked = () => {
    if (!(refId.current.value !== "" && refPw.current.value !== "")) {
      return alert("빈 칸을 채워주세요!");
    } else {
      return navigate("/");
    }
  };
  return (
    <>
      <Header></Header>
      <StyledLoginBox>
        <h1>로그인</h1>
        <input ref={refId} placeholder="id" type="email" name="id"></input>
        <input ref={refPw} placeholder="pw" type="password" name="pw"></input>
        <button onClick={onClickChecked}>로그인</button>
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
