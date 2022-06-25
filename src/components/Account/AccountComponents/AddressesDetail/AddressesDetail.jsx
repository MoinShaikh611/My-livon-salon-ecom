import React from "react";
import { NavLink } from "react-router-dom";
import "./AddressesDetail.css";
import setAsDefaultProfileDetail from "../../../../assets/images/icons/setAsDefaultProfileDetail.png";
function AddressesDetail() {
  return (
    <>
      <div className="addresses-detail-wrapper">
        <p className="addresses-detail-header-wrapper">
          <NavLink to={"/account/addresses"}>
            <span>Addresses</span>
          </NavLink>
          &nbsp;/&nbsp;Add A New Address
        </p>
        <form className="address-detail-form">
          <div className="addresses-detail-container">
            <div className="edit-profile-row">
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    First Name<sup>*</sup>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    Last Name<sup>*</sup>
                  </label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="edit-profile-row">
              <div className="track-order-col">
                <div className="input-email ">
                  <label>
                    Address<sup>*</sup>
                  </label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="edit-profile-row">
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    PIN Code<sup>*</sup>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>
                    Town / City<sup>*</sup>
                  </label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="edit-profile-row">
              <div className="track-order-col">
                <div className="input-email ">
                  <label>
                    Address<sup>*</sup>
                  </label>
                  <select name="states" id="states" className="select">
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="maharashtra">maharashtra</option>
                    <option value="kerela">kerela</option>
                    <option value="gujrat">gujrat</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="edit-profile-row">
              <div className="track-order-col">
                <div className="input-email ">
                  <label>
                    Mobile Number<sup>*</sup>
                  </label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="setAsDefaultProfileDetail-row">
              <img
                src={setAsDefaultProfileDetail}
                alt="setAsDefaultProfileDetail"
                className="setAsDefaultProfileDetail-img"
              />
              <p>Set as default</p>
            </div>
            <div className="edit-profile-row aic">
              <div className="save-change-button-wrapper">
                <button className="account-components-btn">SAVE ADDRESS</button>
              </div>
              <div className="save-change-button-wrapper">
                <button className="cancel-btn-address-detail">CANCEL</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddressesDetail;
