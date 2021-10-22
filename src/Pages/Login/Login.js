import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/login.actions";

function Login(props) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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
      <Link to={`/users`}>
        <button
          aria-label="login"
          onClick={() => dispatch(login(username, password))}
        >
          Sign In
        </button>
      </Link>
    </div>
  );
}

export default Login;
