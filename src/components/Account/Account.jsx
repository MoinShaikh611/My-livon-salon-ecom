import React, { useEffect } from "react";
import AccountOutlet from "../../router/AccountOutlet";
import "./Account.css";
import AccountSideBar from "./AccountSideBar/AccountSideBar";
import { useHistory, useLocation } from "react-router-dom";
function Account() {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/account") {
      history.push("/account/editprofile");
    }
  });
  return (
    <>
      <div className="livon-account-wrapper">
        <div className="livon-account-container">
          <AccountSideBar></AccountSideBar>
          <div className="livon-account-component-wrapper">
            <div className="livon-account-component-container">
              <AccountOutlet></AccountOutlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
