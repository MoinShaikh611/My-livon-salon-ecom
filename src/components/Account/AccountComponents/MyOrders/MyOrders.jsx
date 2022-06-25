import React from "react";
import "./MyOrders.css";
import serumBottle1 from "../../../../assets/images/serum-bottles/serum-1.png";
import RemoveIcon from "../../../../assets/images/icons/remove-profile.svg";
import trackOrderTruckIcon from "../../../../assets/images/icons/trackOrderTruck.svg";
import rateProductIcon from "../../../../assets/images/icons/rateProduct.svg";
import smallProfileIcon from "../../../../assets/images/icons/small-profile-icon.png";
import { NavLink } from "react-router-dom";
function MyOrders() {
  const toggleSideNav = () => {
    const accountSideBar = document.querySelector(
      ".livon-account-sidebar-wrapper"
    );
    accountSideBar.className = " livon-account-sidebar-wrapper show-sidebar";
  };
  return (
    <>
      <div className="my-orders-wrapper">
        <div className="addresses-header-container">
          <div className="edit-profile-header-img" onClick={toggleSideNav}>
            <img src={smallProfileIcon} alt="smallProfileIcon" />
          </div>
          <p className="addresses-header-title">Orders (03)</p>
        </div>
        <div className="my-orders-list-container">
          <NavLink
            to="/account/my-orders/order-detail"
            className="my-orders-list-item-wrapper"
          >
            <div className="my-orders-list-item-row bg-white">
              <div className="my-orders-list-item-col1-wrapper">
                <div className="my-orders-list-item-col1-container">
                  <img src={serumBottle1} alt="serumBottle1" />
                </div>
              </div>
              <div className="my-orders-list-item-col2-wrapper">
                <div className="my-orders-list-item-col2-container">
                  <div className="my-orders-list-item-col2-row">
                    <p>Livon Damage Protect Serum / 100 ML</p>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row-col">
                      <p>₹ 300</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>1 Qty</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>Total: ₹ 300</p>
                    </div>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={RemoveIcon} alt="RemoveIcon" />
                      <p>Cancel</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img
                        src={trackOrderTruckIcon}
                        alt="trackOrderTruckIcon"
                      />
                      <p>Track Order</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={rateProductIcon} alt="rateProductIcon" />
                      <p>Rate Product</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-orders-list-item-row2">
              <div className="my-orders-list-item-row-col">
                <p>Order Placed:</p>
                <p>20 May 2022</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>Address:</p>
                <p>25, Vikas Nagar, Luc...</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>In Process</p>
                <p>28 May 2022</p>
              </div>
            </div>
          </NavLink>

          <div className="my-orders-list-item-wrapper">
            <div className="my-orders-list-item-row bg-white">
              <div className="my-orders-list-item-col1-wrapper">
                <div className="my-orders-list-item-col1-container">
                  <img src={serumBottle1} alt="serumBottle1" />
                </div>
              </div>
              <div className="my-orders-list-item-col2-wrapper">
                <div className="my-orders-list-item-col2-container">
                  <div className="my-orders-list-item-col2-row">
                    <p>Livon Damage Protect Serum / 100 ML</p>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row-col">
                      <p>₹ 300</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>1 Qty</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>Total: ₹ 300</p>
                    </div>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={RemoveIcon} alt="RemoveIcon" />
                      <p>Cancel</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img
                        src={trackOrderTruckIcon}
                        alt="trackOrderTruckIcon"
                      />
                      <p>Track Order</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={rateProductIcon} alt="rateProductIcon" />
                      <p>Rate Product</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-orders-list-item-row2">
              <div className="my-orders-list-item-row-col">
                <p>Order Placed:</p>
                <p>20 May 2022</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>Address:</p>
                <p>25, Vikas Nagar, Luc...</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>In Process</p>
                <p>28 May 2022</p>
              </div>
            </div>
          </div>
          <div className="my-orders-list-item-wrapper">
            <div className="my-orders-list-item-row bg-white">
              <div className="my-orders-list-item-col1-wrapper">
                <div className="my-orders-list-item-col1-container">
                  <img src={serumBottle1} alt="serumBottle1" />
                </div>
              </div>
              <div className="my-orders-list-item-col2-wrapper">
                <div className="my-orders-list-item-col2-container">
                  <div className="my-orders-list-item-col2-row">
                    <p>Livon Damage Protect Serum / 100 ML</p>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row-col">
                      <p>₹ 300</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>1 Qty</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>Total: ₹ 300</p>
                    </div>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={RemoveIcon} alt="RemoveIcon" />
                      <p>Cancel</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img
                        src={trackOrderTruckIcon}
                        alt="trackOrderTruckIcon"
                      />
                      <p>Track Order</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={rateProductIcon} alt="rateProductIcon" />
                      <p>Rate Product</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-orders-list-item-row2">
              <div className="my-orders-list-item-row-col">
                <p>Order Placed:</p>
                <p>20 May 2022</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>Address:</p>
                <p>25, Vikas Nagar, Luc...</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>In Process</p>
                <p>28 May 2022</p>
              </div>
            </div>
          </div>
          <div className="my-orders-list-item-wrapper">
            <div className="my-orders-list-item-row bg-white">
              <div className="my-orders-list-item-col1-wrapper">
                <div className="my-orders-list-item-col1-container">
                  <img src={serumBottle1} alt="serumBottle1" />
                </div>
              </div>
              <div className="my-orders-list-item-col2-wrapper">
                <div className="my-orders-list-item-col2-container">
                  <div className="my-orders-list-item-col2-row">
                    <p>Livon Damage Protect Serum / 100 ML</p>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row-col">
                      <p>₹ 300</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>1 Qty</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>Total: ₹ 300</p>
                    </div>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={RemoveIcon} alt="RemoveIcon" />
                      <p>Cancel</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img
                        src={trackOrderTruckIcon}
                        alt="trackOrderTruckIcon"
                      />
                      <p>Track Order</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={rateProductIcon} alt="rateProductIcon" />
                      <p>Rate Product</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-orders-list-item-row2">
              <div className="my-orders-list-item-row-col">
                <p>Order Placed:</p>
                <p>20 May 2022</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>Address:</p>
                <p>25, Vikas Nagar, Luc...</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>In Process</p>
                <p>28 May 2022</p>
              </div>
            </div>
          </div>
          <div className="my-orders-list-item-wrapper">
            <div className="my-orders-list-item-row bg-white">
              <div className="my-orders-list-item-col1-wrapper">
                <div className="my-orders-list-item-col1-container">
                  <img src={serumBottle1} alt="serumBottle1" />
                </div>
              </div>
              <div className="my-orders-list-item-col2-wrapper">
                <div className="my-orders-list-item-col2-container">
                  <div className="my-orders-list-item-col2-row">
                    <p>Livon Damage Protect Serum / 100 ML</p>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row-col">
                      <p>₹ 300</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>1 Qty</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>Total: ₹ 300</p>
                    </div>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={RemoveIcon} alt="RemoveIcon" />
                      <p>Cancel</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img
                        src={trackOrderTruckIcon}
                        alt="trackOrderTruckIcon"
                      />
                      <p>Track Order</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={rateProductIcon} alt="rateProductIcon" />
                      <p>Rate Product</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-orders-list-item-row2">
              <div className="my-orders-list-item-row-col">
                <p>Order Placed:</p>
                <p>20 May 2022</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>Address:</p>
                <p>25, Vikas Nagar, Luc...</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>In Process</p>
                <p>28 May 2022</p>
              </div>
            </div>
          </div>
          <div className="my-orders-list-item-wrapper">
            <div className="my-orders-list-item-row bg-white">
              <div className="my-orders-list-item-col1-wrapper">
                <div className="my-orders-list-item-col1-container">
                  <img src={serumBottle1} alt="serumBottle1" />
                </div>
              </div>
              <div className="my-orders-list-item-col2-wrapper">
                <div className="my-orders-list-item-col2-container">
                  <div className="my-orders-list-item-col2-row">
                    <p>Livon Damage Protect Serum / 100 ML</p>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row-col">
                      <p>₹ 300</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>1 Qty</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>Total: ₹ 300</p>
                    </div>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={RemoveIcon} alt="RemoveIcon" />
                      <p>Cancel</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img
                        src={trackOrderTruckIcon}
                        alt="trackOrderTruckIcon"
                      />
                      <p>Track Order</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={rateProductIcon} alt="rateProductIcon" />
                      <p>Rate Product</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-orders-list-item-row2">
              <div className="my-orders-list-item-row-col">
                <p>Order Placed:</p>
                <p>20 May 2022</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>Address:</p>
                <p>25, Vikas Nagar, Luc...</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>In Process</p>
                <p>28 May 2022</p>
              </div>
            </div>
          </div>
          <div className="my-orders-list-item-wrapper">
            <div className="my-orders-list-item-row bg-white">
              <div className="my-orders-list-item-col1-wrapper">
                <div className="my-orders-list-item-col1-container">
                  <img src={serumBottle1} alt="serumBottle1" />
                </div>
              </div>
              <div className="my-orders-list-item-col2-wrapper">
                <div className="my-orders-list-item-col2-container">
                  <div className="my-orders-list-item-col2-row">
                    <p>Livon Damage Protect Serum / 100 ML</p>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row-col">
                      <p>₹ 300</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>1 Qty</p>
                    </div>
                    <div className="my-orders-list-item-col2-row-col">
                      <p>Total: ₹ 300</p>
                    </div>
                  </div>
                  <div className="my-orders-list-item-col2-row">
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={RemoveIcon} alt="RemoveIcon" />
                      <p>Cancel</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img
                        src={trackOrderTruckIcon}
                        alt="trackOrderTruckIcon"
                      />
                      <p>Track Order</p>
                    </div>
                    <div className="my-orders-list-item-col2-row3-col">
                      <img src={rateProductIcon} alt="rateProductIcon" />
                      <p>Rate Product</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-orders-list-item-row2">
              <div className="my-orders-list-item-row-col">
                <p>Order Placed:</p>
                <p>20 May 2022</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>Address:</p>
                <p>25, Vikas Nagar, Luc...</p>
              </div>
              <div className="my-orders-list-item-row-col">
                <p>In Process</p>
                <p>28 May 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
