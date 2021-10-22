import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { users } from "./user.reducer";
import { login } from "./login.reducer";

const middleware = [reduxThunk];

export const store = createStore(
  combineReducers({
    users,
    login,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);
