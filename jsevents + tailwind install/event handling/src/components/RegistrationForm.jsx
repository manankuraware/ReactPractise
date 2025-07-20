import React, { useState } from "react";

export const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confpassword: "",
    phoneNumber: "",
  });
  function handleInputChange(e) {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className="container">
      <div className="title">
        <p>Registration</p>
      </div>

      <form action="#">
        <div className="user_details">
          <div className="input_box">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              value={user.firstName}
              name="firstName"
              onChange={handleInputChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your last name"
              required
              value={user.lastName}
              name="lastName"
              onChange={handleInputChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={user.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              placeholder="Enter your number"
              required
              value={user.phoneNumber}
              name="phoneNumber"
              onChange={handleInputChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              placeholder="Enter your password"
              required
              value={user.password}
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="input_box">
            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              type="password"
              id="confirmPass"
              placeholder="Confirm your password"
              required
              value={user.confpassword}
              onChange={handleInputChange}
              name="confpassword"
            />
          </div>
        </div>

        <div className="reg_btn">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};
