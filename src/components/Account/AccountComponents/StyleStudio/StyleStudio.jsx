import React from "react";
import "./StyleStudio.css";
import braidedPonyTail1 from "../../../../assets/images/style-studio/1.jpg";
import braidedPonyTail2 from "../../../../assets/images/style-studio/2.jpg";
import braidedPonyTail3 from "../../../../assets/images/style-studio/3.jpg";
import smallProfileIcon from "../../../../assets/images/icons/small-profile-icon.png";
function StyleStudio() {
  const toggleSideNav = () => {
    const accountSideBar = document.querySelector(
      ".livon-account-sidebar-wrapper"
    );
    accountSideBar.className = " livon-account-sidebar-wrapper show-sidebar";
  };
  return (
    <>
      <div className="style-studio-wrapper">
        <div className="style-studio-header">
          <div className="edit-profile-header-img" onClick={toggleSideNav}>
            <img src={smallProfileIcon} alt="smallProfileIcon" />
          </div>
          <p>
            Style <span style={{ color: "#EA0067" }}>Studio</span> +
          </p>
          <h1 className="font-redrock">Braided Ponytail</h1>
        </div>
        <div className="style-studio-container">
          <div className="style-studio-list-container">
            <div className="style-studio-list-item">
              <img src={braidedPonyTail1} alt="braidedPonyTail1" />
            </div>
            <div className="style-studio-list-item">
              <img src={braidedPonyTail2} alt="braidedPonyTail2" />
            </div>
            <div className="style-studio-list-item">
              <img src={braidedPonyTail3} alt="braidedPonyTail3" />
            </div>
          </div>
          <div className="style-studio-category-name">
            <p>ACE THE DOUBLE DUTCH-BRAIDED PONYTAIL</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StyleStudio;
