import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./modules/contentSlice";
import userSlice from "./modules/userSlice";

const store = configureStore({
  reducer: { content: { contentSlice }, user: { userSlice } },
});

export default store;
