import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

// eslint-disable-next-line react-hooks/rules-of-hooks

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="form-container">
      <form onSubmit={handleUserSignIn}>
        <div>
          <h2 className="form-title">Login</h2>
          <div className="input-group">
            <label htmlFor="email" name="email">
              Email
            </label>
            <input
              required
              onBlur={handleEmailBlur}
              type="email"
              name="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" name="password">
              Password
            </label>
            <input
              onBlur={handlePasswordBlur}
              required
              type="password"
              name="password"
            />
          </div>
          <p>{error?.message}</p>
          {loading && <p>Loading ...</p>}

          <input type="submit" value="Submit" className="form-submit" />
        </div>
      </form>
      <p>
        New to ema-john?{" "}
        <Link className="form-link" to={"/signup"}>
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
