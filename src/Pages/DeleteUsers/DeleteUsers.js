import React from "react";

function DeleteUsers(props) {
  return <div>Delete users. The id is: {props.match.params.id}</div>;
}

export default DeleteUsers;
