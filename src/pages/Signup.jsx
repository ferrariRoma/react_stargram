import Header from "../components/Header";
import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../shared/firebase";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../shared/firebase";

const Signup = () => {
  // input ref
  const refId = useRef(null);
  const refNickname = useRef(null);
  const refPw = useRef(null);
  const refConfirm = useRef(null);

  const navigate = useNavigate();

  // validation
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const onClickChecked = async () => {
    if (
      !(
        refId.current.value !== "" &&
        refNickname.current.value !== "" &&
        refPw.current.value !== "" &&
        refConfirm.current.value !== ""
      )
    ) {
      return alert("빈 칸을 채워주세요!");
    } else if (!isValidEmail(refId.current.value)) {
      return alert("ID가 이메일 형식이 아닙니다.");
    } else if (refPw.current.value !== refConfirm.current.value) {
      return alert("비밀번호가 다릅니다.");
    } else {
      try {
        const new_user = await createUserWithEmailAndPassword(
          getAuth(app),
          refId.current.value,
          refPw.current.value
        );

        const {
          user: {
            metadata: { createdAt },
          },
        } = new_user;
        const userId = new_user.user.email;
        const nickname = refNickname.current.value;
        const contents = [];

        const userinfo = { userId, nickname, createdAt, contents };
        await addDoc(collection(db, "userDB"), userinfo);
      } catch (err) {
        alert(err.name);
      }
      return navigate("/login");
    }
  };
  return (
    <>
      <Header></Header>
      <StyledLoginBox>
        <h1>회원가입</h1>
        <input ref={refId} placeholder="id" name="id"></input>
        <input ref={refNickname} placeholder="nickname" name="nickname"></input>
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

export const StyledLoginBox = styled.div`
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
