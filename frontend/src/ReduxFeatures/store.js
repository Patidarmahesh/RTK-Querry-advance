import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "./api/api";
import stateSlice from "./Features/stageManageMantSlice";
import { productApi } from "./api/paginationApi";

const store = configureStore({
  reducer: {
    userPosts: stateSlice,
    [postApi.reducerPath]: postApi.reducer,
    [productApi.reducerPath]:productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postApi.middleware,productApi.middleware]),
});

setupListeners(store.dispatch);

export default store;
