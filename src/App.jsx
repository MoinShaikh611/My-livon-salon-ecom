import React, { Component } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/animate.css";
import "./assets/css/slick.css";
import "./assets/css/custom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-rangeslider/lib/index.css";
// import './assets/js/custom.js';

import orientationLockScreen from "./assets/images/orientation-lock-screen.jpg";

import RouterOutlet from "./router/RouterOutlet";
import AppNavbar from "./components/AppNavbar";
import AppFooter from "./components/AppFooter";
import "lightgallery.js/dist/css/lightgallery.css";
import { HashRouter as Router, Routes, useLocation } from "react-router-dom";

import "react-image-gallery/styles/css/image-gallery.css";

class App extends Component {
  render() {
    return (
      <div id="App">
        <RouterOutlet />
        <div className="rotate-th">
          <img src={orientationLockScreen} alt="Livon" />
        </div>
        {/* <div className="rotate-th">
          <div className="content">
            <div className="logo">
              <img src="logo.png" alt="Livon" />
            </div>
            <h2>Best View in Portrait Mobile Mode</h2>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
