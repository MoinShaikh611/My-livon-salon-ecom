import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GoogleLogo from "../../../assets/images/logos/google-login.png";
import FbLogo from "../../../assets/images/logos/fb-login.png";
import axios from "axios";
import iicTestApiUrl from "../../../environment/environment";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
const responseGoogle = (response) => {
  console.log(response);
};

const responseFailureGoogle = (response) => {
  console.log(response);
};

const responseFacebook = (response) => {
  console.log(response);
};

const clientId =
  "379035442383-tgs32qo2776g3t92bf5f1s91b4dcv7u4.apps.googleusercontent.com";

function LoginEmail() {
  const [loginEmailData, setLoginEmailData] = useState({
    type: "email",
    email: "",
    password: "",
  });
  const [loginEmailBody, setLoginEmailBody] = useState({
    type: "email",
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    const newData = { ...loginEmailData };
    newData[e.target.id] = e.target.value;
    setLoginEmailData(newData);
    const loginEmailBody = {
      type: "email",
      email: newData.email,
      password: newData.password,
    };
    setLoginEmailBody(loginEmailBody);
  };

  const [Message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorBool, setErrorBool] = useState(false);

  async function loginEmail(e) {
    e.preventDefault();
    await axios
      .post(iicTestApiUrl + "/web/customer/login", loginEmailBody)
      .then((data) => {
        console.log(data.data.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }
  return (
    <>
      <div className="login-form-container">
        <form className="login-form">
          <div className="input-email flex-d-col">
            <label>
              Email<sup>*</sup>
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => handleLogin(e)}
              value={loginEmailData.email}
            />
          </div>
          <div className="input-pass flex-d-col">
            <label>
              Password<sup>*</sup>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => handleLogin(e)}
              value={loginEmailData.password}
            />
          </div>
          <div className="forgot-password-and-signup-link flex-d-row">
            <p>
              Don't have an account? <NavLink to="/SignUp">SignUp</NavLink>
            </p>
            <div className="login-tabs-mobile hide-mobile-css">
              <p>OR</p>
            </div>
            <p>
              <NavLink to="/">Forgot Password?</NavLink>
            </p>
          </div>
          <div className="login-btn-wrapper">
            <button onClick={loginEmail}>Login</button>
          </div>
          <div className="orSigninWith">
            <div className="horizontal-side-line"></div>
            <p>Or Sign In With</p>
            <div className="horizontal-side-line"></div>
          </div>

          {/* <div className="signInWith-google-facebook-wrapper">
            <button className="google-button">
              <img src={GoogleLogo} alt="GoogleLogo" />
              <p>Google</p>
            </button>
            <button className="fb-button">
              <img src={FbLogo} alt="FbLogo" />
              <p>Facebook</p>
            </button>
          </div> */}
          <div className="signInWith-google-facebook-wrapper">
            {/* <button className="google-button">
                <img src={GoogleLogo} alt="GoogleLogo" />
                <p>Google</p>
              </button> */}
            <GoogleLogin
              clientId="379035442383-tgs32qo2776g3t92bf5f1s91b4dcv7u4.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={responseGoogle}
              onFailure={responseFailureGoogle}
              cookiePolicy={"single_host_origin"}
            />
            {/* <button className="fb-button">
                <img src={FbLogo} alt="FbLogo" />
                <p>Facebook</p>
              </button> */}
            <FacebookLogin
              appId="806617246978070"
              autoLoad={false}
              textButton="Facebook"
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginEmail;
