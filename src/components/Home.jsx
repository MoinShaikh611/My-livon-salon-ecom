import * as React from 'react';
import $ from 'jquery';

import whatwe2 from '../assets/images/whatwe2.png';
import whatarewe from '../assets/images/whatarewe.png';
import homebanner from '../assets/images/home-banner.jpg';
import homebannerMob from '../assets/images/home-banner-mob.jpg';
import looksOne from '../assets/images/looks1.jpg';
import looksTwo from '../assets/images/looks2.jpg';
import looksThree from '../assets/images/looks3.jpg';
import trianglePink from '../assets/images/triangle-pink.png';
import styleTribeTitle from '../assets/images/styletribe-title.png';
import styleTribeBoxOne from '../assets/images/styletribebox1.jpg';
import styleTribeBoxTwo from '../assets/images/styletribebox2.jpg';
import styleTribeBoxThree from '../assets/images/styletribebox3.jpg';

import styleStudioTitle from '../assets/images/stylestudio-title3.png';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Owl Carousel Settings
const options = {
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1.5,
            loop: false,
            margin: 10,
            center: true,
            autoplay: true,
            animateOut: 'fadeOut',
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
};

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            let bgImage = document.querySelector(".ls-home-wave");
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo(
                bgImage,
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",

                },
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

                    ease: "none",
                    //  We want to do that animation on scroll
                    scrollTrigger: {
                        trigger: bgImage,
                        scrub: 1,
                        start: "top center",
                        end: "top center-=400",
                        // duration: 5,
                    },
                }
            );

            let bgImage1 = document.querySelector(".stylestudio-ribbon-wave");
            gsap.registerPlugin(ScrollTrigger);
            gsap.fromTo(
                bgImage1,
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",

                },
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

                    ease: "none",
                    scrollTrigger: {
                        trigger: bgImage1,
                        scrub: 1,
                        start: "top center",
                        end: "top center-=400",
                    },
                }
            );
            ScrollTrigger.refresh();
        }, 500)

    }
    render() {
        return (
            <main>
                <section className="main-banner hide-mobile">
                    <OwlCarousel className='owl-theme' margin={0} items="1"
                        autoplay={true}
                        animateOut="fadeOut"
                        nav={false}
                        dots={false}
                        loop={false}
                    >
                        <div className="item">
                            <div className="banner-outer">
                                <img src={homebanner} alt="Livon" />
                            </div>
                        </div>

                    </OwlCarousel>
                </section>
                <section className="main-banner hide-desktop hide-tabletpro hide-tablet">
                    <OwlCarousel className='owl-theme' margin={0} items="1"
                        autoplay={true}
                        animateOut="fadeOut"
                        nav={false}
                        dots={false}
                        loop={false}
                    >
                        <div className="item">
                            <div className="banner-outer">
                                <img src={homebannerMob} alt="Livon" />
                            </div>
                        </div>

                    </OwlCarousel>
                </section>
                <section className="look-slider">
                    <div className="ls-home-wave"></div>
                    <div className="looks-inner">
                        <OwlCarousel className='owl-theme' {...options}>
                            <div className="item">
                                <div className="card-looks">
                                    <div className="card-topheader">
                                        <h5>QUICK LOOKS</h5>
                                        <img src={trianglePink} className="triangle-shape" alt="Livon" />
                                    </div>
                                    <div className="card-image">
                                        <img src={looksOne} className="looks-img" alt="Livon" />

                                        <div className="card-body">
                                            <div className="cardbody-top">
                                                <div className="">
                                                    <h3 className="font-redrock">Hair Artistry</h3>
                                                </div>
                                                <div className="plusminus-icon">
                                                </div>
                                            </div>
                                            <div className="cardbody-bottom">
                                                <p>Your hair tells us who you are</p>
                                                <a href="#" className="btn btn-knowmore">Know More</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card-looks">
                                    <div className="card-topheader">
                                        <h5>QUICK LOOKS</h5>
                                        <a href="#stylestudiolink">
                                            <img src={trianglePink} className="triangle-shape" alt="Livon" />
                                        </a>
                                    </div>
                                    <div className="card-image">
                                        <img src={looksTwo} className="looks-img" alt="Livon" />

                                        <div className="card-body">
                                            <div className="cardbody-top">
                                                <div className="">
                                                    <h3 className="font-redrock">Style Studio</h3>
                                                </div>
                                                <div className="plusminus-icon">
                                                </div>
                                            </div>
                                            <div className="cardbody-bottom">
                                                <p>We've got a look for you. One that's you</p>
                                                <a href="#stylestudiolink" className="btn btn-knowmore">Know More</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card-looks">
                                    <div className="card-topheader">
                                        <h5>QUICK LOOKS</h5>
                                        <a href="#styletribe">
                                            <img src={trianglePink} className="triangle-shape" alt="Livon" />
                                        </a>
                                    </div>
                                    <div className="card-image">
                                        <img src={looksThree} className="looks-img" alt="Livon" />

                                        <div className="card-body">
                                            <div className="cardbody-top">
                                                <div className="">
                                                    <h3 className="font-redrock">Style Tribe</h3>
                                                </div>
                                                <div className="plusminus-icon">
                                                </div>
                                            </div>
                                            <div className="cardbody-bottom">
                                                <p>Get inspired by stories of style, beauty, fashion and of course, hair!</p>
                                                <a href="#styletribe" className="btn btn-knowmore">Know More</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>

                    </div>
                </section>
                <section className="whatare-we">
                    <div className="container">
                        <div className="row whatewe-top">
                            <div className="col-md-6 col-sm-12">
                                <div className="text-with-plus">
                                    <p className="mb-0 text-white">STYLIST IN A <span className="text-primary">BOTTLE</span> <i
                                        className="fa fa-plus ml-2" aria-hidden="true"></i></p>
                                </div>
                            </div>

                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="whatwe-text">
                                    <img src={whatarewe} alt="Livon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="whatwe-img">
                        <div className="whatweimg-box">
                            <img src={whatwe2} alt="Livon" />
                        </div>
                        <div className="whatweimg-text">
                            <h5 className="whatweimg-title">All your hair wishes might just come true.</h5>

                            <p className="mb-0"><b>Quick hair-dos? Done</b></p>
                            <p className="mb-2">No long lines here. Just a dab of your fave Livon product.</p>

                            <p className="mb-0 hide-mobile"><b>Dazzling, sleek hair? You got it</b></p>
                            <p className="mb-2 hide-mobile">Lock in that moisture for hairstyles that last all day.</p>

                            <p className="mb-0 hide-mobile"><b>Made for your mane? Yep.</b></p>
                            <p className="mb-2 hide-mobile">Every hair type and length will find their perfect match here.</p>
                        </div>

                    </div>
                </section>
                <section className="home-stylestudio" id="stylestudiolink">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="stylestudio-img">
                                    <img src={styleStudioTitle} alt="Livon" />
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-12 col-sm-12"></div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="text-with-plus text-right">
                                    <p className="mb-0 text-white">STYLE <span className="text-primary">STUDIO</span> <i
                                        className="fa fa-plus ml-2" aria-hidden="true"></i></p>
                                </div>
                                <div className="stylestudiobg-content">
                                    <div className="main-title">
                                        <h2>We’ve got a <br />look<span className="text-primary"> for you.</span></h2>
                                    </div>
                                    <p className="mb-2">One that loves your hair.</p>
                                    <p className="mb-2">One that flatters your face.</p>
                                    <p>One that’s you.</p>

                                    {/* <p>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                        Suspendisse vitae tempus felis. </p>
                                    <p><b>Aliquam posuere leo at
                                        pulvinar tincidunt. </b></p> */}


                                    <NavLink className="btn btn-primary" to="/styleStudio">DISCOVER</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="styletribe-top" id="styletribe">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-6 col-sm-12">
                                <div className="text-with-plus">
                                    <p className="mb-0">STYLE <span className="text-primary">TRIBE</span> <i className="fa fa-plus ml-2"
                                        aria-hidden="true"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-5">
                                <div className="styletribe-title">
                                    <img src={styleTribeTitle} alt="Livon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="styletribe-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-12 col-5">
                                <div className="styletribe-content">
                                    <div className="main-title">
                                        <h2>All things <span className="text-primary">hair</span>, <span
                                            className="text-primary">beauty</span>, <span className="text-primary">fashion</span> and
                                            the <span className="text-primary">culture</span> of the North-East.</h2>
                                    </div>

                                    <p>Get insider info on Korean street fashion + Glow up with popular hair trends of your fave
                                        K-pop & K-drama icons! </p>

                                    <NavLink className="btn btn-primary" to="/styleTribe">DISCOVER</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="styletribebox1">
                        <img src={styleTribeBoxOne} alt="Livon" />
                        <div className="styletribebox1-desc">
                            <h3 className="font-redrock">Up Your Summer Hair Game</h3>
                            <span>APRIL 2022</span><br />
                            {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat.</p> */}
                            <a href="https://mylivonmysalon.com/livon/April/" target="_blank" className="btn btn-white">Read More</a>
                        </div>
                    </div>
                    <div className="styletribebox2">
                        <img src={styleTribeBoxTwo} alt="Livon" />
                    </div>
                    <div className="styletribebox3">
                        <img src={styleTribeBoxThree} alt="Livon" />
                    </div>
                    <div className="stylestudio-ribbon-wave"></div>

                </section>

            </main>
        );
    }
}

export default Home;
