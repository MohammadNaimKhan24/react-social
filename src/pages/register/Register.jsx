import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Sakilsocial</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on Naimsocial
          </span>
        </div>
        <div className="registerRight">
            <div className="registerBox">
                <input placeholder="Username" className="registerInput" />
                <input placeholder="Email" className="registerInput" />
                <input placeholder="Create Password" className="registerInput" />
                <input placeholder="Confirm Password" className="registerInput" />
                <button className="registerButton">Sign Up</button>
                <button className="registerLoginButton">Log into Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
