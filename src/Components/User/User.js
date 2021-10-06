import React from "react";
import { Link } from "react-router-dom";

import PencilIcon from "../../assets/icons/PencilIcon";
import TrashIcon from "../../assets/icons/TrashIcon";

function User({ user: { avatar, email, first_name, id, last_name } }) {
  return (
    <div>
      <img src={avatar} alt="user-avatar"></img>
      <div>
        <h2>
          {first_name} {last_name}
        </h2>
        <h3>{email}</h3>
        <Link to={`/edit/${id}`}>
          <PencilIcon />
        </Link>
        <Link to={`/delete/${id}`}>
          <TrashIcon />
        </Link>
      </div>
    </div>
  );
}

export default User;
