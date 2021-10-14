import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/user.actions";
import { Link } from "react-router-dom";

function DeleteUsers(props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  return (
    <div>
      <h2>Delete users</h2>
      <h3>
        Are you sure you want to delete{" "}
        {users.map(
          (user) =>
            user.id === parseInt(props.match.params.id) && user.first_name
        )}{" "}
        {users.map(
          (user) =>
            user.id === parseInt(props.match.params.id) && user.last_name
        )}
        ?
      </h3>
      <Link to={`/`}>
        <button
          aria-label="Cancel"
        >
          Cancel
        </button>
      </Link>
      <Link to={`/`}>
        <button
          aria-label="Delete user"
          onClick={() => dispatch(deleteUser(props.match.params.id))}
        >
          Delete
        </button>
      </Link>
    </div>
  );
}

export default DeleteUsers;
