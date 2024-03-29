import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  getDocs,
  query,
  collection,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../shared/firebase";
import { auth } from "../../shared/firebase";

export const FBloginAction = createAsyncThunk(
  "user/login",
  async ({ userId, pw }) => {
    console.log("로그인 파이어베이스 액션함수 시작");
    try {
      await signInWithEmailAndPassword(auth, userId, pw);
      return auth.currentUser;
    } catch (err) {
      return console.log("로그인 authentication 액션함수: ", err);
    }
  }
);

export const FBuploadContent = createAsyncThunk(
  "user/upload",
  async (getId) => {
    let getUserInfo;
    const user_docs = await getDocs(
      query(
        collection(db, "userDB"),
        where("userId", "==", auth.currentUser.email)
      )
    );
    user_docs.forEach((el) => (getUserInfo = { ...el.data(), dbId: el.id }));
    getUserInfo.contentId.push(getId);

    const searchFB = doc(db, "userDB", getUserInfo.dbId);
    await updateDoc(searchFB, getUserInfo);
    return getUserInfo;
  }
);

export const FBloadedAction = createAsyncThunk("user/load", async (param) => {
  const loginReq = { ...param };
  let user_docs;
  let getUserInfo;
  user_docs = await getDocs(
    query(collection(db, "userDB"), where("userId", "==", loginReq.email))
  );
  user_docs.forEach((el) => (getUserInfo = { ...el.data(), userId: el.id }));
  return getUserInfo;
  // try {
  // } catch (err) {
  //   return console.log(err);
  // }
});

// 유저정보 리듀서
const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  extraReducers: (builder) => {
    builder.addCase(FBloginAction.fulfilled, (state, action) => {
      const getInfo = { ...action.payload };
      return getInfo;
    });
    builder.addCase(FBloadedAction.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(FBuploadContent.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
