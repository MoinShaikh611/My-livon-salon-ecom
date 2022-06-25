import * as React from 'react';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import footerLogo from '../assets/images/footer-logo.png';

class AppFooter extends React.Component {
    render() {
        // const mystyle = {
        //     marginBottom : '500px',
        //   };
        return (
            // style={mystyle}
            <footer className="footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footerbox">
                                {/* <div className="footerbox-wave"></div> */}
                                <div className="footerinner">
                                    <div className="footertop">
                                        <div className="footer-logo">
                                            <img src={footerLogo} alt="Livon" />
                                        </div>
                                        {/* <div className="footer-search">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" />
                                            <button className="btn btn-search">Search</button>
                                        </div>
                                    </form>
                                </div> */}
                                    </div>
                                    <div className="footerbottom">
                                        <ul>
                                            <li>
                                                <NavLink to="/aboutUs">About Us</NavLink>
                                                {/* <a href="#">About Us</a> */}
                                            </li>
                                            <li>
                                                {/* <a href="#">Privacy</a> */}
                                                <NavLink to="/privacyPolicy">Privacy</NavLink>
                                            </li>
                                            <li>
                                                {/* <a href="#">T&C</a> */}
                                                <NavLink to="/termsCondition">T&C</NavLink>
                                            </li>
                                            {/* <li><a href="#">Copyright</a></li> */}
                                            {/* <li><a href="#">Sitemap</a></li> */}
                                        </ul>
                                        <div className="footer-soc-watermark mt-3">
                                            <p className="copyright mr-3">Copyright © 2022 Livon.</p>
                                            <ul className="footer-social">
                                                <li>
                                                    <a target="_blank" href="https://www.facebook.com/LivonIndia/"><i className="fa fa-facebook-f"></i></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://twitter.com/livonserum"><i className="fa fa-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://www.youtube.com/user/LivonSilkyPotion"><i className="fa fa-youtube-play"></i></a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEkUgO8VCtWQAAAAYCSTphQg91K_VGs6qqhR5H72M2M-u7TqQkpYkijTlaQiOoq51jLAkx6cOY1FThy4_Jwqc39xn1iyEeiUx6y25LUK1viVRCY9wjQMiwseGa56UxomkW75-I=&originalReferer=https://www.mylivonmysalon.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmaricolimited%2F
                                           "><i className="fa fa-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank" href="https://www.instagram.com/livon/"><i className="fa fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default AppFooter;
