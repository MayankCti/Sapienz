import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import flashCardReducer from "./reducers/flashCardReducer";

const store = configureStore({
  reducer: {
    authReducer,
    flashCardReducer
  },
});

export default store;