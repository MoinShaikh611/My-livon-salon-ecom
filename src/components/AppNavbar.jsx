import * as React from 'react';
import $ from 'jquery';

import logo from '../assets/images/logo.png';
import logoWhite from '../assets/images/logo-white.png';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import { isNullUndefinedOrBlank, isEmptyObjectOrNullUndefiend } from '../utility/Helper';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AppNavbar() {
	// const pathname = window.location.pathname;
	const { pathname } = useLocation();
	const history = useHistory();


	React.useEffect(() => {
		$('.main-header .navbar-toggler').on('click', function () {
			$(this).toggleClass('navbar-mobile-toggler');
			$('.main-header').toggleClass('mobile-header');
			$('body').toggleClass('bodymenuopen');
			// $('.mobile-menu').toggleClass('show');
		});

		$(document).on('click', 'main', function (e) {
			e.stopPropagation();
			// if (!$(e.target).is('.myBackground'))
			$('body').removeClass('bodymenuopen');
			$('.main-header').removeClass('mobile-header');
			$('.main-header .navbar-toggler').removeClass('navbar-mobile-toggler');
			$('.main-header .navbar-collapse').removeClass('show');
		});

		$('#logout,#logoutmobile').on('click', function () {
			sessionStorage.clear();
			history.push("/login");
		});

		$('.main-header .navbar-nav  li a').on('click', function () {
			$('.main-header .navbar-collapse').removeClass('show');
			$('.main-header .navbar-toggler').toggleClass('navbar-mobile-toggler');
			$('.main-header').toggleClass('mobile-header');
		});

		$(window).scroll(function () {
			if ($(window).scrollTop() > 400) {
				$("#sidemenu-outer").addClass('fixed-sidebar');
				// jQuery("#top").fadeIn(500);
			} else {
				$("#sidemenu-outer").removeClass('fixed-sidebar');
				// $("#top").fadeOut(500);
			}
		});
		$('.sidemenu li a').on('click', function () {
			$('.sidemenu li a.active').removeClass('active');
			$(this).addClass('active');
		});

	}, []);
	React.useEffect(() => {
		// let bgImage = document.querySelector(".ls-home-wave");
		// gsap.registerPlugin(ScrollTrigger);

		// gsap.fromTo(
		// 	bgImage,
		// 	{
		// 		clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",

		// 	},
		// 	{
		// 		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

		// 		ease: "none",
		// 		//  We want to do that animation on scroll
		// 		scrollTrigger: {
		// 			trigger: bgImage,
		// 			scrub: 1,
		// 			start: "top center",
		// 			end: "top center-=400",
		// 			// duration: 5,
		// 		},
		// 	}
		// );

		// let bgImage1 = document.querySelector(".stylestudio-ribbon-wave");
		// gsap.registerPlugin(ScrollTrigger);
		// gsap.fromTo(
		// 	bgImage1,
		// 	{
		// 		clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",

		// 	},
		// 	{
		// 		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

		// 		ease: "none",
		// 		scrollTrigger: {
		// 			trigger: bgImage1,
		// 			scrub: 1,
		// 			start: "top center",
		// 			end: "top center-=400",
		// 		},
		// 	}
		// );
		// ScrollTrigger.refresh();
		document.body.classList.remove("bodymenuopen");
	}, [pathname])

	return (
		< header className="main-header" >
			<nav className="navbar navbar-expand-lg">
				<div className="container">

					<NavLink className="navbar-brand nb-pink" to="/">
						<img src={logo} alt="Livon" />
					</NavLink>
					<NavLink className="navbar-brand nb-white" to="/">
						<img src={logoWhite} alt="Livon" />
					</NavLink>
					<button className="navbar-toggler" id="togglemenu" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
						aria-label="Toggle navigation">
						<span></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className={`nav-item ${pathname === "/" && 'active'}`}>
								<NavLink className="nav-link" to="/">Home</NavLink>

							</li>
							<li className={`nav-item ${pathname === "/product" && 'active'}`}>
								<NavLink className="nav-link" to="/product">Products</NavLink>
							</li>
							<li className={`nav-item ${pathname === "/styleTribe" && 'active'}`}>
								<NavLink className="nav-link" to="/styleTribe">Tribe</NavLink>

							</li>
							<li className={`nav-item ${pathname === "/styleStudio" && 'active'}`}>
								<NavLink className="nav-link" to="/styleStudio">Studio</NavLink>
							</li>
						</ul>
						<ul className="navbar-nav navbar-custom ml-auto d-none">
							{!isNullUndefinedOrBlank(JSON.parse(sessionStorage.getItem('userSessionData'))) ?

								<li className="nav-item">
									<NavLink className="nav-link" to="/login" id="logout">
										Logout
									</NavLink>
								</li>
								:
								<li className="nav-item">
									<NavLink className="nav-link" to="/login">
										Login
									</NavLink>
								</li>
							}

						</ul>
					</div>
					{/* <div className="mobile-menu">
						<ul className="navbar-nav mr-auto">
							<li className={`nav-item ${pathname === "/" && 'active'}`}>
								<NavLink className="nav-link" to="/">Home</NavLink>

							</li>
							<li className={`nav-item ${pathname === "/product" && 'active'}`}>
								<NavLink className="nav-link" to="/product">Products</NavLink>
							</li>
							<li className={`nav-item ${pathname === "/styleTribe" && 'active'}`}>
								<NavLink className="nav-link" to="/styleTribe">Tribe</NavLink>

							</li>
							<li className={`nav-item ${pathname === "/styleStudio" && 'active'}`}>
								<NavLink className="nav-link" to="/styleStudio">Studio</NavLink>
							</li>
						</ul>
						 <ul className="navbar-nav navbar-custom ml-auto">
							{!isNullUndefinedOrBlank(JSON.parse(sessionStorage.getItem('userSessionData'))) ?
                                                    
                            <li className="nav-item">
								<NavLink className="nav-link" to="/login" id="logoutmobile">
									Logout
								</NavLink>
							</li>
                            :
                            <li className="nav-item">
								<NavLink className="nav-link" to="/login">
									Login
								</NavLink>
							</li>
                         }
						</ul> 
					</div> */}
				</div>
			</nav>
		</header >
	)
}



export default AppNavbar;
