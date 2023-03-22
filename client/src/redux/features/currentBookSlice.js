import { createSlice } from "@reduxjs/toolkit";

export const currentBookSlice = createSlice({
  name: "currentBook",
  initialState: { book: { id: null, cover: null, title: null, desc: null } },
  reducers: {
    setCurrentBook: (state, action) => {
      state.book = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentBook } = currentBookSlice.actions;

export const selectCurrentBook = (state) => state.currentBook.book;

export default currentBookSlice.reducer;
