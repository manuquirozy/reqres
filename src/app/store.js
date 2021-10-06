import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../features/userList/userListSlice";

export default configureStore({
  reducer: {
   userList: userListReducer,
  },
});
