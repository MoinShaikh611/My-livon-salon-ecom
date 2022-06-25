import * as React from 'react';

import styletribeBanner from '../assets/images/style-tribe-banner.jpg';
import styleTribeTitleTwo from '../assets/images/styletribe-title2.png';
import trianglePink from '../assets/images/triangle-pink.png';
import journalsOne from '../assets/images/journals1.jpg';
import styleTribeMobile from '../assets/images/styletribebg-mobile.png';

import animationVideo from '../assets/images/video/animation.webm';
import animationVideo1 from '../assets/images/video/animation.mp4';

import Slider from "react-slick";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import antiFreeze1 from "../assets/images/anti-frizz/img1.jpg";
import antiFreeze2 from "../assets/images/anti-frizz/img2.jpg";
import antiFreeze3 from "../assets/images/anti-frizz/img3.jpg";

import Shape from 'react-clip-path';

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

var prodGalleryFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,

    responsive: [
        {
            breakpoint: 480,
            settings: {
                autoplay: true,
            }
        }
    ]
};

const productJson = [
    {
        productImages: [antiFreeze1, antiFreeze2, antiFreeze3]
    },
]

class Animation extends React.Component {

    render() {
        return (
            <main>
                <section className="main-banner">
                    <OwlCarousel className='owl-theme' margin={0} items="1"
                        autoplay={true}
                        animateOut="fadeOut"
                        nav={false}
                        dots={false}
                        loop={false}
                    >
                        <div className="item">
                            <div className="banner-outer">
                                <img src={styletribeBanner} alt="Livon" />
                            </div>
                        </div>

                    </OwlCarousel>
                </section>
                <section className="look-slider ls-styletribe">
                    <div className="looks-inner">
                        <OwlCarousel className='owl-theme' {...options}>
                            <div className="item">
                                <div className="card-looks">
                                    <div className="card-topheader">
                                        <h5>JOURNALS</h5>
                                        <a href="#tribeportfolio">
                                            <img src={trianglePink} className="triangle-shape" alt="Livon" />
                                        </a>
                                    </div>
                                    <div className="card-image">
                                        <img src={journalsOne} className="looks-img" alt="Livon" />

                                        <div className="card-body">
                                            <div className="cardbody-top">
                                                <div className="">
                                                    <h3 className="font-redrock">The Style Tribe</h3>
                                                </div>
                                                <div className="plusminus-icon">
                                                </div>
                                            </div>
                                            <div className="cardbody-bottom">
                                                <p>All things hair, beauty, fashion and the culture of the North-East.</p>
                                                <a href="#tribeportfolio" className="btn btn-knowmore">Know More</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>

                    <div className="video-animation">
                        <video autoPlay width="100%" id="video">
                            <source src={animationVideo} type="video/webm" />
                            <source src={animationVideo1} type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    </div>
                </section>

                {/* Styletribe for Desktop */}
                <section className="styletribe hide-mobile">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="text-with-plus text-right">
                                    <p className="mb-0 text-white">STYLE <span className="text-primary">TRIBE</span> <i
                                        className="fa fa-plus ml-2" aria-hidden="true"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="styletribe-img">
                                    <img src={styleTribeTitleTwo} alt="Livon" />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-12 col-sm-12"></div>
                            <div className="col-lg-4 col-md-6 col-sm-12">

                                <div className="styletribebg-content">
                                    <div className="main-title">
                                        <h2>Get inspired by stories of <span className="text-primary">style</span>, <span
                                            className="text-primary">beauty</span>, <span className="text-primary">fashion </span>
                                            and of course, <span className="text-primary">hair</span>!</h2>
                                    </div>

                                    <p>Set hair goals with the latest trends. And keep up with the culture of the North-East. Click
                                        on our monthly e-magazines.</p>
                                    <p><b>Follow us for more.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Styletribe for Mobile */}
                <section className="styletribe-mobile hide-desktop hide-tabletpro hide-tablet">
                    <img src={styleTribeMobile} alt="Livon" />
                </section>

                <section className="product-details">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="product-gallery">
                                    <Slider {...prodGalleryFor} className="prodgallery-for">
                                        {productJson[0].productImages.map((item, index) => (
                                            <>
                                                <a key={`gallerybox${index}`} className="gallerybox">
                                                    <img src={item} alt="Livon" />
                                                </a>
                                            </>
                                        ))}
                                        {/* <a className="gallerybox">
                                            <img src={antiFreeze1} alt="Livon" />
                                        </a>
                                        <a className="gallerybox">
                                            <img src={antiFreeze2} alt="Livon" />
                                        </a>
                                        <a className="gallerybox">
                                            <img src={antiFreeze3} alt="Livon" />
                                        </a> */}
                                    </Slider>

                                    {/* <ModalGateway>
                                        {this.state.viewerIsOpen ? (
                                            <Modal onClose={() => {
                                                this.setState({
                                                    nav1: this.slider1,
                                                    nav2: this.slider2,
                                                    selectedProductName: this.state.selectedProductName,
                                                    currentImage: 0,
                                                    viewerIsOpen: false
                                                })
                                            }}>
                                                <Carousel
                                                    currentIndex={this.state.currentImage}
                                                    views={


                                                        productJson[productJson.findIndex(val => val.type === this.state.selectedProductName)].productImages.map(x => {
                                                            return {
                                                                src: x,
                                                                width: 4,
                                                                height: 3
                                                            }
                                                        })
                                                    }
                                                />
                                            </Modal>
                                        ) : null}
                                    </ModalGateway> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="mb-5">

                    <Shape
                        name="Square"
                        id="circle-shape-id"
                        width="300px"
                        height="300px"
                        showLabel={true}
                        showShadow={true}
                    />

                </section> */}
            </main>
        )
    }
}

export default Animation