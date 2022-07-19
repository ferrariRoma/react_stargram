import { createSlice } from "@reduxjs/toolkit";

// 유저 리듀서
const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    userName: null,
  },
  reducers: {
    createUserAction(state, action) {
      return console.log("user Create 리듀서 안 입니다.");
    },
    readUserAction(state, action) {
      return console.log("user Read 리듀서 안 입니다.");
    },
    updateUserAction(state, action) {
      return console.log("user Update 리듀서 안 입니다.");
    },
    deleteUserAction(state, action) {
      return console.log("user Delete 리듀서 안 입니다.");
    },
  },
});

export const {
  createUserAction,
  readUserAction,
  updateUserAction,
  deleteUserAction,
} = userSlice.actions;
export default userSlice.reducer;
