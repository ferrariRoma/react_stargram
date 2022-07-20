import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const FBuserCreate = createAsyncThunk(
  "user/signup",
  async (userinfo) => {
    const get_userinfo = { ...userinfo };

    return get_userinfo;
  }
);

// 유저정보 리듀서
const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    userName: null,
    contentId: [],
  },
});

export default userSlice.reducer;
