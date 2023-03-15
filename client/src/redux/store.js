import { configureStore } from "@reduxjs/toolkit";
import { crudApi } from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    [crudApi.reducerPath]: crudApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crudApi.middleware),
});
