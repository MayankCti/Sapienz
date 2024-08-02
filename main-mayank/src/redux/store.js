import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import flashCardReducer from "./reducers/flashCardReducer";
import studentReducer from "./reducers/studentRreducer";

const store = configureStore({
  reducer: {
    authReducer,
    flashCardReducer,
    studentReducer,
  },
});

export default store;
