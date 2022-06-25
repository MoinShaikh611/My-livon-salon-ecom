import React, { useState } from "react";
import LoginEmail from "./LoginEmail";
import "./Login.css";
import LoginOtp from "./LoginOtp";

import LoginRibbon from "../../../assets/images/ribbons/ribbon-login.png";

function Login() {
  const [isOtpActive, setIsOtpActive] = useState(true);
  const loginWithOtp = () => {
    setIsOtpActive(false);
  };
  const loginWithEmail = () => {
    setIsOtpActive(true);
  };
  return (
    <>
      <div className="login-wrapper">
        <div className="login-title">
          <h1>Login To Your Account</h1>
        </div>
        <div className="login-tabs-wrapper">
          <button
            onClick={loginWithOtp}
            className={
              isOtpActive ? `login-btn-with-otp` : `login-btn-with-otp Active`
            }
          >
            Login With OTP
          </button>
          <div className="login-tabs-mobile hide-mobile-css">
            <p>OR</p>
          </div>
          <button
            onClick={loginWithEmail}
            className={
              !isOtpActive
                ? `login-btn-with-email`
                : `login-btn-with-email Active`
            }
          >
            Login With E-Mail
          </button>
        </div>
        {isOtpActive ? <LoginEmail /> : <LoginOtp />}
        <div className="login-ribbon">
          <img src={LoginRibbon} alt="ribbon" />
        </div>
      </div>
    </>
  );
}

export default Login;
