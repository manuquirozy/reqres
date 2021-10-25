import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/user.actions";
import { Link } from "react-router-dom";

function EditUsers(props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [user, setUser] = useState(
    users.filter((user) => user.id === parseInt(props.match.params.id))[0]
  );
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);

  function handleInputChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h2>Edit user</h2>
      <p>
        Name:{" "}
        <input
          type="text"
          name="first_name"
          value={firstName}
          onChange={(e) => {
            handleInputChange(e);
            setFirstName(e.target.value);
          }}
        />
      </p>
      <p>
        Lastname:{" "}
        <input
          type="text"
          name="last_name"
          value={lastName}
          onChange={(e) => {
            handleInputChange(e);
            setLastName(e.target.value);
          }}
        />
      </p>
      <p>
        Email:{" "}
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            handleInputChange(e);
            setEmail(e.target.value);
          }}
        />
      </p>
      <Link to={`/`}>
        <button aria-label="Cancel">Cancel</button>
      </Link>
      <Link to={`/`}>
        <button aria-label="Edit user" onClick={() => dispatch(editUser(user))}>
          Edit
        </button>
      </Link>
    </div>
  );
}

export default EditUsers;
