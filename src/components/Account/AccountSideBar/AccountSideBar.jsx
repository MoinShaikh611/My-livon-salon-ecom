import React, { useEffect } from "react";
import "./AccountSideBar.css";
import { NavLink } from "react-router-dom";
import { removeFooterFromSpecificRoute } from "../../../utility/Helper";
import { useLocation } from "react-router-dom";
// logos
import DefaultProfileLogo from "../../../assets/images/logos/default-profile-logo.png";

// icons
import EditProfileIcon from "../../../assets/images/icons/MyProfile.svg";
import TrackOrderIcon from "../../../assets/images/icons/MyOrder.svg";
import ResetPasswordIcon from "../../../assets/images/icons/ResetPassword.svg";
import AddressesIcon from "../../../assets/images/icons/AddressWishlist.svg";
import MyOrderIcon from "../../../assets/images/icons/MyOrder.svg";
import MyReviewsIcon from "../../../assets/images/icons/MyReviews.svg";
import StyleStudioIcon from "../../../assets/images/icons/StyleStudioIcon.svg";
import closeSideBar from "../../../assets/images/icons/cancel-header.png";
function AccountSideBar() {
  const pathLocation = useLocation();

  useEffect(() => {
    closeSideBarFunc();
  }, [pathLocation]);

  function removeFooter() {
    const ress = removeFooterFromSpecificRoute(pathLocation.pathname);
    let footer = document.querySelector("footer");

    if (ress === pathLocation.pathname) {
      footer.style.display = "none";
    } else {
      footer.style.display = "block";
    }
  }
  useEffect(() => {
    if (typeof window || document !== undefined) {
      removeFooter();
      let arrOfAccountFeatures = document.querySelectorAll(
        ".livon-account-sidenav-wrapper a"
      );
      arrOfAccountFeatures.forEach((a) => {
        if (a.className === "active") {
          a.childNodes[0].childNodes[1].style.filter =
            "invert(21%) sepia(96%) saturate(6228%) hue-rotate(324deg) brightness(88%) contrast(111%)";
          a.childNodes[0].childNodes[0].style.color = "#EB0369";
        } else {
          a.childNodes[0].childNodes[0].style.color = "";
          a.childNodes[0].childNodes[1].style.filter = "";
        }
      });
    }
  });

  const closeSideBarFunc = () => {
    const accountSideBar = document.querySelector(
      ".livon-account-sidebar-wrapper"
    );
    accountSideBar.className = "livon-account-sidebar-wrapper";
  };

  return (
    <>
      <div className="livon-account-sidebar-wrapper">
        <div className="livon-account-sidenav-wrapper">
          <div className="profile-name-and-icon-container">
            <img src={DefaultProfileLogo} alt="profile" />
            <div className="profile-name-and-logout-content">
              <p>Shivam Pandey</p>
              <p>Logout</p>
            </div>
            <div className="close-side-bar-icon" onClick={closeSideBarFunc}>
              <img src={closeSideBar} alt="closeSideBar" />
            </div>
          </div>
          <NavLink to={"/account/editprofile"}>
            <div className="acount-list-item-container">
              <p>Edit Profile</p>
              <img src={EditProfileIcon} alt="EditProfileIcon" />
            </div>
          </NavLink>

          <div className="account-hr-line"></div>
          <NavLink to={"/account/track-order"}>
            <div className="acount-list-item-container">
              <p>Track Order</p>
              <img src={TrackOrderIcon} alt="TrackOrderIcon" />
            </div>
          </NavLink>
          <div className="account-hr-line"></div>
          <NavLink to={"/account/reset-password"}>
            <div className="acount-list-item-container">
              <p>Reset Password</p>
              <img src={ResetPasswordIcon} alt="ResetPasswordIcon" />
            </div>
          </NavLink>
          <div className="account-hr-line"></div>
          <NavLink to={"/account/addresses"}>
            <div className="acount-list-item-container">
              <p>Addresses</p>
              <img src={AddressesIcon} alt="AddressesIcon" />
            </div>
          </NavLink>
          <div className="account-hr-line"></div>
          <NavLink to={"/account/wishlist"}>
            <div className="acount-list-item-container">
              <p>Wishlist</p>
              <img src={AddressesIcon} alt="wishlist" />
            </div>
          </NavLink>
          <div className="account-hr-line"></div>
          <NavLink to={"/account/my-orders"}>
            <div className="acount-list-item-container">
              <p>My Orders</p>
              <img src={MyOrderIcon} alt="MyOrderIcon" />
            </div>
          </NavLink>
          <div className="account-hr-line"></div>
          <NavLink to={"/account/my-reviews"}>
            <div className="acount-list-item-container">
              <p>My Reviews</p>
              <img src={MyReviewsIcon} alt="MyReviewsIcon" />
            </div>
          </NavLink>
          <div className="account-hr-line"></div>
          <NavLink to={"/account/style-studio"}>
            <div className="acount-list-item-container">
              <p>Style Studio</p>
              <img src={StyleStudioIcon} alt="StyleStudioIcon" />
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default AccountSideBar;
