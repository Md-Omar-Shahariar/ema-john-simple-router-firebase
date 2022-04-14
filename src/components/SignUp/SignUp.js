import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirm(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirm) {
      setError("Password did't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <form action="">
        <div>
          <h2 className="form-title">SignUp</h2>
          <div className="input-group">
            <label htmlFor="email" name="email">
              Email
            </label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" name="password">
              Password
            </label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password" name="confirm-password">
              Confirm Password
            </label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              required
              name="confirm-password"
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>

          <input
            onClick={handleCreateUser}
            type="submit"
            value="SignUp"
            className="form-submit"
          />
        </div>
      </form>
      <p>
        Already have an account?{" "}
        <Link className="form-link" to={"/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
