import * as React from 'react';
import $ from 'jquery';
class PrivacyPolicy extends React.Component {

    componentDidMount() {
        $('.sidecontent-outer .card-header').on('click', function () {
            var pane = $(this);
            setTimeout(function () {

                $('html,body').animate({
                    scrollTop: pane.offset().top - 100
                }, 1000);
            }, 500);
        });
    }
    
    render() {
        return (
            <main className="pagemain">
                <section className="custom-pageheader">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="pageheader-content">
                                    <h2>Privacy <span className="text-primary">Policy</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="privacypolicy tabs-with-collapse">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="mb-5">
                                    <p>This website (“Site”) and all its contents are owned and operated by Marico. Your access to and use of this website is subject to the terms and conditions of these ‘Terms of Use’ and all applicable laws. The term ‘Affiliated Entities’ means and includes subsidiaries or affiliated companies or authorised associates or agents.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                <div className="sidemenu-outer" id="sidemenu-outer">
                                    <ul className="sidemenu">
                                        <li><a href="#tab1" className="active">Scope</a></li>
                                        <li><a href="#tab2">Terms of use</a></li>
                                        <li><a href="#tab3">Information covered by this Privacy policy</a></li>
                                        <li><a href="#tab4">Information we collect</a></li>
                                        <li><a href="#tab5">How we use this information</a></li>
                                        <li><a href="#tab6">Access to information by relevant persons</a></li>
                                        <li><a href="#tab7">Information sharing</a></li>
                                        <li><a href="#tab8">Information security</a></li>
                                        <li><a href="#tab9">Changes to our privacy notice</a></li>
                                        <li><a href="#tab10">Changes to our privacy notice</a></li>
                                        <li><a href="#tab11">Consent</a></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                <div className="sidecontent-outer">
                                    <div id="accordion">
                                        <div className="card" id="tab1">
                                            <div className="card-header collapsed" id="heading1" data-toggle="collapse" data-target="#collapse1"
                                                aria-expanded="true" aria-controls="collapse1">
                                                Scope
                                            </div>

                                            <div id="collapse1" className="collapse" aria-labelledby="heading1"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>We value and respect your Privacy. This Marico Privacy Policy (Privacy Policy)
                                                        describes the Consumer information, including Personal Information collected and
                                                        used by Marico Limited and its affiliated companies and subsidiaries and how we
                                                        use and protect this information. This includes information collected offline
                                                        through our Consumer Engagement Centres, direct marketing campaigns, sweepstakes
                                                        and competitions, and online through our websites, applications and branded
                                                        pages on third party platforms and applications accessed or used through such
                                                        websites or third party platforms (“Marico Sites”). This Privacy Notice also
                                                        applies to targeted Marico content, including offers and advertisements for
                                                        Marico products and services, which we (or a service provider acting on our
                                                        behalf) may send to you on third party websites, platforms and applications
                                                        (“Third Party Sites”) based on your Site Usage Information (as defined below).
                                                        These Third Party Sites may have their own privacy policies and terms and
                                                        conditions. We encourage you to read them before using those Third Party Sites.
                                                    </p>
                                                    <p>Our Privacy Policy practices are consistent with the Information Technology
                                                        (Amendment) Act, 2008 and adoption of amendments as and when notified subject to
                                                        its applicability.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab2">
                                            <div className="card-header collapsed" id="heading2" data-toggle="collapse"
                                                data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                Terms of use
                                            </div>
                                            <div id="collapse2" className="collapse" aria-labelledby="heading2"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Your use of this portal is also subject to the Terms of Use posted on this
                                                        web-portal ("Terms of Use").

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab3">
                                            <div className="card-header collapsed" id="heading3" data-toggle="collapse"
                                                data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                Information covered by this Privacy policy
                                            </div>
                                            <div id="collapse3" className="collapse" aria-labelledby="heading3"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>This Privacy Statement applies to personal information collected by Marico.</p>
                                                    <p>Personal information is information related to an individual, or a combination of
                                                        pieces of information that could reasonably allow an individual to be
                                                        identified. Personal information may consist of full name, personal contact
                                                        numbers, residential address, email address, gender or date of birth but can
                                                        also include other information such as IP address, shopping habits, information
                                                        about your lifestyle or preferences such as your hobbies and interests. While
                                                        information such as date of birth in isolation may not be enough to uniquely
                                                        identify an individual, a combination of full name and date of birth may be
                                                        sufficient to do so.</p>
                                                    <p>Sensitive personal information is such personal information that is collected,
                                                        received, stored, transmitted or processed by Marico, consisting of:</p>
                                                    <ul>
                                                        <li>Password</li>

                                                        <li>User details as provided at the time of registration or thereafter</li>

                                                        <li>Financial information such as Bank account or credit card or debit card or
                                                            other payment instrument details</li>

                                                        <li>Call data records</li>

                                                        <li>Physical, physiological and mental health condition</li>

                                                        <li>Sexual orientation; Medical records and history</li>

                                                        <li>Biometric information</li>

                                                        <li>Any detail relating to the above personal information categories as provided
                                                            to Marico for providing service</li>

                                                        <li>Any of the information received under above personal information categories
                                                            by Marico for processing, stored or processed under lawful contract or
                                                            otherwise.</li>
                                                    </ul>
                                                    <p>The ownership of the sensitive personal information collected in this portal lies
                                                        with the individual collecting the information.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab4">
                                            <div className="card-header collapsed" id="heading4" data-toggle="collapse"
                                                data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                Information we collect
                                            </div>
                                            <div id="collapse4" className="collapse" aria-labelledby="heading4"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>We may collect personal information on this Website voluntarily submitted by the
                                                        user, including information we collect while performing business transactions
                                                        and information we collect from other sources (as permitted by law).</p>

                                                    <p>Information collected directly</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab5">
                                            <div className="card-header collapsed" id="heading5" data-toggle="collapse"
                                                data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                How we use this information
                                            </div>
                                            <div id="collapse5" className="collapse" aria-labelledby="heading5"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Personal information collected from data subjects listed in this portal will only
                                                        be kept in order to conduct the required business, and for as long as the
                                                        requirement was deemed at the time of data collection.</p>
                                                    <p>The information collected may be used for the following activities:</p>
                                                    <ul>
                                                        <li>Create and manage information for master maintenance</li>

                                                        <li>Process payment for purchases or other services</li>

                                                        <li>Protect against or identify possible fraudulent transactions</li>

                                                        <li>Enforce the terms and conditions of agreements, and otherwise lawfully
                                                            manage our business.</li>

                                                        <li>Suggest products or services (including those of relevant third parties)
                                                            which we think may be of interest to you</li>

                                                        <li> Offer you the opportunity to take part in competitions or promotions</li>

                                                        <li>For the purposes of competitions or promotions that you have entered To send
                                                            you information, products or samples that you have requested</li>

                                                        <li>To respond to your queries or comments</li>

                                                        <li>Evaluate the use of the Marico Web sites, products and services</li>
                                                        <li>Analyse the effectiveness of our advertisements, competitions and promotions
                                                        </li>
                                                        <li> Personalise your website experience, as well as to evaluate (anonymously
                                                            and in the aggregate) statistics on website activity, such as what time you
                                                            visited it, whether you’ve visited it before and what site referred you to
                                                            itm) help speed up your future activities and experience on the Marico
                                                            Website. For example, a site can recognise that you have provided your
                                                            personal information and will not request the same information a second time
                                                        </li>
                                                        <li>Collect information about the device you are using to view the Marico
                                                            Website, such as your IP address or the type of Internet browser or
                                                            operating system you are using, and link this to your personal information
                                                            so as to ensure that the Marico Website present the best web experience for
                                                            you.</li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab6">
                                            <div className="card-header collapsed" id="heading6" data-toggle="collapse"
                                                data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                Access to information by relevant persons
                                            </div>
                                            <div id="collapse6" className="collapse" aria-labelledby="heading6"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>All personal information must be accurate, complete, and relevant for the
                                                        business purposes of collection of such information, and necessary only to
                                                        facilitate those purposes. Your access to and use of this web-portal and its
                                                        contents (the "Portal") is subject to the terms and conditions of this Privacy
                                                        Policy, and all applicable laws. By accessing and using this Portal, you (the
                                                        "User" or "you") accept and agree to these without any limitation or
                                                        qualification.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab7">
                                            <div className="card-header collapsed" id="heading7" data-toggle="collapse"
                                                data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                                Information sharing
                                            </div>
                                            <div id="collapse7" className="collapse" aria-labelledby="heading7"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>We share personal information within Marico, and externally only as described
                                                        below:</p>
                                                    <ul>
                                                        <li>Third-party service providers - We rely on third-party service providers to
                                                            perform various services on our behalf such as a co-promotion or joint
                                                            program with a business partner and share your information with that
                                                            business partner. In order to perform these services, we may need to share
                                                            personal information with them.</li>
                                                        <li>Legal action and obligations - We may disclose personal information: (i)
                                                            Where permitted by law, to protect and defend the rights and property of
                                                            Marico (including enforcement of valid agreements). (ii) When required by
                                                            law or public authorities.</li>
                                                        <li>We may allow third parties, including business partners and ad networks, to
                                                            display advertising on Marico website. Some of these companies may recognize
                                                            your device through cookies or other technologies each time they send you an
                                                            online advertisement. This enables them to understand where you, or others
                                                            who are using your computer saw their advertisement and to deliver ads that
                                                            they believe are of interest to you.</li>
                                                        <li>We may disclose your personal information to identify you to anyone to whom
                                                            you send messages via the Site. You may also disclose your own personal
                                                            information on interactive services such as message boards, product reviews,
                                                            question-and-answer pages, profile pages, and social network features
                                                            offered by us or by third parties. Information you post or disclose through
                                                            such interactive services may be available to the general public. Please
                                                            exercise caution when deciding whether to disclose your personal
                                                            information, location, or similar information via this Site.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab8">
                                            <div className="card-header collapsed" id="heading8" data-toggle="collapse"
                                                data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                Information security
                                            </div>
                                            <div id="collapse8" className="collapse" aria-labelledby="heading8"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>We take all reasonable precautions to keep your personal information secure and
                                                        require any third parties that handle or process your personal information for
                                                        us to do the same. We are committed to keeping personal information secure. We
                                                        limit access to personal information only to those who have a business need. We
                                                        keep personal information only for the duration of valid business requirements
                                                        or as required by law. We provide our service providers with only the personal
                                                        information they need to perform the services we request, and we require that
                                                        they protect this information and not use it for any other purpose. Access to
                                                        your personal information is restricted to prevent unauthorised access,
                                                        modification or misuse and is only permitted among our employees, Service
                                                        Providers and agents on a need-to-know basis. While our Site strives to ensure
                                                        the integrity and security of our network and systems, Marico cannot guarantee
                                                        that our security measures will prevent third-party hackers from illegally
                                                        obtaining this information.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab9">
                                            <div className="card-header collapsed" id="heading9" data-toggle="collapse"
                                                data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                                Changes to our privacy notice
                                            </div>
                                            <div id="collapse9" className="collapse" aria-labelledby="heading9"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>We will post changes to this privacy notice and update the effective date when
                                                        this Privacy Policy is updated. We may modify this Privacy Policy at any time,
                                                        in our sole discretion and all modifications will be effective immediately upon
                                                        our posting of the modifications. Continued use of website, following notice of
                                                        such changes, shall indicate your acknowledgment of such changes and agreement
                                                        to be bound by the terms and conditions of such changes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab10">
                                            <div className="card-header collapsed" id="heading10" data-toggle="collapse"
                                                data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                                Changes to our privacy notice
                                            </div>
                                            <div id="collapse10" className="collapse" aria-labelledby="heading10"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>If you have questions, concerns or grievance regarding Marico’s privacy
                                                        practices, please contact the Grievance Officer. The Grievance Officer shall
                                                        respond to valid information requests and complaints within the statutory
                                                        timeframe.
                                                    </p>
                                                    <p>In accordance with Information Technology Act 2000 and rules made there under,
                                                        the name and contact details of the Grievance Officer are provided below:</p>
                                                    <p>Grievance Officer Name: Mr. Mayuresh Purandare</p>
                                                    <p>Company Address: Marico Limited, 7th Floor, Grande Palladium, 175 CST Road,
                                                        Kalina, Santacruz (East), Mumbai – 400 098, Maharashtra, India.</p>
                                                    <p>Email address : <a className="text-primary"
                                                        href="mailto:Mayuresh.Purandare@marico.com">Mayuresh.Purandare@marico.com</a>
                                                    </p>
                                                    <p>Contact telephone number : <a className="text-primary" href="tel:+91 9987236561">+91
                                                        9987236561</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab11">
                                            <div className="card-header collapsed" id="heading11" data-toggle="collapse"
                                                data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                                Consent
                                            </div>
                                            <div id="collapse11" className="collapse" aria-labelledby="heading11"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>I acknowledge and agree to the terms contained in this data privacy notice, which
                                                        shall be effective for the entire duration of my relationship with Marico as a
                                                        user of this website and until Marico retains records of the captured personal
                                                        information as specified above.
                                                    </p>
                                                    <p>By using a Marico owned site, you are consenting to the relevant Marico group
                                                        companies collecting, using and disclosing your personal information in
                                                        accordance with this Privacy Notice. If you do not agree to the collection, use
                                                        and disclosure of your personal information in this way, you are free not to use
                                                        this website or otherwise provide Marico with your personal information.</p>
                                                    <p>Marico will only collect, use or disclose your personal information where it is
                                                        fair and lawful to do so. You are not obliged to provide such consent but if you
                                                        decide not to then your participation in certain activities may be restricted.
                                                        Please note, however, that we may process your personal information without
                                                        consent if we have a legitimate reason to do so, provided that such use will not
                                                        have a prejudicial effect on your own rights, freedoms and interests. Any such
                                                        use shall be in accordance with the Marico Privacy Principles set out abovE.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default PrivacyPolicy