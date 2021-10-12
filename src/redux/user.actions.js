import axios from "axios";
import { URL } from "../utils/constants";

export const LOAD_USERS = 'LOAD_USERS'
export const ADD_USER = 'ADD_USER'
export const EDIT_USER = 'EDIT_USER'
export const DELETE_USER = 'DELETE_USER'

export const loadUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(URL + "api/users?page=1")
    dispatch({ type: LOAD_USERS, payload: res.data.data})
  } catch (error) {
    console.log(error);
  }
}