import React from "react";
import { NavLink } from "react-router-dom";
import GoogleLogo from "../../../assets/images/logos/google-login.png";
import FbLogo from "../../../assets/images/logos/fb-login.png";
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
function LoginOtp() {
  return (
    <>
      <div className="login-form-container">
        <form className="login-form">
          <div className="input-email flex-d-col">
            <label>
              Mobile Number<sup>*</sup>
            </label>
            <input type="text" id="number" />
          </div>
          <div className="input-pass flex-d-col">
            <label>
              OTP<sup>*</sup>
            </label>
            <input type="password" id="password" />
          </div>
          <div className="forgot-password-and-signup-link flex-d-row">
            <p>
              Don't have an account? <NavLink to="/SignUp">SignUp</NavLink>
            </p>
            <div className="login-tabs-mobile hide-mobile-css">
              <p>OR</p>
            </div>
            <p>
              <a href="">Resend OTP?</a>
            </p>
          </div>
          <div className="login-btn-wrapper">
            <button>Login</button>
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

export default LoginOtp;
