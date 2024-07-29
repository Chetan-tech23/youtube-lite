import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    searchCache: searchSlice,
    chat: chatSlice,
  },
});

export default store;
