import * as React from 'react';

class AboutUs extends React.Component {
    render() {
        return (
            <main className="pagemain">
                <section className="custom-pageheader">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="pageheader-content">
                                    <h2>About <span className="text-primary">Us</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="aboutus">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="aboutus-content">
                                    <h3>Your Stylist in a Bottle</h3>
                                    <p>All your hair wishes might just come true.</p>
                                    <p>Look like you stepped out of a magazine? Snap!</p>
                                    <p>Transform your hair into a masterpiece with a few dabs.</p>

                                    <h5>Quick hair-dos? Done</h5>
                                    <p>No long lines here. Just a dab of your fave Livon product</p>
                                

                                    <h5>Dazzling, sleek hair? You got it</h5>
                                    <p>Lock in that moisture for hairstyles that last all day.</p>
                                    
                                    <h5>Made for your mane? Yep.</h5>
                                    <p>Every hair type and length will find their perfect match here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}


export default AboutUs