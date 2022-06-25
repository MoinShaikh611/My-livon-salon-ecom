import React, { useState, useCallback } from "react";
import $ from "jquery";

import productBanner from "../assets/images/products-banner.jpg";
import productBannerMob from "../assets/images/products-banner-mob.jpg";
import trianglePink from "../assets/images/triangle-pink.png";
import productsOne from "../assets/images/products-s1.jpg";
import productsTwo from "../assets/images/products-s2.jpg";
import theCollection from "../assets/images/the-collection.png";
import theCollectionBanner from "../assets/images/the-collection.jpg";
import theCollectiontext from "../assets/images/the-collection-text.png";
import pickYourLookTitle from "../assets/images/pickyour-look-title.png";
import videoPlayIcon from "../assets/images/play-icon.png";
import video1 from "../assets/images/festive-bun.jpg";
import video2 from "../assets/images/headband-braid.jpg";
import video3 from "../assets/images/boho-braided.jpg";
import video4 from "../assets/images/braided-bun.jpg";
import video5 from "../assets/images/knot.jpg";
import video6 from "../assets/images/curls.jpg";
import video7 from "../assets/images/cocktail-party.jpg";
import video8 from "../assets/images/messy-bun.jpg";
import video9 from "../assets/images/half-topknot-bun.jpg";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";

import antiFreeze1 from "../assets/images/anti-frizz/img1.jpg";
import antiFreeze2 from "../assets/images/anti-frizz/img2.jpg";
import antiFreeze3 from "../assets/images/anti-frizz/img3.jpg";

import shakeSpray1 from "../assets/images/shake-spray/img1.jpg";
import shakeSpray2 from "../assets/images/shake-spray/img2.jpg";
import shakeSpray3 from "../assets/images/shake-spray/img3.jpg";

import roughHair1 from "../assets/images/rough-hair/img1.jpg";
import roughHair2 from "../assets/images/rough-hair/img2.jpg";
import roughHair3 from "../assets/images/rough-hair/img3.jpg";

import heatSheild1 from "../assets/images/heat-sheild/img1.jpg";
import heatSheild2 from "../assets/images/heat-sheild/img2.jpg";
import heatSheild3 from "../assets/images/heat-sheild/img3.jpg";

import superStyler1 from "../assets/images/super-styler/img1.jpg";
import superStyler2 from "../assets/images/super-styler/img2.jpg";
import superStyler3 from "../assets/images/super-styler/img3.jpg";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";
import ImageGallery from "react-image-gallery";
import Slider from "react-slick";

import Carousel, { Modal, ModalGateway } from "react-images";

// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

// import { Lightbox } from 'react-lightbox-pack'; // <--- Importing LightBox Pack
// import "react-lightbox-pack/dist/index.css";

//Owl Carousel Settings

var slickSlidersettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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
      },
    },
  ],
};

var prodGalleryNav = {
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: false,
      },
    },
  ],
};

var summarylistSlider = {
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: false,
  infinite: false,
  centerPadding: "10px",
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "10px",
      },
    },
  ],
};

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
      animateOut: "fadeOut",
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

// const looksVideoSlider = {
//   loop: true,
//   autoplay: true,
//   animateOut: 'fadeOut',
//   items: 2,
//   margin: 20,
//   nav: false,
//   dots: true,
// };

var looksVideoSlider = {
  infinite: false,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  arrows: false,
  dots: true,
  fade: true,
  // adaptiveHeight:true,
};

