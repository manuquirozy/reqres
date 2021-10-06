import React, { useEffect, useState } from "react";
import axios from "axios";

import { URL } from "../../utils/constants";
import User from "../../Components/User/User";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      axios.get(URL + "api/users?page=1").then((res) => {
        setUsers(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </div>
  );
}

export default Users;
