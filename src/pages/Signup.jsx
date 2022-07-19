import Header from "../components/Header";
import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const refId = useRef(null);
  const refNickname = useRef(null);
  const refPw = useRef(null);
  const refConfirm = useRef(null);

  const navigate = useNavigate();

  const onClickChecked = () => {
    if (
      !(
        refId.current.value !== "" &&
        refNickname.current.value !== "" &&
        refPw.current.value !== "" &&
        refConfirm.current.value !== ""
      )
    ) {
      return alert("빈 칸을 채워주세요!");
    } else {
      return navigate("/login");
    }
  };
  return (
    <>
      <Header></Header>
      <StyledLoginBox>
        <h1>회원가입</h1>
        <input ref={refId} placeholder="id" type="email" name="id"></input>
        <input
          ref={refNickname}
          placeholder="nickname"
          type="text"
          name="nickname"
        ></input>
        <input ref={refPw} placeholder="pw" type="password" name="pw"></input>
        <input
          ref={refConfirm}
          placeholder="confirm"
          type="password"
          name="confirm"
        ></input>
        <button onClick={onClickChecked}>회원가입</button>
      </StyledLoginBox>
    </>
  );
};

export default Signup;

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