const PhotoItem = (item) => <div></div>;
const videoJson = [
  {
    videoUrl: "https://www.youtube.com/watch?v=-yl61pCnEwY",
    iconUrl: video1,
    title:
      "Accessorize Your Festive Bun Hairstyle ft. Jaspreet Kaur Kalsi | Festive Hairstyle Tutorial | Livon",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=hKQO-S6qEdk",
    iconUrl: video2,
    title: "Headband Braid by Sonal Agrawal",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=DvMG84Eh3yo",
    iconUrl: video3,
    title: "Boho Braided Hairstyle by Esha Shetty",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=BtUCB7I6znI",
    iconUrl: video4,
    title: "Sonam Kapoor's Braided Bun Hairstyle by Hiral Bhatia",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=PGiGAD551QY",
    iconUrl: video5,
    title:
      "Quick And Easy-To-Do Top Knot Hairstyle ft Ashima Makhija | Celebrity Hairstyle Tutorial | Livon",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=fMwuz-zsQyg",
    iconUrl: video6,
    title:
      "Quick And Easy Glamourous Curls For A Wedding Party | Wedding Hairstyles | Livon #Shorts",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=sa61eRR4upc",
    iconUrl: video7,
    title:
      "Get The Tiara Look With This Easy-To-Do Cocktail Party Hairstyle |Party Hairstyle Tutorials | Livon",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=yF_iLmf00AA",
    iconUrl: video8,
    title:
      "Quick And Effortless Messy Bun Hairstyle Ft. Esha Shetty | Everyday Hairstyles | Livon #Shorts",
  },
  {
    videoUrl: "https://www.youtube.com/watch?v=6aB0eIopi9w",
    iconUrl: video9,
    title:
      "Simple And Quick Half Top Knot Bun Hairstyle | Everyday Bun Haistyles | Livon #Shorts",
  },
];

const imagesNew = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3,
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3,
  },
];

// const productTypeList = [
//   { name: 'ANTI FRIZZ', btnColor: 'btn-antifrizz' },
//   { name: 'ROUGH HAIR', btnColor: 'btn-roughhair' },
//   { name: 'HEAT SHIELD', btnColor: 'btn-heatshield' },
//   { name: 'SHAKE & SPRAY', btnColor: 'btn-shakespray' },
//   { name: 'SUPER STYLER', btnColor: 'btn-superstyler' },
// ]

const productTypeList = [
  { name: "All Hair Types", btnColor: "btn-antifrizz" },
  { name: "Rough & Dry Hair", btnColor: "btn-roughhair" },
  { name: "Heat Treated Hair", btnColor: "btn-heatshield" },
  { name: "On-the-Go Hair", btnColor: "btn-shakespray" },
  { name: "Straight Hair", btnColor: "btn-superstyler" },
];

