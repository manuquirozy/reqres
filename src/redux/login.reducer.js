import { LOGIN, LOGOUT, LOGIN_ERROR } from "./login.actions";

const initialState = { username: "", password: "", error: '' };

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { 
        ...initialState,
        username: action.payload.username,
        password: action.payload.password
      }
    case LOGOUT:
      return initialState
    case LOGIN_ERROR:
      return { 
        ...initialState,
        error: action.payload.error,
      }
    default:
      return state;
  }
};
