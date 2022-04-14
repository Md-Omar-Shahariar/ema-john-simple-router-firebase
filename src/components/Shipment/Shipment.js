import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Shipment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
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
            <input onBlur={handleNameBlur} type="email" name="email" required />
          </div>
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
