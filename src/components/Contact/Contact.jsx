import React from "react";
import "./Contact.css";
import contactRibbon from "../../assets/images/ribbons/ribbon-contact.png";
import contactSend from "../../assets/images/icons/contact-send.png";
import messageBoxIcon from "../../assets/images/icons/message-box.png";
import phoneIcon from "../../assets/images/icons/phoneIcon.svg";

function Contact() {
  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-header">
          <div className="contact-header-div1"></div>
          <h1 className="font-redrock">Contact Us</h1>
        </div>

        <form className="contact-form">
          <div className="contact-ribbon-container">
            <img src={contactRibbon} alt="contactRibbon" />
          </div>
          <div className="contact-form-container">
            <div className="edit-profile-row contain-contact-form">
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>Your Name*</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="edit-profile-row contain-contact-form">
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>Email*</label>
                  <input type="text" />
                </div>
              </div>
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>Phone Number (Optional)*</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="edit-profile-row contain-contact-form">
              <div className="edit-profile-col">
                <div className="input-email ">
                  <label>Your Message (350 characters max)*</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
            </div>
            <div className="edit-profile-row contain-contact-form">
              <div className="proceed-to-checkout-btn-wrapper contain-contact">
                <div className="proceed-to-checkout-btn-text-container">
                  <p>SEND MESSAGE</p>
                </div>
                <div className="proceed-to-checkout-btn-img-container">
                  <img src={contactSend} alt="contactSend" />
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="contact-footer">
          <div className="visit-us-at-container">
            <div className="visit-us-at-col">
              <img src={messageBoxIcon} alt="messageBoxIcon" />
            </div>
            <div className="visit-us-at-col">
              <p className="font-redrock">Write Us At</p>
              <a>mail@mylivonmysalon.com</a>
            </div>
          </div>
          <div className="visit-us-at-container">
            <div className="visit-us-at-col">
              <img src={phoneIcon} alt="phoneIcon" />
            </div>
            <div className="visit-us-at-col">
              <p className="font-redrock">Call Us At</p>
              <a>+91-123456789</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
