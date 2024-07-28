import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    searchCache: searchSlice,
  },
});

export default store;
