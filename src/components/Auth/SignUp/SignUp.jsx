import React, { useEffect, useState } from "react";
import LoginRibbon from "../../../assets/images/ribbons/ribbon-login.png";
import { NavLink, useHistory } from "react-router-dom";
import GoogleLogo from "../../../assets/images/logos/google-login.png";
import FbLogo from "../../../assets/images/logos/fb-login.png";
import iicTestApiUrl from "../../../environment/environment";
import { phoneValidation } from "../../../validators/formValidation";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";
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
function SignUp() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [signUpBody, setSignUpBody] = useState({
    name: {
      first: "",
      last: "a",
    },
    email: "",
    mobile: "",
    password: "",
  });
  const [ValidMobile, setValidMobile] = useState(true);
  const handleSignUp = (e) => {
    const newData = { ...signUpData };
    newData[e.target.id] = e.target.value;
    setSignUpData(newData);
    const signUpBody = {
      name: {
        first: newData.name,
        last: "a",
      },
      email: newData.email,
      mobile: newData.mobile,
      password: newData.password,
    };
    setSignUpBody(signUpBody);
  };
  const [Message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorBool, setErrorBool] = useState(false);
  const createAccount = (e) => {
    e.preventDefault();
    registerUser(signUpBody);
  };

  const validateMobile = () => {
    const mobileValid = phoneValidation(signUpData.mobile);
    setValidMobile(mobileValid);
  };
  const history = useHistory();
  const registerUser = async (body) => {
    await axios
      .post(iicTestApiUrl + "/web/customer/signup", body)
      .then((data) => {
        setErrorBool(false);
        setSuccessMessage("Account Successfully Created!");
        setTimeout(() => {
          history.push("/login");
        }, 3000);
      })
      .catch((error) => {
        setErrorBool(true);
        setMessage(error.response.data.message);
      });
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-title">
          <h1>Create An Account</h1>
        </div>
        {errorBool ? (
          <p style={{ color: "rgba(234, 0, 103, 1)", textAlign: "center" }}>
            {Message}
          </p>
        ) : (
          <p style={{ color: "rgba(234, 0, 103, 1)", textAlign: "center" }}>
            {successMessage}
          </p>
        )}
        <div className="login-form-container">
          <form className="login-form">
            <div className="input-email flex-d-col">
              <label>
                Name<sup>*</sup>
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => handleSignUp(e)}
                value={signUpData.name}
              />
            </div>

            <div className="input-pass flex-d-col">
              <label>
                Email<sup>*</sup>
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => handleSignUp(e)}
                value={signUpData.email}
              />
            </div>

            <div className="input-pass flex-d-col">
              <label>
                Phone Number<sup>*</sup>
              </label>
              <input
                type="text"
                id="mobile"
                maxLength="10"
                onChange={(e) => handleSignUp(e)}
                onKeyDown={validateMobile}
                value={signUpData.mobile}
              />
              {ValidMobile ? null : (
                <p style={{ color: "rgba(234, 0, 103, 1)" }}>
                  Please Enter Valid Mobile Number
                </p>
              )}
            </div>

            <div className="input-pass flex-d-col">
              <label>
                Password<sup>*</sup>
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => handleSignUp(e)}
                value={signUpData.password}
              />
            </div>

            <div className="forgot-password-and-signup-link flex-d-row">
              <p>
                Already have an account? <NavLink to="/login">Sign In</NavLink>
              </p>
              <p>
                <a href="">Forgot Password?</a>
              </p>
            </div>
            <div className="login-btn-wrapper">
              <button onClick={createAccount}>CREATE ACCOUNT</button>
            </div>
            <div className="orSigninWith">
              <div className="horizontal-side-line"></div>
              <p>Or Sign In With</p>
              <div className="horizontal-side-line"></div>
            </div>
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
        <div className="login-ribbon">
          <img src={LoginRibbon} alt="ribbon" />
        </div>
      </div>
    </>
  );
}

export default SignUp;
