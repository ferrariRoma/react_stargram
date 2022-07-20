import Header from "../components/Header";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StyledLoginBox } from "./Signup";
import { FBloginAction } from "../redux/modules/userSlice";
import { auth } from "../shared/firebase";

const Login = () => {
  const [loadState, setLoadState] = useState(false);
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
      dispatch(FBloginAction(userObj));
      // console.log(auth.currentUser);
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
