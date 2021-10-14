import React, { useEffect } from "react";
import User from "../../Components/User/User";
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from "../../redux/user.actions"

function Users() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(loadUsers())
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </div>
  );
}

export default Users;
