import React from "react";

function EditUsers(props) {
  return <div>Edit users. The id is: {props.match.params.id}</div>;
}

export default EditUsers;
