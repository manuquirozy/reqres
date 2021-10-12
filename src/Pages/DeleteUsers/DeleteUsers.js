import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { del } from '../../features/userList/userListSlice'

function DeleteUsers(props) {
  const user = useSelector(state => state.userList.users)
  const dispatch = useDispatch()
  return (<div>Delete users. The id is: {props.match.params.id}
        <button
        aria-label="Increment value"
        onClick={() => dispatch(del(props.match.params.id))}
      >
        Delete
      </button></div>);
}

export default DeleteUsers;
