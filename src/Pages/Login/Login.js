import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/login.actions";

function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { username: userAuth } = useSelector((state) => state.login)
  const { error: authError } = useSelector((state) => state.login)



  const handleLogin = () => {
    dispatch(login(username, password))
  }

  if (userAuth) {
    history.push('/users')
  }

  return (
    <div>
      <h2>Login</h2>
      <p>
        Username:{" "}
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </p>
      <p>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </p>
      <button
          aria-label="login"
          onClick={handleLogin}
      >
        Sign In
      </button>
      <br/>
        {authError && <span>{authError}</span>}
    </div>
  );
}

export default Login;
