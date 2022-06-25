import React from "react";
import "./ResetPassword.css";
import smallProfileIcon from "../../../../assets/images/icons/small-profile-icon.png";
function ResetPassword() {
  const toggleSideNav = () => {
    const accountSideBar = document.querySelector(
      ".livon-account-sidebar-wrapper"
    );
    accountSideBar.className = " livon-account-sidebar-wrapper show-sidebar";
  };
  return (
    <>
      <div className="reset-password-wrapper">
        <div className="edit-profile-header">
          <div className="edit-profile-header-img" onClick={toggleSideNav}>
            <img src={smallProfileIcon} alt="smallProfileIcon" />
          </div>
          <p>Reset Password</p>
        </div>
        <form className="edit-profile-form">
          <div className="edit-profile-container">
            <div className="edit-profile-row">
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    Current Password<sup>*</sup>
                  </label>
                  <input type="text" id="currentPassword" />
                </div>
              </div>
            </div>
            <div className="edit-profile-row">
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    New Password<sup>*</sup>
                  </label>
                  <input type="password" id="newPassword" />
                </div>
              </div>
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    Repeat Password<sup>*</sup>
                  </label>
                  <input type="password" id="repeatPassword" />
                </div>
              </div>
            </div>
            <div className="edit-profile-row">
              <div className="save-change-button-wrapper">
                <button className="account-components-btn">CONFIRM</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
