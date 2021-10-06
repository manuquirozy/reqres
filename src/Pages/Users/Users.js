import React, { useEffect, useState } from "react";
import axios from "axios";

import { URL } from "../../utils/constants";
import User from "../../Components/User/User";
import { useDispatch } from 'react-redux'
import { add } from "../../features/userList/userListSlice"

function Users() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      axios.get(URL + "api/users?page=1").then((res) => {
        setUsers(res.data.data);
<<<<<<< Updated upstream
=======
        dispatch(add(res.data.data))
        console.log(res.data.data);
>>>>>>> Stashed changes
      });
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
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
