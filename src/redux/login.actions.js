import { PASSWORD } from "../utils/constants";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";


export const login = (username, password) => async (dispatch) => {
  if (password === PASSWORD) {
    dispatch({ type: LOGIN, payload: { username, password } });
  } else {
    dispatch({ type: LOGIN_ERROR, payload: { error: 'Wrong username or password' } });
  }
};

export const logout = () => {
  return { type: LOGOUT };
};
