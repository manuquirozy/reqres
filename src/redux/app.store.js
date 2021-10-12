import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk'
import { users } from "./user.reducer";

const middleware = [reduxThunk]

export const store = createStore(
  combineReducers({ 
    users
  }),
  composeWithDevTools(
    applyMiddleware(...middleware))
)