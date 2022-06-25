import React from "react";
import "./Addresses.css";
import EditProfileIcon from "../../../../assets/images/icons/editProfile.svg";
import RemoveIcon from "../../../../assets/images/icons/remove-profile.svg";
import SetDefaultIcon from "../../../../assets/images/icons/location.svg";
import { NavLink } from "react-router-dom";
import smallProfileIcon from "../../../../assets/images/icons/small-profile-icon.png";
export default function Addresses() {
  const toggleSideNav = () => {
    const accountSideBar = document.querySelector(
      ".livon-account-sidebar-wrapper"
    );
    accountSideBar.className = " livon-account-sidebar-wrapper show-sidebar";
  };
  return (
    <>
      <div className="addresses-wrapper">
        <div className="addresses-header-container">
          <div className="edit-profile-header-img" onClick={toggleSideNav}>
            <img src={smallProfileIcon} alt="smallProfileIcon" />
          </div>
          <p className="addresses-header-title">Address (03)</p>
          <div
            className="addresses-header-button hide-mobile"
            style={{ marginLeft: "auto" }}
          >
            <button>ADD A NEW ADDRESS</button>
          </div>
        </div>
        <div className="addresses-list-container">
          <div className="addresses-list-item-wrapper">
            <div className="addresses-list-item-container">
              <div className="addresses-list-item-username">
                <h5>John Doe</h5>
              </div>
              <div className="addresses-list-item-useraddress">
                <p>
                  4567, lorem ipsum dolor sit amet, Street A, 36, Hazratganj,
                  Lucknow Uttar Pradesh
                </p>
              </div>
              <div className="addresses-list-item-userphone">
                <p>9123456789</p>
              </div>
              <div className="addresses-list-item-useractions">
                <NavLink
                  to="/account/addresses/address-detail"
                  className="addresses-list-item-action"
                >
                  <img src={EditProfileIcon} alt="EditProfileIcon" />
                  <p>Edit Address</p>
                </NavLink>
                <div className="addresses-list-item-action">
                  <img src={RemoveIcon} alt="RemoveIcon" />
                  <p>Remove</p>
                </div>
                <div className="addresses-list-item-action">
                  <img src={SetDefaultIcon} alt="SetDefaultIcon" />
                  <p>Set Default</p>
                </div>
              </div>
            </div>
          </div>
          <div className="addresses-list-item-wrapper">
            <div className="addresses-list-item-container">
              <div className="addresses-list-item-username">
                <h5>John Doe</h5>
              </div>
              <div className="addresses-list-item-useraddress">
                <p>
                  4567, lorem ipsum dolor sit amet, Street A, 36, Hazratganj,
                  Lucknow Uttar Pradesh
                </p>
              </div>
              <div className="addresses-list-item-userphone">
                <p>9123456789</p>
              </div>
              <div className="addresses-list-item-useractions">
                <div className="addresses-list-item-action">
                  <img src={EditProfileIcon} alt="EditProfileIcon" />
                  <p>Edit Address</p>
                </div>
                <div className="addresses-list-item-action">
                  <img src={RemoveIcon} alt="RemoveIcon" />
                  <p>Remove</p>
                </div>
                <div className="addresses-list-item-action">
                  <img src={SetDefaultIcon} alt="SetDefaultIcon" />
                  <p>Set Default</p>
                </div>
              </div>
            </div>
          </div>
          <div className="addresses-list-item-wrapper">
            <div className="addresses-list-item-container">
              <div className="addresses-list-item-username">
                <h5>John Doe</h5>
              </div>
              <div className="addresses-list-item-useraddress">
                <p>
                  4567, lorem ipsum dolor sit amet, Street A, 36, Hazratganj,
                  Lucknow Uttar Pradesh
                </p>
              </div>
              <div className="addresses-list-item-userphone">
                <p>9123456789</p>
              </div>
              <div className="addresses-list-item-useractions">
                <div className="addresses-list-item-action">
                  <img src={EditProfileIcon} alt="EditProfileIcon" />
                  <p>Edit Address</p>
                </div>
                <div className="addresses-list-item-action">
                  <img src={RemoveIcon} alt="RemoveIcon" />
                  <p>Remove</p>
                </div>
                <div className="addresses-list-item-action">
                  <img src={SetDefaultIcon} alt="SetDefaultIcon" />
                  <p>Set Default</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addresses-header-button hide-desk">
          <button>ADD A NEW ADDRESS</button>
        </div>
      </div>
    </>
  );
}
