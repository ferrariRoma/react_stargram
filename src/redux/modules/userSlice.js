import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../shared/firebase";
import { auth } from "../../shared/firebase";

export const FBloginAction = createAsyncThunk(
  "user/login",
  async ({ userId, pw }) => {
    console.log("로그인 파이어베이스 액션함수 시작");
    let loginReq;
    try {
      loginReq = await signInWithEmailAndPassword(auth, userId, pw);
    } catch (err) {
      return console.log("로그인 authentication 액션함수: ", err);
    }

    let user_docs;
    let getUserInfo;
    try {
      user_docs = await getDocs(
        query(
          collection(db, "userDB"),
          where("userId", "==", loginReq.user.email)
        )
      );
      user_docs.forEach((el) => (getUserInfo = { ...el.data() }));
      return getUserInfo;
    } catch (err) {
      return console.log("로그인 firestore 액션함수:", err);
    }
  }
);

// 유저정보 리듀서
const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  extraReducers: (builder) => {
    builder.addCase(FBloginAction.fulfilled, (state, action) => {
      console.log("extraReducers의 로그인 케이스 안입니다.");
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
