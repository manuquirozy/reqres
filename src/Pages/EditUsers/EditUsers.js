import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { edit } from '../../features/userList/userListSlice'

function EditUsers(props) {
  const user = useSelector(state => state.userList.users)
  const dispatch = useDispatch()
  return (
    <div>
      Edit users. The id is: {props.match.params.id}{" "}
      <button
        aria-label="Increment value"
        onClick={() => dispatch(edit(props.match.params.id))}
      >
        Edit
      </button>
    </div>
  );
}

export default EditUsers;
