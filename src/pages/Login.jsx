import Header from "../components/Header";
import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { StyledLoginBox } from "./Signup";

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
