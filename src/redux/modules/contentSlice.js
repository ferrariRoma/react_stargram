import { createSlice } from "@reduxjs/toolkit";

// 게시글 리듀서
const contentSlice = createSlice({
  name: "content",
  initialState: {
    like: 0,
    imgUrl: null,
    text: null,
  },
  reducers: {
    createContentAction(state, action) {
      return console.log("content Create리듀서 입니다.");
    },
    readContentAction(state, action) {
      return console.log("content Read리듀서 입니다.");
    },
    updateContentAction(state, action) {
      return console.log("content Update리듀서 입니다.");
    },
    deleteContentAction(state, action) {
      return console.log("content Delete리듀서 입니다.");
    },
  },
});

export const {
  createContentAction,
  readContentAction,
  updateContentAction,
  deleteContentAction,
} = contentSlice.actions;
export default contentSlice.reducer;
