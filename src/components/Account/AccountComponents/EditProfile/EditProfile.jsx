import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import smallProfileIcon from "../../../../assets/images/icons/small-profile-icon.png";
function EditProfile() {
  const toggleSideNav = () => {
    const accountSideBar = document.querySelector(
      ".livon-account-sidebar-wrapper"
    );
    accountSideBar.className = " livon-account-sidebar-wrapper show-sidebar";
  };

  return (
    <>
      <div className="edit-profile-wrapper">
        <div className="edit-profile-header">
          <div className="edit-profile-header-img" onClick={toggleSideNav}>
            <img src={smallProfileIcon} alt="smallProfileIcon" />
          </div>
          <p>Edit Profile</p>
        </div>
        <form className="edit-profile-form">
          <div className="edit-profile-container">
            <div className="edit-profile-row">
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    First Name<sup>*</sup>
                  </label>
                  <input type="text" id="firstName" />
                </div>
              </div>
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    Last Name<sup>*</sup>
                  </label>
                  <input type="text" id="lastName" />
                </div>
              </div>
            </div>
            <div className="edit-profile-row">
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    Email Address<sup>*</sup>
                  </label>
                  <input type="email" id="emailAddress" />
                </div>
              </div>
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    Phone Number<sup>*</sup>
                  </label>
                  <input type="text" id="phoneNumber" />
                </div>
              </div>
            </div>
            <div className="edit-profile-row">
              <div className="save-change-button-wrapper">
                <button className="account-components-btn">SAVE CHANGES</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProfile;
