import React, { useState } from "react";
import Input from "../components/Input/Input";
import classes from "../components/Input/Input.module.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://brightly-api.herokuapp.com/api/v1/auth/login";
    const { email, password } = formInputs;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={classes.loginMainContainer}>
      <h2 className={classes.loginHeader}>Login Page</h2>
      <div className={classes.loginFormContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            name="email"
            value={formInputs.email}
            placeholder="example@a.com"
            onChange={handleInputChange}
            required="required"
          />
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            value={formInputs.password}
            placeholder="Enter your password"
            onChange={handleInputChange}
            required="required"
          />
          {formInputs.email && formInputs.password ? (
            <NavLink to="/">
              <center>
                <button type="submit" className={classes.loginButton}>
                  Login
                </button>
              </center>
            </NavLink>
          ) : (
            <center>
              <button type="submit" className={classes.loginButton}>
                Login
              </button>
            </center>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
