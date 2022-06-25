import React from "react";
import "./MyReviews.css";
import Rating from "../../../../lib/index";
import serumBottle1 from "../../../../assets/images/serum-bottles/serum-1.png";
import smallProfileIcon from "../../../../assets/images/icons/small-profile-icon.png";
export default function MyReviews() {
  const toggleSideNav = () => {
    const accountSideBar = document.querySelector(
      ".livon-account-sidebar-wrapper"
    );
    accountSideBar.className = " livon-account-sidebar-wrapper show-sidebar";
  };
  return (
    <>
      <div className="my-reviews-wrapper">
        <div className="addresses-header-container">
          <div className="edit-profile-header-img" onClick={toggleSideNav}>
            <img src={smallProfileIcon} alt="smallProfileIcon" />
          </div>
          <p className="addresses-header-title">Reviews (04)</p>
        </div>
        <div className="my-reviews-list-container">
          <div className="my-reviews-list-item-container">
            <div className="my-reviews-list-item-container-row1">
              <img src={serumBottle1} alt="serumBottle1" />
            </div>
            <div className="my-reviews-list-item-container-row2">
              <p>Livon Damage Protect Serum / 100 ML</p>
              <Rating rating={4}></Rating>
              <p>
                “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet”
              </p>
            </div>
          </div>
          <div className="my-reviews-list-item-container">
            <div className="my-reviews-list-item-container-row1">
              <img src={serumBottle1} alt="serumBottle1" />
            </div>
            <div className="my-reviews-list-item-container-row2">
              <p>Livon Damage Protect Serum / 100 ML</p>
              <Rating rating={2}></Rating>
              <p>
                “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet”
              </p>
            </div>
          </div>
          <div className="my-reviews-list-item-container">
            <div className="my-reviews-list-item-container-row1">
              <img src={serumBottle1} alt="serumBottle1" />
            </div>
            <div className="my-reviews-list-item-container-row2">
              <p>Livon Damage Protect Serum / 100 ML</p>
              <Rating rating={5}></Rating>
              <p>
                “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet”
              </p>
            </div>
          </div>
          <div className="my-reviews-list-item-container">
            <div className="my-reviews-list-item-container-row1">
              <img src={serumBottle1} alt="serumBottle1" />
            </div>
            <div className="my-reviews-list-item-container-row2">
              <p>Livon Damage Protect Serum / 100 ML</p>
              <Rating rating={1}></Rating>
              <p>
                “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
