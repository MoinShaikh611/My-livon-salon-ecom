import React, { useState } from "react";
import "./Checkout.css";
import setAsDefaultProfileDetail from "../../assets/images/icons/setAsDefaultProfileDetail.png";
import cartIcon from "../../assets/images/icons/cartIcon.png";
import razorPayIcon from "../../assets/images/icons/razorPayIcon.png";
function Checkout() {
  const [showNewAddress, setShowNewAddress] = useState(false);
  const toggleNewAddress = () => {
    setShowNewAddress(!showNewAddress);
  };
  return (
    <>
      <div className="check-out-wrapper">
        <div className="check-out-container">
          <div className="check-out-header">
            <h1 className="font-redrock mb-1">Checkout</h1>
          </div>
          <div className="checkout-row">
            <div className="checkout-col">
              <div className="checkout-detail-btn">
                <p>Billing Details</p>
              </div>
              <div className="checkout-address-radio-btns-container">
                <fieldset>
                  <label
                    className="checkout-address-radio-btn"
                    htmlFor="address1"
                  >
                    <input type="radio" id="address1" name="billing-details" />
                    <div htmlFor="address1">
                      22, Vikas Nagar, Lorem ipsum dolor, 226022, Lucknow
                      (Default)
                    </div>
                  </label>
                  <label
                    className="checkout-address-radio-btn"
                    htmlFor="address2"
                  >
                    <input type="radio" id="address2" name="billing-details" />
                    <div htmlFor="address2">
                      22, Vikas Nagar, Lorem ipsum dolor, 226022, Lucknow
                    </div>
                  </label>
                  <label className="checkout-address-radio-btn">
                    <input type="radio" id="address3" name="billing-details" />
                    <div htmlFor="address3">
                      22, Vikas Nagar, Lorem ipsum dolor, 226022, Lucknow
                    </div>
                  </label>
                </fieldset>
              </div>
              <div className="add-new-address-btn" onClick={toggleNewAddress}>
                <p>Add a new address</p>
                {showNewAddress ? <p>+</p> : <p>-</p>}
              </div>
              <div
                className={
                  showNewAddress
                    ? `add-new-address-container show`
                    : `add-new-address-container hide`
                }
              >
                <form className="add-new-address-form">
                  <div className="add-new-address-form-container">
                    <div className="edit-profile-row contain-add-new-address-form">
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
                    <p className="addresses-detail-header-wrapper">
                      <span>Country</span>
                      &nbsp;/&nbsp;<span>Region: </span>India<sup>*</sup>
                    </p>
                    <div className="edit-profile-row contain-add-new-address-form">
                      <div className="edit-profile-col">
                        <div className="input-email ">
                          <label>
                            Address<sup>*</sup>
                          </label>
                          <input type="text" id="address" />
                        </div>
                      </div>
                    </div>
                    <div className="edit-profile-row contain-add-new-address-form">
                      <div className="edit-profile-col">
                        <div className="input-email ">
                          <label>
                            PIN Code<sup>*</sup>
                          </label>
                          <input type="text" id="pinCode" />
                        </div>
                      </div>
                      <div className="edit-profile-col">
                        <div className="input-email ">
                          <label>
                            Town / City<sup>*</sup>
                          </label>
                          <input type="text" id="townOrCity" />
                        </div>
                      </div>
                    </div>
                    <div className="edit-profile-row contain-add-new-address-form">
                      <div className="track-order-col">
                        <div className="input-email ">
                          <label>
                            State<sup>*</sup>
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
                    <div className="edit-profile-row contain-add-new-address-form">
                      <div className="edit-profile-col">
                        <div className="input-email ">
                          <label>
                            Email Address<sup>*</sup>
                          </label>
                          <input type="email" id="emailAddress" />
                        </div>
                      </div>
                    </div>
                    <div className="check-out-new-address-mobile-number contain-add-new-address-form">
                      <label>
                        Mobile Number<sup>*</sup>
                      </label>
                      <div className="check-out-new-address-mobile-number-row">
                        <div className="check-out-new-address-mobile-number-row-col">
                          <input type="text" />
                        </div>
                        <div className="check-out-new-address-mobile-number-row-col">
                          <div className="send-otp-green-btn">
                            <p>Send OTP</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="checkout-col">
              <div className="checkout-detail-btn">
                <p>Payment Details</p>
              </div>
              <div className="checkout-address-radio-btns-container">
                <fieldset>
                  <label
                    className="checkout-address-radio-btn"
                    htmlFor="payment1"
                  >
                    <input type="radio" id="payment1" name="payment-details" />
                    <div htmlFor="payment1">Pay Online</div>
                    <img
                      src={razorPayIcon}
                      alt="razorPayIcon"
                      className="razorPayIcon-img"
                    />
                  </label>
                  <label
                    className="checkout-address-radio-btn"
                    htmlFor="payment2"
                  >
                    <input type="radio" id="payment2" name="payment-details" />
                    <div htmlFor="payment2">Cash On Delivery</div>
                  </label>
                </fieldset>
              </div>
              <div className="checkout-terms-and-conditions-wrapper">
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy
                </p>
                <div className="checkout-terms-and-conditions-container">
                  <img
                    src={setAsDefaultProfileDetail}
                    alt="setAsDefaultProfileDetail"
                  />
                  <p>
                    I have read and agree to the website
                    <span> Terms & Conditions</span>
                  </p>
                </div>
              </div>
              <div className="checkout-place-order-wrapper">
                <div className="proceed-to-checkout-btn-wrapper">
                  <div className="proceed-to-checkout-btn-text-container">
                    <p>Proceed to checkout</p>
                  </div>
                  <div className="proceed-to-checkout-btn-img-container">
                    <img src={cartIcon} alt="cartIcon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
