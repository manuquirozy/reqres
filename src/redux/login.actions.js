import { PASSWORD } from "../utils/constants";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (username, password) => async (dispatch) => {
  if (password === PASSWORD) {
    dispatch({ type: LOGIN, payload: { username, password } });
  } else {
    console.log("Wrong username or password");
  }
};

export const logout = () => {
  return { type: LOGOUT };
};
