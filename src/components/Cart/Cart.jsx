import React, { useContext } from "react";
// import { CartState } from "../../context/Context";
import "./Cart.css";
import serum1 from "../../assets/images/serum-bottles/serum-1.png";
import serum2 from "../../assets/images/serum-bottles/serum-2.png";
import serum3 from "../../assets/images/serum-bottles/serum-3.png";
import removeIcon from "../../assets/images/icons/remove-profile.svg";
import circleWishlistIcon from "../../assets/images/icons/circleWishlist.png";
import cartIcon from "../../assets/images/icons/cartIcon.png";

function Cart() {
  // const { state } = CartState();
  // console.log(state);

  return (
    <>
      <div className="livon-cart-wrapper">
        <div className="livon-cart-container">
          <div className="livon-cart-col1">
            <div className="my-cart-header">
              <p>My Cart (03)</p>
            </div>
            <div className="tableFixHead">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="my-cart-product-name-container">
                        <div className="my-cart-product-name-container-col1">
                          <img src={serum1} alt="serum1" />
                        </div>
                        <div className="my-cart-product-name-container-col2">
                          <p>Livon Damage Protect Serum / 100 ML</p>
                          <div className="addresses-list-item-action">
                            <img src={removeIcon} alt="removeIcon" />
                            <p>Remove</p>
                            <img
                              src={circleWishlistIcon}
                              alt="circleWishlistIcon"
                            />
                            <p>Wishlist</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>₹ 300</td>
                    <td>
                      <div className="adding-subtracting-cart-items-container">
                        <button>-</button>
                        <button>2</button>
                        <button>+ </button>
                      </div>
                    </td>
                    <td>₹ 600</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="my-cart-product-name-container">
                        <div className="my-cart-product-name-container-col1">
                          <img src={serum1} alt="serum1" />
                        </div>
                        <div className="my-cart-product-name-container-col2">
                          <p>Livon Damage Protect Serum / 100 ML</p>
                          <div className="addresses-list-item-action">
                            <img src={removeIcon} alt="removeIcon" />
                            <p>Remove</p>
                            <img
                              src={circleWishlistIcon}
                              alt="circleWishlistIcon"
                            />
                            <p>Wishlist</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>₹ 300</td>
                    <td>
                      <div className="adding-subtracting-cart-items-container">
                        <button>-</button>
                        <button>2</button>
                        <button>+ </button>
                      </div>
                    </td>
                    <td>₹ 600</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="my-cart-product-name-container">
                        <div className="my-cart-product-name-container-col1">
                          <img src={serum1} alt="serum1" />
                        </div>
                        <div className="my-cart-product-name-container-col2">
                          <p>Livon Damage Protect Serum / 100 ML</p>
                          <div className="addresses-list-item-action">
                            <img src={removeIcon} alt="removeIcon" />
                            <p>Remove</p>
                            <img
                              src={circleWishlistIcon}
                              alt="circleWishlistIcon"
                            />
                            <p>Wishlist</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>₹ 300</td>
                    <td>
                      <div className="adding-subtracting-cart-items-container">
                        <button>-</button>
                        <button>2</button>
                        <button>+ </button>
                      </div>
                    </td>
                    <td>₹ 600</td>
                  </tr>
                  <tr>
                    <td>
                      <div className="my-cart-product-name-container">
                        <div className="my-cart-product-name-container-col1">
                          <img src={serum1} alt="serum1" />
                        </div>
                        <div className="my-cart-product-name-container-col2">
                          <p>Livon Damage Protect Serum / 100 ML</p>
                          <div className="addresses-list-item-action">
                            <img src={removeIcon} alt="removeIcon" />
                            <p>Remove</p>
                            <img
                              src={circleWishlistIcon}
                              alt="circleWishlistIcon"
                            />
                            <p>Wishlist</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>₹ 300</td>
                    <td>
                      <div className="adding-subtracting-cart-items-container">
                        <button>-</button>
                        <button>2</button>
                        <button>+ </button>
                      </div>
                    </td>
                    <td>₹ 600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="livon-cart-col2">
            <div className="proceed-to-checkout-container">
              <div className="proceed-to-checkout-row">
                <div className="proceed-to-checkout-col">
                  <p>Sub-Total:</p>
                </div>
                <div className="proceed-to-checkout-col">
                  <p>₹ 1443</p>
                </div>
              </div>
              <div className="proceed-to-checkout-row">
                <div className="proceed-to-checkout-col">
                  <p>Coupon Discount:</p>
                </div>
                <div className="proceed-to-checkout-col">
                  <p>-₹ 100</p>
                </div>
              </div>
              <div className="proceed-to-checkout-row">
                <div className="proceed-to-checkout-col">
                  <p>Total:</p>
                </div>
                <div className="proceed-to-checkout-col">
                  <p>₹ 1343</p>
                </div>
              </div>
              <div className="proceed-to-checkout-row">
                <div className="proceed-to-checkout-col">
                  <p>Enter Discount code</p>
                </div>
                <div className="proceed-to-checkout-col">
                  <img src={removeIcon} alt="removeIcon" />
                </div>
              </div>
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
    </>
  );
}

export default Cart;
