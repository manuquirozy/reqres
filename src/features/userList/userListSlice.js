import { createSlice } from "@reduxjs/toolkit";

export const userListSlice = createSlice({
  name: "userList",
  initialState: {
    users: [],
  },
  reducers: {
    add: (state, action) => {
      return [...state.users, action.payload];
    },
    edit: (state, action) => {
      return state.users.map((user) =>
        user.id === action.payload.id ? { ...action.payload } : { ...user }
      );
    },
    del: (state, action) => {
      return state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { add, edit, del } = userListSlice.actions;

export default userListSlice.reducer;
