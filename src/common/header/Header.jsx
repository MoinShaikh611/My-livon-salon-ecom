import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import logo from "../../assets/images/logos/livon-logo.png";
import bag from "../../assets/images/icons/bag.png";
import profile from "../../assets/images/icons/profile.png";
import wishlist from "../../assets/images/icons/wishlist.png";
import cancelHeader from "../../assets/images/icons/cancel-header.png";
import openHeader from "../../assets/images/icons/open-header.png";
import { NavLink, useLocation } from "react-router-dom";
function Header() {
  // get path
  const pathLocation = useLocation();
  useEffect(() => {
    closeNav();
  }, [pathLocation]);

  const mobileHeaderRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeNav = () => {
    setIsMenuOpen(false);
    mobileHeaderRef.current.style.width = "0%";
  };
  const openNav = () => {
    setIsMenuOpen(true);
    mobileHeaderRef.current.style.width = "100%";
  };

  function noScrollWhenMenuOpen() {
    let body = document.body;
    let footer = document.getElementsByTagName("footer");
    if (isMenuOpen === true) {
      body.className = "no-scroll";
    } else {
      body.className = "";
    }
    if (
      pathLocation.pathname === "/account" ||
      pathLocation.pathname === "/account/editprofile"
    ) {
      footer[0].style.display = "none";
    } else {
      footer[0].style.display = "block";
    }
  }
  useEffect(() => {
    if (typeof window || document !== undefined) {
      noScrollWhenMenuOpen();
    }
  });
  return (
    <>
      <div className="livon-header-wrapper">
        <div className="livon-header-container">
          <div className="livon-header-left-side">
            <img src={logo} alt="livon" />
          </div>
          <div className="livon-header-center-side">
            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/product">OUR PRODUCTS</NavLink>
              </li>
              <li>
                <NavLink to={"/styleTribe"}>TRIBE</NavLink>
              </li>
              <li>
                <NavLink to={"/styleStudio"}>STUDIO</NavLink>
              </li>
            </ul>
          </div>
          <div className="livon-header-right-side">
            <img src={wishlist} alt="wishlist" />
            <NavLink to={"/account"}>
              <img src={profile} alt="profile" />
            </NavLink>
            <img src={bag} alt="bag" />
          </div>

          <div className="mobile-livon-open-header">
            <div onClick={openNav}>
              <img src={openHeader} alt="openHeader" />
            </div>
          </div>

          <div className="mobile-livon-header" ref={mobileHeaderRef}>
            <div className="mobile-livon-header-close" onClick={closeNav}>
              <img src={cancelHeader} alt="cancelHeader" />
            </div>
            <ul className="mobile-livon-header-container">
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/product">OUR PRODUCTS</NavLink>
              </li>
              <li>
                <NavLink to={"/styleTribe"}>TRIBE</NavLink>
              </li>
              <li>
                <NavLink to={"/styleStudio"}>STUDIO</NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
              <li>
                <NavLink to={"/SignUp"}>Sign Up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
