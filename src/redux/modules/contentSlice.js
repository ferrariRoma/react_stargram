import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../shared/firebase";

export const FBloadContent = createAsyncThunk("content/load", async () => {
  const request = await getDocs(collection(db, "contentDB"));
  const getResult = [];
  request.forEach((el) => getResult.push(el.data()));
  return getResult;
});

// 게시글 리듀서
const contentSlice = createSlice({
  name: "content",
  initialState: { content: null },
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
  extraReducers: (builder) => {
    builder.addCase(FBloadContent.fulfilled, (state, action) => {
      state.content = action.payload;
    });
  },
});

export const {
  createContentAction,
  readContentAction,
  updateContentAction,
  deleteContentAction,
} = contentSlice.actions;
export default contentSlice.reducer;
