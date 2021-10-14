import { ADD_USER, EDIT_USER, DELETE_USER, LOAD_USERS } from "./user.actions"

const initialState = []

export const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: 
      return [...state, action.payload];
    case EDIT_USER: 
      return state.map((user) =>
        user.id === action.payload.id ? { ...action.payload } : { ...user });
    case DELETE_USER: 
      return state.filter((user) => user.id !== parseInt(action.payload));
    case LOAD_USERS: 
      return [...action.payload]
    default:
      return state
  }
}