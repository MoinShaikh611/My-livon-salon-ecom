import React from "react";
import { NavLink } from "react-router-dom";
import "./OrderDetail.css";
import RemoveIcon from "../../../../assets/images/icons/remove-profile.svg";
import trackOrderTruckIcon from "../../../../assets/images/icons/trackOrderTruck.svg";
import downloadInvoiceIcon from "../../../../assets/images/icons/downloadInvoiceIcon.png";
import serumBottle1 from "../../../../assets/images/serum-bottles/serum-1.png";
function OrderDetail() {
  return (
    <>
      <div className="order-detail-wrapper">
        <p className="addresses-detail-header-wrapper">
          <NavLink to={"/account/my-orders"}>
            <span>Orders</span>
          </NavLink>
          &nbsp;/&nbsp;Order detail
        </p>
        <div className="order-detail-container">
          <div className="order-detail-col">
            <div className="order-detail-col1-row1">
              <div className="order-detail-item-header-bar">
                <div className="order-detail-item-header-bar-col">
                  <p>Order Placed:</p>
                  <p>20 May 2022</p>
                </div>
                <div className="order-detail-item-header-bar-col">
                  <p>Order ID</p>
                  <p>#01328897989</p>
                </div>
                <div className="order-detail-item-header-bar-col">
                  <p>Delivery</p>
                  <p>28 May 2022</p>
                </div>
              </div>
              <div className="order-detail-item-product-description">
                <p>Livon Damage Protect Serum / 100 ML + 1 more Product</p>
              </div>
              <div className="order-detail-item-product-actions">
                <div className="order-detail-item-product-actions-col">
                  <img src={RemoveIcon} alt="RemoveIcon" />
                  <p>Cancel</p>
                </div>
                <div className="order-detail-item-product-actions-col">
                  <img src={trackOrderTruckIcon} alt="trackOrderTruckIcon" />
                  <p> Track Order</p>
                </div>
                <div className="order-detail-item-product-actions-col">
                  <img src={downloadInvoiceIcon} alt="downloadInvoiceIcon" />
                  <p>Download Invoice</p>
                </div>
              </div>
            </div>
            <div className="order-detail-col1-row2">
              <div className="products-ordered-wrapper">
                <div className="products-ordered-header">
                  <p>
                    Products <span>(02)</span>
                  </p>
                </div>
                <div className="products-ordered-container">
                  <div className="products-ordered-container-row">
                    <div className="products-ordered-container-col1">
                      <img src={serumBottle1} alt="serumBottle1" />
                    </div>
                    <div className="products-ordered-container-col2">
                      <p>Livon Damage Protect Serum / 100 ML</p>
                      <div className="products-ordered-description">
                        <p>₹ 300</p>
                        <p>1 Qty</p>
                        <p>Total: ₹ 300</p>
                      </div>
                    </div>
                  </div>
                  <div className="products-ordered-container-row">
                    <div className="products-ordered-container-col1">
                      <img src={serumBottle1} alt="serumBottle1" />
                    </div>
                    <div className="products-ordered-container-col2">
                      <p>Livon Damage Protect Serum / 100 ML</p>
                      <div className="products-ordered-description">
                        <p>₹ 300</p>
                        <p>1 Qty</p>
                        <p>Total: ₹ 300</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-detail-col">
            <div className="order-detail-col2-row1">
              <div className="order-detail-col2-row1-col">
                <p>Address</p>
                <p>
                  John Doe 25 Lorem Ipsum Dolor Vikas Nagar Lucknow, Uttar
                  Pradesh, 226022 India
                </p>
                <p>9123688920</p>
              </div>
              <div className="order-detail-col2-row1-col">
                <p>Payment Method</p>
                <p>Paid Online</p>
              </div>
            </div>
            <div className="order-summary-row-wrapper">
              <div className="order-summary-header">
                <p>Order Summary</p>
              </div>
              <div className="order-summary-container">
                <div className="order-summary-row-col">
                  <p>Item(s) Subtotal:</p>
                  <p>Coupon discount:</p>
                  <p>Total</p>
                </div>
                <div className="order-summary-row-col">
                  <p>₹600</p>
                  <p>-₹50</p>
                  <p>₹550</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
