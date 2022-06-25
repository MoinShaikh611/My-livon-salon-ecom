import React from 'react'
import styletribeBanner from '../assets/images/style-tribe-banner.jpg';
import styletribeBannerMob from '../assets/images/style-tribe-banner-mob.jpg';
import styleTribeTitleTwo from '../assets/images/styletribe-title2.png';
import trianglePink from '../assets/images/triangle-pink.png';
import journalsOne from '../assets/images/journals1.jpg';
import styleTribeMobile from '../assets/images/styletribebg-mobile.png';

import stApril from '../assets/images/st-april.jpg';
import stMarch from '../assets/images/st-march.jpg';
import stFebruary from '../assets/images/st-february.jpg';
import stJanuary from '../assets/images/st-january.jpg';
import stDecember from '../assets/images/st-december.jpg';
import stNovember from '../assets/images/st-november.jpg';
import stOctober from '../assets/images/st-october.jpg';



import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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


const tribeportfolio = {
  loop: true,
  autoplay: true,
  animateOut: 'fadeOut',
  items: 2,
  margin: 20,
  nav: false,
  dots: true,
};

function StyleTribe() {
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
              <img src={styletribeBanner} alt="Livon" />
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
              <img src={styletribeBannerMob} alt="Livon" />
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

      <section className="tribe-portfolio" id="tribeportfolio">
        <div className="container">
          {/* <div className="row align-items-center justify-content-between tbport-filter">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="form-group filtersearch">
                <label className="control-label">SEARCH FOR AN ISSUE</label>
                <input type="text" className="form-control" disabled />
              </div>
            </div>
          </div> */}
        </div>
        <div className="container">
          <div className="custom-scrollbar portfolio-grid">
            <div className="row hide-mobile">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card-portfolio">
                  <div className="card-image">
                    <img src={stApril} className="portfolio-img" alt="Livon" />
                  </div>
                  <div className="card-body">
                    <a href="https://mylivonmysalon.com/livon/April/" target="_blank" className="btn btn-primary">April 2022</a>
                    {/* <a href="https://mylivonmysalon.com/livon/April/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card-portfolio">
                  <div className="card-image">
                    <img src={stMarch} className="portfolio-img" alt="Livon" />
                  </div>
                  <div className="card-body">
                    <a href="https://mylivonmysalon.com/livon/March/" target="_blank" className="btn btn-primary">March 2022</a>
                    {/* <a href="https://mylivonmysalon.com/livon/March/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card-portfolio">
                  <div className="card-image">
                    <img src={stFebruary} className="portfolio-img" alt="Livon" />
                  </div>
                  <div className="card-body">
                    <a href="https://mylivonmysalon.com/livon/February/" target="_blank" className="btn btn-primary">February 2022</a>
                    {/* <a href="https://mylivonmysalon.com/livon/February/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card-portfolio">
                  <div className="card-image">
                    <img src={stJanuary} className="portfolio-img" alt="Livon" />
                  </div>
                  <div className="card-body">
                    <a href="https://mylivonmysalon.com/livon/January/" target="_blank" className="btn btn-primary">January 2022</a>
                    {/* <a href="https://mylivonmysalon.com/livon/January/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card-portfolio">
                  <div className="card-image">
                    <img src={stDecember} className="portfolio-img" alt="Livon" />
                  </div>
                  <div className="card-body">
                    <a href="https://mylivonmysalon.com/livon/December/" target="_blank" className="btn btn-primary">December 2021</a>
                    {/* <a href="https://mylivonmysalon.com/livon/December/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card-portfolio">
                  <div className="card-image">
                    <img src={stNovember} className="portfolio-img" alt="Livon" />
                  </div>
                  <div className="card-body">
                    <a href="https://mylivonmysalon.com/livon/November/" target="_blank" className="btn btn-primary">November 2021</a>
                    {/* <a href="https://mylivonmysalon.com/livon/November/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card-portfolio">
                  <div className="card-image">
                    <img src={stOctober} className="portfolio-img" alt="Livon" />
                  </div>
                  <div className="card-body">
                    <a href="https://mylivonmysalon.com/livon/October/" target="_blank" className="btn btn-primary">October 2021</a>
                    {/* <a href="https://mylivonmysalon.com/livon/October/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="row hide-desktop hide-tabletpro hide-tablet">
              <div className="col-md-12 col-sm-12">
                <OwlCarousel className='owl-theme kp-owl-dots' {...tribeportfolio}>
                  <div className="item">
                    <div className="card-portfolio">
                      <div className="card-image">
                        <img src={stApril} className="portfolio-img" alt="Livon" />
                      </div>
                      <div className="card-body">
                        <a href="https://mylivonmysalon.com/livon/April/" target="_blank" className="btn btn-primary">April 2022</a>
                        {/* <a href="https://mylivonmysalon.com/livon/April/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card-portfolio">
                      <div className="card-image">
                        <img src={stMarch} className="portfolio-img" alt="Livon" />
                      </div>
                      <div className="card-body">
                        <a href="https://mylivonmysalon.com/livon/March/" target="_blank" className="btn btn-primary">March 2022</a>
                        {/* <a href="https://mylivonmysalon.com/livon/March/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card-portfolio">
                      <div className="card-image">
                        <img src={stFebruary} className="portfolio-img" alt="Livon" />
                      </div>
                      <div className="card-body">
                        <a href="https://mylivonmysalon.com/livon/February/" target="_blank" className="btn btn-primary">February 2022</a>
                        {/* <a href="https://mylivonmysalon.com/livon/February/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card-portfolio">
                      <div className="card-image">
                        <img src={stJanuary} className="portfolio-img" alt="Livon" />
                      </div>
                      <div className="card-body">
                        <a href="https://mylivonmysalon.com/livon/January/" target="_blank" className="btn btn-primary">January 2022</a>
                        {/* <a href="https://mylivonmysalon.com/livon/January/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card-portfolio">
                      <div className="card-image">
                        <img src={stDecember} className="portfolio-img" alt="Livon" />
                      </div>
                      <div className="card-body">
                        <a href="https://mylivonmysalon.com/livon/December/" target="_blank" className="btn btn-primary">December 2021</a>
                        {/* <a href="https://mylivonmysalon.com/livon/December/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card-portfolio">
                      <div className="card-image">
                        <img src={stNovember} className="portfolio-img" alt="Livon" />
                      </div>
                      <div className="card-body">
                        <a href="https://mylivonmysalon.com/livon/November/" target="_blank" className="btn btn-primary">November 2021</a>
                        {/* <a href="https://mylivonmysalon.com/livon/November/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card-portfolio">
                      <div className="card-image">
                        <img src={stOctober} className="portfolio-img" alt="Livon" />
                      </div>
                      <div className="card-body">
                        <a href="https://mylivonmysalon.com/livon/October/" target="_blank" className="btn btn-primary">October 2021</a>
                        {/* <a href="https://mylivonmysalon.com/livon/October/" target="_blank" className="btn btn-share"><i className="fa fa-share-alt" aria-hidden="true"></i></a> */}
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StyleTribe