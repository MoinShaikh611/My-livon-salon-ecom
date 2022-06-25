import React from "react";
import Account from "../components/Account/Account";
import EditProfile from "../components/Account/AccountComponents/EditProfile/EditProfile";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import TrackOrder from "../components/Account/AccountComponents/TrackOrder/TrackOrder";
import ResetPassword from "../components/Account/AccountComponents/ResetPassword/ResetPassword";
import Addresses from "../components/Account/AccountComponents/Addresses/Addresses";
import WishList from "../components/Account/AccountComponents/WishList/WishList";
import MyOrders from "../components/Account/AccountComponents/MyOrders/MyOrders";
import MyReviews from "../components/Account/AccountComponents/MyReviews/MyReviews";
import StyleStudio from "../components/Account/AccountComponents/StyleStudio/StyleStudio";
import AddressesDetail from "../components/Account/AccountComponents/AddressesDetail/AddressesDetail";
import OrderDetail from "../components/Account/AccountComponents/OrderDetail/OrderDetail";

function AccountOutlet() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/account/editprofile"
            component={EditProfile}
            exact={true}
          />
          <Route
            path="/account/track-order"
            component={TrackOrder}
            exact={true}
          />
          <Route
            path="/account/reset-password"
            component={ResetPassword}
            exact={true}
          />
          <Route path="/account/addresses" component={Addresses} exact={true} />
          <Route
            path="/account/addresses/address-detail"
            component={AddressesDetail}
            exact={true}
          />
          <Route path="/account/wishlist" component={WishList} exact={true} />
          <Route path="/account/my-orders" component={MyOrders} exact={true} />
          <Route
            path="/account/my-orders/order-detail"
            component={OrderDetail}
            exact={true}
          />
          <Route
            path="/account/my-reviews"
            component={MyReviews}
            exact={true}
          />
          <Route
            path="/account/style-studio"
            component={StyleStudio}
            exact={true}
          />
        </Switch>
      </Router>
    </>
  );
}

export default AccountOutlet;
