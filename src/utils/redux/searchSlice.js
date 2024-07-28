import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchCache",
  initialState: {
    searchText: null,
    cacheResults: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      state.cacheResults = Object.assign(state.cacheResults, action.payload);
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    clearSearchText: (state) => {
      state.searchText = null;
    },
  },
});

export const { cacheResults, addSearchText, clearSearchText } =
  searchSlice.actions;

export default searchSlice.reducer;
