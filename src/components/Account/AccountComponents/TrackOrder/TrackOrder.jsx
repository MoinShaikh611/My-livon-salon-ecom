import React from "react";
import "./TrackOrder.css";
import smallProfileIcon from "../../../../assets/images/icons/small-profile-icon.png";
function TrackOrder() {
  const toggleSideNav = () => {
    const accountSideBar = document.querySelector(
      ".livon-account-sidebar-wrapper"
    );
    accountSideBar.className = " livon-account-sidebar-wrapper show-sidebar";
  };

  return (
    <>
      <div className="track-order-wrapper">
        <div className="edit-profile-header">
          <div className="edit-profile-header-img" onClick={toggleSideNav}>
            <img src={smallProfileIcon} alt="smallProfileIcon" />
          </div>
          <p>Track Your Order</p>
        </div>
        <form className="track-order-form">
          <div className="track-order-container">
            <div className="edit-profile-row">
              <div className="track-order-col">
                <div className="input-email ">
                  <label>
                    Order ID / Tracking ID<sup>*</sup>
                  </label>
                  <input type="text" id="trackingId" />
                </div>
              </div>
            </div>
            <div className="edit-profile-row">
              <div className="save-change-button-wrapper">
                <button className="account-components-btn">TRACK ORDER</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default TrackOrder;
