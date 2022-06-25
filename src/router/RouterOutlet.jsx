import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Product from "../components/Product";
import StyleTribe from "../components/StyleTribe";
import Home from "../components/Home";
import Error404 from "../components/Error404";
import { HashRouter as Router, Routes, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { AppNavbar } from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";
import StyleStudio from "../components/StyleStudio";
import AboutUs from "../components/AboutUs";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsCondition from "../components/termsCondition";
import Animation from "../components/Animation";
import LightGallery from "../components/lightGallery";
import Dashboard from "../components/dashboard";
import ScrollToTop from "../common/scrollTop";
import Login from "../components/Auth/Login/Login";
import Header from "../common/header/Header";
import SignUp from "../components/Auth/SignUp/SignUp";
import Account from "../components/Account/Account";
import EditProfile from "../components/Account/AccountComponents/EditProfile/EditProfile";
import { Redirect } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import Wishlist from "../components/Wishlist/Wishlist";
import Contact from "../components/Contact/Contact";

export function RouterOutlet() {
  return (
    <Router>
      <ScrollToTop />
      {/* <Loader/> */}
      <AppNavbar />
      {/* <Header></Header> */}
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/product" component={Product} exact={true} />
        <Route path="/styleTribe" component={StyleTribe} exact={true} />
        <Route path="/styleStudio" component={StyleStudio} exact={true} />
        <Route path="/aboutUs" component={AboutUs} exact={true} />
        <Route path="/privacyPolicy" component={PrivacyPolicy} exact={true} />
        <Route path="/termsCondition" component={TermsCondition} exact={true} />
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/animation" component={Animation} exact={true} />
        <Route path="/lightGallery" component={LightGallery} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/SignUp" component={SignUp} exact={true} />
        <Route path={"/cart"} component={Cart} exact={true} />
        <Route path={"/checkout"} component={Checkout} exact={true} />
        <Route path={"/wishlist"} component={Wishlist} exact={true} />
        <Route path={"/contact"} component={Contact} exact={true} />
        <Route path={"/account"} component={Account} />

        <Route component={Error404} />
      </Switch>
      <AppFooter />
    </Router>
  );
}

export default RouterOutlet;
