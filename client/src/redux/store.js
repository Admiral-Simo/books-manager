import { configureStore } from "@reduxjs/toolkit";
import { crudApi } from "./features/apiSlice";
import currentBookReducer from './features/currentBookSlice'

export const store = configureStore({
  reducer: {
    currentBook: currentBookReducer,
    [crudApi.reducerPath]: crudApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crudApi.middleware),
});
