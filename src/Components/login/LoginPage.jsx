import React from "react";
import "./login.css";

import user from "../../assets/person.png";
import password from "../../assets/password.png";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="Underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user} alt="user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={password} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default LoginPage;