const productJson = [
  {
    type: "All Hair Types",
    title: "ANTI FRIZZ SERUM FOR ALL HAIR TYPES",
    price: "225.00",
    variants: "100 ML",
    buyNowLink:
      "https://www.nykaa.com/livon-serum/p/28661?productId=28661&skuId=28658&pps=7",
    description: (
      <>
        <p>
          <b>Why pick Livon?</b>
        </p>
        <p>
          <b>Drops the frizz</b>
        </p>
        <p>Detangle & tame your mane!</p>
        <p>
          <b>Levels up your hairstyle</b>
        </p>
        <p>Your hair gets a smoothness boost for easy styling.</p>
        <p>
          <b>Locks in moisture</b>
        </p>
        <p>Moroccan Argan Oil works like a charm </p>
        <p>
          <b>Glams and Protects</b>
        </p>
        <p>Gives a glossy boost and protects from damage!</p>
        <p>
          <b>Made for your hair type</b>
        </p>
        <p>Works to keep your precious locks lookin’ super fab</p>
        <p>
          <b>How to use:</b>
        </p>
        <p>
          Apply Livon Serum before styling to hydrate your hair. Your mane is
          now easy to style.
        </p>
        <p>Use a little more after styling to tame flyaways.</p>
        <p>
          <b>The steps:</b>
        </p>
        <p>Divide your slightly damp hair into parts.</p>
        <p>
          Pump 2-3 coin-sized drops of the serum onto your palm & spread it
          evenly between your fingers.
        </p>
        <p>
          Run your fingers through your hair. Make sure the serum is evenly
          applied.
        </p>
        <p>Style your hair pretty!</p>
      </>
    ),
    productImages: [
      {
        original: antiFreeze1,
        thumbnail: antiFreeze1,
      },
      {
        original: antiFreeze2,
        thumbnail: antiFreeze2,
      },
      {
        original: antiFreeze3,
        thumbnail: antiFreeze3,
      },
    ],
  },

  {
    type: "Rough & Dry Hair",
    title: "ANTI FRIZZ SERUM FOR ROUGH & DRY HAIR",
    price: "243.00",
    variants: "100 ML",
    buyNowLink:
      "https://www.nykaa.com/livon-serum-for-dry-unruly-hair-100ml/p/355623?productId=355623&pps=9",
    description: (
      <>
        <p>
          <b>Why pick Anti-Frizz for Rough & Dry Hair?</b>
        </p>
        <p>
          <b>Keeps the volume, not frizz</b>
        </p>
        <p>Goodbye out of control hair.</p>
        <p>
          <b>Smooths dry, rough locks</b>
        </p>
        <p>Only salon smooth locks here.</p>
        <p>
          <b>Levels up your hairstyle</b>
        </p>
        <p>Strands that become a dream to style.</p>
        <p>
          <b>Locks in moisture</b>
        </p>
        <p>Moroccan Argan Oil works like a charm</p>
        <p>
          <b>How to use:</b>
        </p>
        <p>Apply Livon serum to your hair before styling to infuse moisture.</p>
        <p>Use a little more after styling for a gloss boost.</p>
        <p>
          <b>The steps:</b>
        </p>
        <p>Divide your slightly damp hair into parts.</p>
        <p>
          Pump 2-3 coin-sized drops of the serum onto your palm & spread it
          evenly between your fingers.
        </p>
        <p>
          Run your fingers through your hair. Make sure the serum is evenly
          applied.
        </p>
        <p>Style your hair pretty!</p>
      </>
    ),
    productImages: [
      {
        original: roughHair1,
        thumbnail: roughHair1,
      },
      {
        original: roughHair2,
        thumbnail: roughHair2,
      },
      {
        original: roughHair3,
        thumbnail: roughHair3,
      },
    ],
  },
  {
    type: "Heat Treated Hair",
    title: "DAMAGE PROTECT SERUM",
    price: "300.00",
    variants: "100 ML",
    buyNowLink:
      "https://www.nykaa.com/livon-heat-protect-serum-100ml/p/727521?productId=727521&pps=11",
    description: (
      <>
        <p>
          <b>Why pick Damage Protect?</b>
        </p>
        <p>
          <b>Turns up the protection</b>
        </p>
        <p>Goodbye heat damage</p>
        <p>
          <b>Protects your mane</b>
        </p>
        <p>Reduces breakage in styling</p>
        <p>
          <b>Levels up your hairstyle</b>
        </p>
        <p>The perfect base for any style</p>
        <p>
          <b>Stays light, all day</b>
        </p>
        <p>No clingy or sticky residue</p>
        <p>
          <b>How to use:</b>
        </p>
        <p>
          Use Livon spray serum on dry hair before styling to protect it from
          damage.
        </p>
        <p>Spray a little more after styling to tame flyaways.</p>
        <p>
          <b>The steps:</b>
        </p>
        <p>Divide your hair into parts.</p>
        <p>Shake the bottle well and spray generously.</p>
        <p>
          Use your fingers to comb through hair & spread the serum from root to
          tip.
        </p>
        <p>Style your hair using a hot iron or blow dryer.</p>
      </>
    ),
    productImages: [
      {
        original: heatSheild1,
        thumbnail: heatSheild1,
      },
      {
        original: heatSheild2,
        thumbnail: heatSheild2,
      },
      {
        original: heatSheild3,
        thumbnail: heatSheild3,
      },
    ],
  },
  {
    type: "On-the-Go Hair",
    title: "SHAKE & SPRAY SERUM",
    price: "249.00",
    variants: "100 ML",
    buyNowLink:
      "https://www.nykaa.com/livon-shake-spray-hair-serum-100ml/p/370991?productId=370991&pps=3",
    description: (
      <>
        <p>
          <b>Why pick Livon Spray Serum?</b>
        </p>
        <p>
          <b>Perfect Travel Partner</b>
        </p>
        <p>Super fab hair anytime, anywhere</p>
        <p>
          <b>On point hair, on-the-go</b>
        </p>
        <p>Eliminate frizz & detangle & tame your mane on-the-go</p>
        <p>
          <b>Levels up your hairstyle</b>
        </p>
        <p>Perfect your look with just a spray!</p>
        <p>
          <b>Just Shake, Spray, Dazzle!</b>
        </p>
        <p>Spray some gloss on those manes.</p>
        <p>
          <b>Locks in moisture</b>
        </p>
        <p>Give your locks a shot of Vitamin B </p>
        <p>
          <b>How to use:</b>
        </p>
        <p>
          Use Livon Shake & Spray Serum before styling to hydrate your hair.
          Spray it on after styling for a salon finish.
        </p>
        <p>Carry it along to refresh your style on-the-go.</p>
        <p>
          <b>The steps:</b>
        </p>
        <p>Shake the bottle well till it turns completely pink.</p>
        <p>
          Start with 3-4 sprays on either side of your hair. If you need more,
          spray more.
        </p>
        <p>
          Run your fingers through your hair. Your locks are now easy to style.
        </p>
      </>
    ),
    productImages: [
      {
        original: shakeSpray1,
        thumbnail: shakeSpray1,
      },
      {
        original: shakeSpray2,
        thumbnail: shakeSpray2,
      },
      {
        original: shakeSpray3,
        thumbnail: shakeSpray3,
      },
    ],
  },
  {
    type: "Straight Hair",
    title: "SUPER STYLER SERUM FOR STRAIGHTER HAIR",
    price: "300.00",
    variants: "100 ML",
    description: (
      <>
        <p>
          <b>Why pick Super Styler Serum for Straighter Hair?</b>
        </p>
        <p>
          <b>12 hour straightness</b>
        </p>
        <p>Your hair stays straight all day</p>
        <p>
          <b>Straightens in a snap</b>
        </p>
        <p>Cuts your styling time</p>
        <p>
          <b>Turns up the protection</b>
        </p>
        <p>Goodbye heat damage</p>
        <p>
          <b>Keeps your hair on your head</b>
        </p>
        <p>Reduces breakage in styling</p>
        <p>
          <b>How to use:</b>
        </p>
        <p>Use Livon Spray Serum on dry hair. No need to shampoo before use.</p>
        <p>
          <b>The steps:</b>
        </p>
        <p>Divide your hair into parts. </p>
        <p>Shake the bottle well and spray generously.</p>
        <p>
          Use your fingers to comb through your hair & spread the serum from
          root to tip.
        </p>
        <p>Allow your hair to dry normally or use a blow dryer.</p>
        <p>Once dry, style your hair using a hot iron. And you’re done!</p>
      </>
    ),
    buyNowLink:
      "https://www.nykaa.com/livon-hair-straightening-serum-100ml/p/727522?productId=727522&pps=8",
    productImages: [
      {
        original: superStyler1,
        thumbnail: superStyler1,
      },
      {
        original: superStyler2,
        thumbnail: superStyler2,
      },
      {
        original: superStyler3,
        thumbnail: superStyler3,
      },
    ],
  },
];

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      selectedProductName: "All Hair Types",
      photoIndex: 0,
      isOpen: false,
      currentImage: 0,
      viewerIsOpen: false,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      selectedProductName: "All Hair Types",
      currentImage: 0,
      viewerIsOpen: false,
    });

    $(".image-gallery-icon").on("click", function () {
      if ($(".image-gallery-content").hasClass("fullscreen")) {
        $("body").removeClass("product-popup");
      } else {
        $("body").addClass("product-popup");
      }
    });
  }

  // if ($('.product-gallery .image-gallery-content').hasClass('fullscreen')){
  //   $('body').toggleClass('add');
  // }

  render() {
    const { photoIndex, isOpen } = this.state;

    // const [toggle, setToggle] = React.useState(false);
    // const [sIndex, setSIndex] = React.useState(0);

    // const lightBoxHandler = (state, sIndex) => {
    //   setToggle(state);
    //   setSIndex(sIndex);
    // };

    return (
      <main>
        <section className="main-banner hide-mobile">
          <OwlCarousel
            className="owl-theme"
            margin={0}
            items="1"
            autoplay={true}
            animateOut="fadeOut"
            nav={false}
            dots={false}
            loop={false}
          >
            <div className="item">
              <div className="banner-outer">
                <img src={productBanner} alt="Livon" />
              </div>
            </div>
          </OwlCarousel>
        </section>
        <section className="main-banner hide-desktop hide-tabletpro hide-tablet">
          <OwlCarousel
            className="owl-theme"
            margin={0}
            items="1"
            autoplay={true}
            animateOut="fadeOut"
            nav={false}
            dots={false}
            loop={false}
          >
            <div className="item">
              <div className="banner-outer">
                <img src={productBannerMob} alt="Livon" />
              </div>
            </div>
          </OwlCarousel>
        </section>

        <section className="look-slider ls-products">
          <div className="looks-inner">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className="card-looks">
                  <div className="card-topheader">
                    <h5>VIDEOS</h5>
                    <a href="#pickyourlook">
                      <img
                        src={trianglePink}
                        className="triangle-shape"
                        alt="Livon"
                      />
                    </a>
                  </div>
                  <div className="card-image">
                    <img src={productsOne} className="looks-img" alt="Livon" />

                    <div className="card-body">
                      <div className="cardbody-top">
                        <div className="">
                          <h3 className="font-redrock">Tutorials</h3>
                        </div>
                        <div className="plusminus-icon"></div>
                      </div>
                      <div className="cardbody-bottom">
                        <a href="#pickyourlook" className="btn btn-knowmore">
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card-looks">
                  <div className="card-topheader">
                    <h5>VIDEOS</h5>
                    <a href="#productdetails">
                      <img
                        src={trianglePink}
                        className="triangle-shape"
                        alt="Livon"
                      />
                    </a>
                  </div>
                  <div className="card-image">
                    <img src={productsTwo} className="looks-img" alt="Livon" />

                    <div className="card-body">
                      <div className="cardbody-top">
                        <div className="">
                          <h3 className="font-redrock">Products</h3>
                        </div>
                        <div className="plusminus-icon"></div>
                      </div>
                      <div className="cardbody-bottom">
                        <a href="#productdetails" className="btn btn-knowmore">
                          Know More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </section>

        <section className="pickyour-look" id="pickyourlook">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="pickyour-look-title">
                  <img src={pickYourLookTitle} alt="Livon" />
                </div>
                <div className="pickyour-content">
                  {/* <p>Grab your hairbrushes and get styling!</p> */}
                  <p>
                    We’re here to take your hair goals up a notch. Think glossy
                    updos and festive curls because this is your one-stop-shop
                    for the hottest hairstyles.
                  </p>
                  <a
                    href="https://www.youtube.com/user/LivonSilkyPotion/playlists"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    DISCOVER
                  </a>
                </div>
              </div>

              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="text-with-plus text-right">
                      <p className="mb-0">
                        HAIR STYLING{" "}
                        <span className="text-primary">TUTORIALS</span>{" "}
                        <i className="fa fa-plus ml-2" aria-hidden="true"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="custom-scrollbar looks-grid">
                  <div className="row looksvideo hide-mobile">
                    <LightgalleryProvider plugins={["lg-video.js"]}>
                      {videoJson.map((item, index) => (
                        <a
                          key={`video${index}`}
                          data-lg-size="1280-720"
                          data-src={item.videoUrl}
                          data-poster={item.iconUrl}
                          data-sub-html={<h4>{item.title}</h4>}
                          className="col-lg-4 col-md-6 col-6"
                        >
                          <LightgalleryItem group="any" src={item.videoUrl}>
                            <div className="card-picklook">
                              <div className="card-image">
                                <img src={item.iconUrl} alt="Livon" />
                                <div className="card-icon">
                                  <button className="btn btn-play">
                                    <img src={videoPlayIcon} alt="Livon" />
                                  </button>
                                </div>
                              </div>
                              <div className="card-body">
                                <h4>{item.title}</h4>
                              </div>
                            </div>
                          </LightgalleryItem>
                        </a>
                      ))}
                    </LightgalleryProvider>
                  </div>

                  <div className="row looksvideo hide-desktop hide-tabletpro hide-tablet">
                    <div className="col-md-12 col-sm-12">
                      <Slider {...looksVideoSlider} className="kp-slick-dots">
                        {videoJson.map((item, index) => (
                          <a
                            key={`video${index}`}
                            data-lg-size="1280-720"
                            data-src={item.videoUrl}
                            data-poster={item.iconUrl}
                            data-sub-html={<h4>{item.title}</h4>}
                            className="slide-item"
                          >
                            <LightgalleryProvider plugins={["lg-video.js"]}>
                              <LightgalleryItem group="any" src={item.videoUrl}>
                                <div className="card-picklook">
                                  <div className="card-image">
                                    <img src={item.iconUrl} alt="Livon" />
                                    <div className="card-icon">
                                      <button className="btn btn-play">
                                        <img src={videoPlayIcon} alt="Livon" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <h4>{item.title}</h4>
                                  </div>
                                </div>
                              </LightgalleryItem>
                            </LightgalleryProvider>
                          </a>
                        ))}
                      </Slider>

                      {/* <OwlCarousel className='owl-theme kp-owl-dots' {...looksVideoSlider}>
                        <LightgalleryProvider plugins={["lg-video.js"]}>
                          {videoJson.map((item, index) => (
                            <a key={`video${index}`}
                              data-lg-size="1280-720"
                              data-src={item.videoUrl}
                              data-poster={item.iconUrl}
                              data-sub-html={<h4>{item.title}</h4>}
                              className="item">
                              <LightgalleryItem group="any" src={item.videoUrl}>

                                <div className="card-picklook">
                                  <div className="card-image">
                                    <img src={item.iconUrl} alt="Livon" />
                                    <div className="card-icon">
                                      <button className="btn btn-play"><img src={videoPlayIcon}
                                        alt="Livon" /></button>
                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <h4>{item.title}</h4>
                                  </div>
                                </div>
                              </LightgalleryItem>
                            </a>
                          ))}
                        </LightgalleryProvider>
                      </OwlCarousel> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="the-collection d-none">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="text-with-plus">
                  <p className="mb-0 text-black">PRODUCT <span className="text-primary">CATEGORIES</span> <i
                    className="fa fa-plus ml-2 text-white" aria-hidden="true"></i></p>
                </div>
              </div>
            </div>
            <div className="row align-items-center collection-outer">
              <div className="col-lg-7 col-md-6 col-sm-12">
                <div className="collection-img">
                  <img src={theCollection} alt="Livon" />
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="collection-content">
                  <div className="main-title">
                    <h2>Your stylist <br />in a <span className="text-primary">bottle</span></h2>
                  </div>

                  <p>Eliminates frizz | Brings Salon Smoothness |Infuses Moisture | Eases Styling</p>
                  <p><b>Next stop:</b> Easy styling made possible with Livon’s range.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="thecollection-mobile d-none">
          <img src={theCollectionBanner} alt="Livon" />
          <div className="text-with-plus">
            <p className="mb-0 text-black">PRODUCT <span className="text-primary">CATEGORIES</span> <i
              className="fa fa-plus ml-2 text-white" aria-hidden="true"></i></p>
          </div>
        </section> */}

        <section className="thecollectiontext-mobile">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-sm-12">
                <div className="text-with-plus">
                  <p className="mb-0 text-black">
                    PRODUCT <span className="text-primary">CATEGORIES</span>{" "}
                    <i
                      className="fa fa-plus ml-2 text-white"
                      aria-hidden="true"
                    ></i>
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-8">
                <img src={theCollectiontext} alt="Livon" />
              </div>
            </div>
          </div>
        </section>

        <section className="product-details" id="productdetails">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="text-with-plus text-right">
                  <p className="mb-0">
                    ALL <span className="text-primary">PRODUCTS</span>{" "}
                    <i className="fa fa-plus ml-2" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="product-summary hide-desktop">
                  <Slider
                    {...summarylistSlider}
                    className="summarylist-slider kp-slick-dots"
                  >
                    {productTypeList.map((item, index) => (
                      <div className="slide-item">
                        <a
                          key={`sumlist${index}`}
                          onClick={() => {
                            this.setState({
                              nav1: this.slider1,
                              nav2: this.slider2,
                              selectedProductName: item.name,
                            });
                          }}
                          className={item.btnColor}
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </Slider>

                  {/* <div className="summary-list">
                    <ul>
                      {productTypeList.map((item, index) => (

                        <li key={`sumlist${index}`} onClick={() => {
                          this.setState({
                            nav1: this.slider1,
                            nav2: this.slider2,
                            selectedProductName: item.name
                          });
                        }}><a className={item.btnColor} >{item.name}</a></li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>

              <div className="col-lg-5 col-md-6 col-sm-12 col-6">
                <div className="product-gallery">
                  <ImageGallery
                    items={
                      productJson[
                        productJson.findIndex(
                          (val) => val.type === this.state.selectedProductName
                        )
                      ].productImages
                    }
                    thumbnailPosition="left"
                    disableThumbnailScroll={true}
                    showPlayButton={false}
                    showNav={false}
                  />

                  {/* <Slider {...prodGalleryNav}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)} className="prodgallery-nav hide-mobile"
                  >
                    {productJson[productJson.findIndex(val => val.type === this.state.selectedProductName)].productImages.map((item, index) => (

                      <div key={`productgallery${index}`} className="gallerygrid">
                        <img src={item} alt="Livon" />
                      </div>
                    ))}
                  </Slider>

                  <Slider {...prodGalleryFor}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)} className="prodgallery-for"
                  >
                    {productJson[productJson.findIndex(val => val.type === this.state.selectedProductName)].productImages.map((item, index) => (
                      <a key={`gallerybox${index}`} className="gallerybox">
                        <img src={item} alt="Livon" />
                      </a>
                    ))}
                  </Slider> */}

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

                  {/* <LightBox
                    state={toggle}
                    event={lightBoxHandler}
                    data={data}
                    imageWidth="60vw"
                    imageHeight="70vh"
                    thumbnailHeight={50}
                    thumbnailWidth={50}
                    setImageIndex={setSIndex}
                    imageIndex={sIndex}
                  /> */}
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12 col-6">
                <div className="product-summary">
                  {productJson
                    .filter(
                      (val) => val.type === this.state.selectedProductName
                    )
                    .map((item, index) => (
                      <div
                        key={`proddetails${index}`}
                        className="summary-details"
                      >
                        <h3 className="prod-title">
                          LIVON{" "}
                          <span className="text-primary">{item.title}</span>
                        </h3>
                        <p className="prod-size text-primary">
                          {item.variants}
                        </p>

                        <p className="prod-price text-primary">
                          ₹ <b>{item.price}</b>
                        </p>

                        <div className="quantity-cart">
                          <a
                            className="btn btn-primary"
                            href={item.buyNowLink}
                            target="_blank"
                          >
                            BUY NOW
                          </a>
                        </div>

                        {/* <button className="btn btn-wishlist"><i className="fa fa-heart-o mr-2" aria-hidden="true"></i>Add to
                        wishlist</button> */}
                        {/* <div className="prod-desc hide-mobile">
                        {item.description}
                      </div> */}
                      </div>
                    ))}
                  <div className="summary-list hide-mobile">
                    <ul>
                      {productTypeList.map((item, index) => (
                        <li
                          key={`sumlist${index}`}
                          onClick={() => {
                            this.setState({
                              nav1: this.slider1,
                              nav2: this.slider2,
                              selectedProductName: item.name,
                            });
                          }}
                        >
                          <a className={item.btnColor}>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* hide-desktop */}
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="product-summary">
                  {productJson
                    .filter(
                      (val) => val.type === this.state.selectedProductName
                    )
                    .map((item, index) => (
                      <div className="prod-desc" key={index}>
                        {item.description}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Product;
