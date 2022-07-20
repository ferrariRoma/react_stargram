import Header from "../components/Header";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StyledLoginBox } from "./Signup";
import { FBloadedAction, FBloginAction } from "../redux/modules/userSlice";

const Login = () => {
  const refId = useRef(null);
  const refPw = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickChecked = async () => {
    if (!(refId.current.value !== "" && refPw.current.value !== "")) {
      return alert("빈 칸을 채워주세요!");
    } else {
      const userObj = {
        userId: refId.current.value,
        pw: refPw.current.value,
      };
      let getEmail = await dispatch(FBloginAction(userObj));
      // 로그인한 유저의 auth.currentUser가 getEmail변수의 payload 안에 담김.
      dispatch(FBloadedAction(getEmail.payload));
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
