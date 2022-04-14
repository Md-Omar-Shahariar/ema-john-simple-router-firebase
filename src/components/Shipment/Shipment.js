import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phone };
    console.log(shipping);
  };
  return (
    <div className="form-container">
      <form action="">
        <div>
          <h2 className="form-title">Shipping Info</h2>
          <div className="input-group">
            <label htmlFor="email" name="email">
              Name
            </label>
            <input onBlur={handleNameBlur} type="text" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="email" name="email">
              Email
            </label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" name="password">
              Address
            </label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="Address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password" name="confirm-password">
              Phone
            </label>
            <input onBlur={handlePhoneBlur} type="text" required name="phone" />
          </div>
          <p style={{ color: "red" }}>{error}</p>

          <input
            onClick={handleCreateUser}
            type="submit"
            value="Add Shipping"
            className="form-submit"
            required
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

export default Shipment;
