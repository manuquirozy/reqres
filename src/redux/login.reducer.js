import { LOGIN, LOGOUT } from "./login.actions";

const initialState = { username: "", password: "" };

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {username: action.payload.username, password: action.payload.password}
    case LOGOUT:
      return initialState
    default:
      return state;
  }
};
