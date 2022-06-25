import * as React from 'react';
import $ from 'jquery';

class termsCondition extends React.Component {
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
                                    <h2>Terms & <span className="text-primary">Conditions</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="termsconditions tabs-with-collapse">
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
                                        <li><a href="#tab1" className="active">Acceptance of terms of use</a></li>
                                        <li><a href="#tab2">Data protection and privacy policy</a></li>
                                        <li><a href="#tab3">Intellectual property</a></li>
                                        <li><a href="#tab4">Disclaimer</a></li>
                                        <li><a href="#tab5">Indemnification</a></li>
                                        <li><a href="#tab6">External links</a></li>
                                        <li><a href="#tab7">Governing law and jurisdiction</a></li>
                                        <li><a href="#tab8">Severability</a></li>
                                        <li><a href="#tab9">Changes</a></li>
                                        <li><a href="#tab10">General</a></li>
                                        <li><a href="#tab11">Services</a></li>
                                        <li><a href="#tab12">Eligibility to Use</a></li>
                                        <li><a href="#tab13">Payments related Information</a></li>
                                        <li><a href="#tab14">User Obligations</a></li>
                                        <li><a href="#tab15">Intellectual Property Rights</a></li>
                                        <li><a href="#tab16">Disclaimer of Warranties & Liability</a></li>
                                        <li><a href="#tab17">Indemnification and Limitation of Liability</a></li>
                                        <li><a href="#tab18">Terms</a></li>
                                        <li><a href="#tab19">Communications</a></li>
                                        <li><a href="#tab20">General Provisions</a></li>
                                        <li><a href="#tab21">Feedback and Information</a></li>
                                        <li><a href="#tab22">Additional Terms for Online Purchases of the Product</a></li>
                                        <li><a href="#tab23">Term of Sale</a></li>
                                        <li><a href="#tab24">Terms and Conditions for Product Subscription</a></li>
                                        <li><a href="#tab25">Disclaimer by Marico</a></li>
                                        <li><a href="#tab26">Coupons and Vouchers</a></li>
                                        <li><a href="#tab27">Shipping policy</a></li>
                                        <li><a href="#tab28">Return policy</a></li>
                                        <li><a href="#tab29">Refund policy</a></li>
                                        <li><a href="#tab30">Order cancellation</a></li>
                                        <li><a href="#tab31">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                <div className="sidecontent-outer">
                                    <div id="accordion">
                                        <div className="card" id="tab1">
                                            <div className="card-header collapsed" id="heading1" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                Acceptance of terms of use
                                            </div>

                                            <div id="collapse1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>By accessing and using this Site, you accept and agree to these Terms of Use (Terms) and to any additional terms, amendments and /or supplementary rules that may be posted on this Site, without any limitation or qualification. By impliedly or expressly accepting these Terms of Use, You also accept and agree to be bound by Marico Policies (including but not limited to Code of Conduct and Privacy Policy) as amended from time to time. If you do not agree to these Terms, you may not use this Website.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab2">
                                            <div className="card-header collapsed" id="heading2" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                Data protection and privacy policy
                                            </div>
                                            <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Marico Limited respects its concern about data protection and privacy of your personal and sensitive information and takes protection of such personal and sensitive information seriously. Please refer our Privacy Policy for information on how we collect, store, use, disclose and manage your personal information. The content we make available on the site This Website of Marico Limited has been developed to provide general public information which is subject to change without notice. The documents and information displayed in this site are for reference purposes only. We try to ensure that website availability is uninterrupted and that transmissions will be error-free. However, we cannot, due to the nature of the internet, guarantee that your access will not be suspended or restricted from time to time including to allow for repairs, maintenance or the introduction of new services. We of course try to limit the frequency and duration of any suspension or restriction. The content on the site is updated on a continual basis. While Marico attempts to keep its web information accurate and timely, no representations, warranties or guarantees whatsoever are made as to the accuracy, adequacy, reliability, completeness, suitability or applicability of the information, text, graphics, hyperlinks, and other items contained on this server or any other server. Marico Limited, its directors, officers, employees, its affiliated entities or agents shall not be liable for any loss, damage or expense arising out of use /access of this site or any site linked to it including without limitation of any consequential loss, indirect, incidental or damages of whatsoever nature. Should any viewer of this Website respond with information including feedback data such as questions, comments, suggestions, or the like regarding the content of any material on this Website, such information shall be deemed to be non-confidential and Marico shall deal with the same in the manner it deems fit.

                                                    </p>
                                                    <p>The content we make available on the site

                                                    </p>
                                                    <p>This Website of Marico Limited has been developed to provide general public information which is subject to change without notice. The documents and information displayed in this site are for reference purposes only. We try to ensure that website availability is uninterrupted and that transmissions will be error-free. However, we cannot, due to the nature of the internet, guarantee that your access will not be suspended or restricted from time to time including to allow for repairs, maintenance or the introduction of new services. We of course try to limit the frequency and duration of any suspension or restriction.

                                                    </p>
                                                    <p>The content on the site is updated on a continual basis. While Marico attempts to keep its web information accurate and timely, no representations, warranties or guarantees whatsoever are made as to the accuracy, adequacy, reliability, completeness, suitability or applicability of the information, text, graphics, hyperlinks, and other items contained on this server or any other server. Marico Limited, its directors, officers, employees, its affiliated entities or agents shall not be liable for any loss, damage or expense arising out of use /access of this site or any site linked to it including without limitation of any consequential loss, indirect, incidental or damages of whatsoever nature. Should any viewer of this Website respond with information including feedback data such as questions, comments, suggestions, or the like regarding the content of any material on this Website, such information shall be deemed to be non-confidential and Marico shall deal with the same in the manner it deems fit.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab3">
                                            <div className="card-header collapsed" id="heading3" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                Intellectual property
                                            </div>
                                            <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Marico Limited (or Affiliated Entities who have licensed its brands to the Company or content made available to this Site) own or licence from third parties all Site content. All Site content including copyright and other intellectual property rights in all materials presented on the Site (including but not limited to text, audio, video, sound, software, graphical images and other materials), trademarks and logos on this Site remains the sole property of Marico Limited / Affiliated Entities and is protected under all relevant Copyright, Trademark and other applicable laws. Nothing on the Site should be construed as granting any license or rights to use or distribute or reproduce, modify or disseminate any Site content, without our prior express written agreement or of the other applicable content owner.

                                                    </p>
                                                    <p>Restrictions on use of the site

                                                    </p>
                                                    <p>Authorization to access and use is subject to the following restrictions:

                                                    </p>
                                                    <ol>
                                                        <li>You may use this Site for your own personal, non-commercial information, reference purposes only.</li>

                                                        <li>You will not reproduce, duplicate, copy, reuse, sell, resell, retransmit, adapt, publish, frame, post, upload, modify, broadcast or distribute any Site content in any way, including for any public or commercial purpose whatsoever, without our prior written permission.</li>

                                                        <li>You are prohibited from transmitting or sending any material to the Site that is unlawful, harmful (including any virus), threatening, libellous, defamatory, obscene, scandalous, deceptive, fraudulent, tortious, inflammatory, pornographic, indecent or profane or any material that could constitute or encourage any such conduct that would be considered a violation of any law.</li>

                                                        <li>You are prohibited from posting any unsolicited or unauthorised promotional materials, advertising or any other form of solicitation including any material non-public information about a company without the proper authorisation to do so.</li>

                                                        <li>You will not use or impersonate any person or entity, third parties’ likeness, names, and/or properties, falsely indicate or misrepresent your affiliation with any person or entity.</li>

                                                        <li>You will not do any act which is in violation of the Information Technology Act, 2000 or any Rules and regulations framed by an authorised entity mentioned in the said Act. You hereby confirm that in case of any “Cyber Security incident” as defined in The Information Technology (The Indian Computer Emergency Response Team and Manner of Performing Functions and Duties) Rules, 2013 you shall immediately inform Computer Emergency response Team or Grievance Officer of Marico.</li>

                                                        <li>You shall not use any "deep-link", "page-scrape", "robot", "spider" or other automatic devices, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Website or any Content, or in any way reproduce or circumvent the navigational structure or presentation of the Website or any Content, to obtain or attempt to obtain any materials, documents or information through any means not purposely made available through the Website. We reserve our right to bar any such activity.</li>

                                                        <li>You shall not attempt to gain unauthorized access to any portion or feature of the Website, or any other systems or networks connected to the Website or to any server, computer, network, or to any of the services offered on or through the Website, by hacking, password "mining" or any other illegitimate means.</li>
                                                    </ol>
                                                    <p>Marico may review, edit, or delete materials you or others send to this Site but are under no obligation to do so and assume no responsibility or liability arising from the material. Marico may cancel or terminate your access or use of the Site of any registration/s or account/s on this Site at any time, without notice or liability, for any reason, including if technical problems, irregularities, misuse or breach occurs.
                                                    </p>
                                                    <p>Material /content you share with us

                                                    </p>
                                                    <p>Any material /content shared and sent by you via this website or otherwise to MARICO are on a non-confidential basis, and Marico is under no obligation to refrain from reproducing, publishing or otherwise using them in any way or for any purpose. Marico shall be free to use the content of any such material/communication, including any ideas, inventions, concepts, techniques or know-how disclosed therein, for any purpose including developing manufacturing and/or marketing goods and services. You agree to not assert any ownership right of any kind in the Material /Content (including, but not limited to the copyright, trademark, unfair competition, moral rights, or implied contract) and to waive the right to receive any financial or other consideration in connection with such Material/content including, but not limited to, your acknowledgement. You shall be responsible for the Material /Content and information contained in any Material /Content sent by you to this Website or otherwise to Marico, including its truthfulness and accuracy.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab4">
                                            <div className="card-header collapsed" id="heading4" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                Disclaimer
                                            </div>
                                            <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Any material/ contents downloaded or otherwise obtained through the use of the Site is done at your own discretion and risk. The Site is provided to you “AS IS” without any express warranties or representations of any kind. Marico, its Affiliated Entities and their directors, officers, employees, agents, providers, representatives and licensors disclaim all statutory and implied representations, warranties with respect to this Site and shall not be responsible or liable for any damages, claims, delays, inaccuracies, errors or omissions arising out of your use of the Site or with respect to the material contained on the Site due to

                                                    </p>
                                                    <ol>

                                                        <li>The statement, acts, errors or omissions in the Site</li>

                                                        <li>Availability of Site content on a timely basis or uninterrupted and secured access,</li>

                                                        <li>Content infringing any third party’s rights information and materials</li>

                                                        <li>Any viruses or other contamination of your system, nor for any damages,</li>

                                                        <li>Linking to any other site or its nature or contents</li>

                                                        <li>That defects or errors will be corrected or</li>

                                                        <li>Any other matter regarding this Site and your use of it.</li>
                                                    </ol>
                                                    <p>Nothing on this Website constitutes an invitation or offer to invest or deal in the securities of Marico Limited. In particular, actual results and developments may be materially different from any forecast, opinion or expectation expressed on this Website as also from the historical performance on account of factors such as changes in government regulations, tax regimes, economic developments within India and the countries within which Marico conducts its business, exchange rate and interest rate movements, the impact of competing products and their pricing, product demand and supply constraints. The past performance of the price of securities must not be relied on as a guide to their future performance.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab5">
                                            <div className="card-header collapsed" id="heading5" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                Indemnification
                                            </div>
                                            <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>By accessing or using this Site, you agree to defend, indemnify and hold harmless Marico Limited and its Affiliated Entities and their respective directors, officers, employees, agents, providers, representatives and licensors from against all claims, losses, costs and expenses including without limitation lawyer’s fees and cost arising out of any of the following:

                                                    </p>
                                                    <ol>

                                                        <li>Any use of or activities in connection with the Site by yourself or anyone using the Site through your Internet protocol or account or network which are wrongful conduct and /or negligent.</li>

                                                        <li>Any claims for infringement of intellectual property rights, defamation, libel relating to any Material /Content that you make available /send to the Site, that infringes or violates intellectual property rights.</li>

                                                        <li>Any breach or violation of these Terms of Use by you or through any account you create in connection with the Site</li>

                                                        <li>Any other matter regarding this Site and your use of it.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab6">
                                            <div className="card-header collapsed" id="heading6" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                External links
                                            </div>
                                            <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>This Site may provide links to other websites operated and owned by other entities. Some of the links on this Site lead to resources/servers owned, operated and maintained by other entities, individuals or organizations over which Marico has no control. Marico makes no representations or warranties regarding the accuracy or any other aspect of the information located on such servers and does not bear any responsibility whatsoever for the content, accuracy or security of any websites that are linked by way of hyperlink or otherwise to this Website. Visiting any such linked site/s, any downloading of material or any form of data usage, you do it at your own risk including the risk of infringing intellectual property rights or inviting viruses into your system. References to any external links should not be construed as an endorsement of the links or their content or its products and services.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab7">
                                            <div className="card-header collapsed" id="heading7" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                                Governing law and jurisdiction
                                            </div>
                                            <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>This website (excluding third party linked sites) is controlled by Marico from its offices located in Mumbai, State of Maharashtra, India. All matters relating to the Site, access to, or use of shall be governed by the laws of India applicable therein without reference to the conflict. You agree and hereby submit to the non-exclusive jurisdiction and venue of the courts at Mumbai with respect to such matters. Marico makes no representation that materials on this Website are appropriate or available for use in other locations, and accessing them from territories where their contents are illegal is prohibited. Those who choose to access this site from other locations do so, on their own initiative and are responsible for compliance with local laws.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab8">
                                            <div className="card-header collapsed" id="heading8" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                Severability
                                            </div>
                                            <div id="collapse8" className="collapse" aria-labelledby="heading8" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Marico Limited (or Affiliated Entities who have licensed its brands to the Company or content made available to this Site) own or licence from third parties all Site Content. All Site content including copyright and other intellectual property rights in all materials presented on the Site (including but not limited to text, audio, video, sound, software, graphical images and other materials), trademarks and logos on this Site remains the sole property of Marico Limited / Affiliated Entities and is protected under all relevant Copyright, Trademark and other applicable laws. Nothing on the Site should be construed as granting any license or rights to use or distribute or reproduce, modify or disseminate any Site content, without our prior express written agreement or of the other applicable content owner.


                                                    </p>
                                                    <p>Intellectual property

                                                    </p>
                                                    <p>Each term and condition listed herein is severable. If any term or condition hereof is illegal, invalid or inapplicable such illegality, invalidity or inapplicability shall not affect the validity of the remaining terms and conditions.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab9">
                                            <div className="card-header collapsed" id="heading9" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                                Changes
                                            </div>
                                            <div id="collapse9" className="collapse" aria-labelledby="heading9" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Marico reserves the right, as and when it considers appropriate and at its sole discretion, to alter, change, make corrections, modify, add or remove any portion of this Terms of Use at any time and without notice.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab10">
                                            <div className="card-header collapsed" id="heading10" data-toggle="collapse" data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                                                General
                                            </div>
                                            <div id="collapse10" className="collapse" aria-labelledby="heading10" data-parent="#accordion">
                                                <div className="card-body">
                                                    <ol>
                                                        <li>Marico is a company incorporated under the laws of India, having its registered office at 7th Floor, Grande Palladium, 175 CST Road, Mumbai 400098, India and having CIN L15140MH1988PLC049208. This Website of Marico Limited has been developed to provide general public information which is subject to change without notice. The documents and information displayed in this site are for reference purposes only. We try to ensure that website availability is uninterrupted and that transmissions will be error-free. However, we cannot, due to the nature of the internet, guarantee that your access will not be suspended or restricted from time to time including to allow for repairs, maintenance or the introduction of new services. We, of course, try to limit the frequency and duration of any suspension or restriction. The content on the site is updated on a continual basis. While Marico attempts to keep its web information accurate and timely, no representations, warranties or guarantees whatsoever are made as to the accuracy, adequacy, reliability, completeness, suitability or applicability of the information, text, graphics, hyperlinks, and other items contained on this server or any other server. Marico Limited, its directors, officers, employees, its affiliated entities or agents shall not be liable for any loss, damage or expense arising out of use /access of this site or any site linked to it including without limitation of any consequential loss, indirect, incidental or damages of whatsoever nature. Should any viewer of this Website respond with information including feedback data such as questions, comments, suggestions, or the like regarding the content of any material on this Website, such information shall be deemed to be non-confidential and Marico shall deal with the same in the manner it deems fit. Further, on the said website, Marico is also an intermediary in the form of an online marketplace and its role is limited to managing the Website to enable - the buyer to purchase the products so offered ("Products") and avail other incidental Services thereto ("Services") including use of the Website by any User.

                                                        </li>
                                                        <li>The Terms of Use are subject to revision by Marico at any time and hence the Users are requested to carefully read these terms of use from time to time before using the Website. The revised Terms of Use shall be made available on the Website. You are requested to regularly visit the Website to view the most current Terms of Use. In the event such a facility is provided on the Website, You can determine when Marico has last modified any part of the Agreement by referring to the "Last Updated" legend provided in that document. It shall be your responsibility to check these Terms of Use periodically for changes. Marico may require you to provide Your direct or indirect consent to any update in a specified manner before further use of the Website and the Services. If no such separate consent is sought, your continued use of the Website and/or Services, following such changes, will constitute Your acceptance of those changes.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab11">
                                            <div className="card-header collapsed" id="heading11" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                                Services
                                            </div>
                                            <div id="collapse11" className="collapse" aria-labelledby="heading11" data-parent="#accordion">
                                                <div className="card-body">
                                                    <ol>
                                                        <li>The Website is a platform in the form of an electronic marketplace for domestic customers (“Buyers”) to transact with the third party re-seller and who has been granted access to the Website for this purpose (“Seller”), collectively referred to as (“Users”) for this part. For abundant clarity, all commercial/contractual terms are offered by and agreed to between Buyers and Seller alone. The commercial/contractual terms include without limitation price, shipping costs, payment methods, payment terms, date, period and mode of delivery, warranties related to products and services. Marico does not have any control or does not determine or advise or in any way involve itself in the offering or acceptance of such commercial/contractual terms between the Buyers and Sellers.</li>

                                                        <li>Marico does not make any representation or warranty as to specifics (such as quality, value, saleability, etc) of the products or services proposed to be sold or offered to be sold or purchased on the Website. Marico accepts no liability for any errors or omissions, whether on behalf of itself or third parties.</li>

                                                        <li>Marico is not responsible for any non-performance or breach of any contract entered into between Buyers and Sellers. Marico cannot and does not guarantee that the concerned Buyers and/or Sellers will perform any transaction concluded on the Website. Marico shall not and is not required to mediate or resolve any dispute or disagreement between Buyers and Sellers.</li>

                                                        <li>Marico does not make any representation or warranty as to the item-specifics (such as legal title, creditworthiness, identity, etc) of any of its Users. You are advised to independently verify the bona fides of any particular User that you choose to deal with on the Website and use your best judgment in that behalf.</li>

                                                        <li>At no point of time shall Marico hold any right, title or interest over the products nor shall Marico have any obligations or liabilities in respect of such contract entered into between Buyers and Sellers. Marico is not responsible for the unsatisfactory or delayed performance of services or damages or delays as a result of products which are out of stock, unavailable or back-ordered.</li>

                                                        <li>The Website is only a platform that can be utilized by Users to reach a larger base to buy and sell products or services. Marico is only providing a platform for communication and it is agreed that the contract for the sale of any of the products or services shall be a strictly bipartite contract between the Seller and the Buyer.</li>

                                                        <li>You shall independently agree upon the manner and terms and conditions of delivery, payment, insurance etc. with the seller(s) that you transact with.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card" id="tab12">
                                            <div className="card-header collapsed" id="heading12" data-toggle="collapse"
                                                data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                Eligibility to Use
                                            </div>
                                            <div id="collapse12" className="collapse" aria-labelledby="heading12"
                                                data-parent="#accordion">
                                                <div className="card-body">

                                                    <ol>
                                                        <li>The Services are not available to minors under the age of eighteen (18) or to any User who is incompetent to contract for any reason whatsoever. If you are disqualified as per the preceding sentence, you shall not be permitted to avail of the Services or use the Website. You represent that you are of legal age to form a binding contract and are not a person barred from receiving the Services under the laws as applicable in India.</li>

                                                        <li>Marico reserves the right to refuse access to use the Services offered at the Website to new Users or to terminate access granted to existing Users at any time without according any reasons for doing so.</li>

                                                        <li>You shall not have more than one active Account (defined hereunder) on the Website. Additionally, you are prohibited from selling, trading, or otherwise transferring Your Account to another person.</li>

                                                        <li>You may access and use the Website and the Services either as a registered user or as a guest user. However, not all sections of the Website and Services will be accessible to guest users. Registered users: Marico makes certain sections of the Services available to you through the Website only if you have provided Marico certain required User information and created an account - through certain log-in ID and password ("Account"). You can create Your Account on the Website either directly or by logging in to a third-party website or the website of its subsidiaries using your Log-in ID and password or through any other Internet service as permitted on the Website (Login ID - and/or other third party login identification as provided above are individually and collectively referred to the "Account Information").</li>

                                                        <li> In the event, you register as a User by creating an Account in order to avail of the Services provided by the Website, you will be responsible for maintaining the confidentiality and security of the Account Information, and are fully responsible for all activities that occur under your Account. You agree to (a) immediately notify Marico of any unauthorized use of your Account Information or any other breach of security, and (b) ensure that you exit from Your Account at the end of each session. Marico cannot and will not be liable for any loss or damage arising from your failure to comply with this section. You shall be held liable for losses incurred by Marico or any other user of or visitor to the Website due to the authorized or unauthorized use of Your Account as a result of your failure in keeping Your Account Information secure and confidential. You shall ensure that the Account Information provided by you in the Website's registration form is complete, accurate and up-to-date. Use of another user's Account Information for availing the Services is expressly prohibited. If you provide any information that is untrue, inaccurate, not current or incomplete (or becomes untrue, inaccurate, not current or incomplete), or Marico has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Marico reserves the right to suspend or terminate Your Account and refuse to any and all current or future use of the Website / Services (or any portion thereof).</li>

                                                        <li>The Website may require you to certain personal information. Your provision of and collection, storage, use, disclosure and otherwise dealing of such personal information shall be governed by Marico’s privacy policy, which is available at http://www.getslimtherightway.com/privacypolicy ("Privacy Policy").</li>
                                                    </ol>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab13">
                                            <div className="card-header collapsed" id="heading13" data-toggle="collapse"
                                                data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                                Payments related Information
                                            </div>
                                            <div id="collapse13" className="collapse" aria-labelledby="heading13"
                                                data-parent="#accordion">
                                                <div className="card-body">

                                                    <ol>
                                                        <li>Presently, Marico does not levy any fee for browsing the Website or buying the Products on the Website may charge Users certain fees for the use of the Website and Services as a whole, or certain features of the Website / Services. You agree to pay any such fees, as may be applicable to the Services that you use. Marico will try to ensure that you are made aware of the applicability of any fees for a particular use of the Website / Services, as well as the amount of fees payable by you for any such use of the Website / Service. You agree that Marico may, at any time, charge, modify or waive fees required to use the Website. Your continued use of the Website / Services after such change in the fees will be considered to be your acceptance of such changes, and the applicability of these Terms of Use to such changes. </li>

                                                        <li>You agree to provide correct and accurate financial information, such as credit/debit card details to the approved payment gateway or pre-paid payment instrument account details for availing Services on the Website. You shall not use the credit/debit card or pre-paid payment instrument which is not lawfully owned by you, i.e. in any transaction, you must use your own credit/debit card or pre-paid instrument account. The information provided by you will not be utilized or shared with any third party unless required in relation to fraud verifications or by law, regulation or court order or in accordance with the terms of the Privacy Policy. You will be solely responsible for the security and confidentiality of your credit/debit card details or pre-paid instrument account. Marico expressly disclaims all liabilities that may arise as a consequence of any unauthorized use of your credit/ debit card or pre-paid instrument account.</li>

                                                        <li>For your making payments for buying the Products on the Website, in addition to the Agreement(s), the terms and conditions of your bank, applicable financial institution and/or card issuing association may also be applicable to you. Your bank, financial institution or card issuing association may decline or prevent you from making electronic payments for buying the Products on Website and Marico does not control the same and shall not be liable for the same.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab14">
                                            <div className="card-header collapsed" id="heading14" data-toggle="collapse"
                                                data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                                User Obligations
                                            </div>
                                            <div id="collapse14" className="collapse" aria-labelledby="heading14"
                                                data-parent="#accordion">
                                                <div className="card-body">

                                                    <ol>
                                                        <li>Subject to compliance with the Agreement(s), Marico grants you a non-exclusive, non-sublicensable, non-transferable, revocable, and limited right to access and use this Website and the Services provided therein.</li>

                                                        <li>You agree to use the Services, Website and the Content (as defined herein) provided therein only for purposes that are permitted by (a) the Agreement(s) (including these Terms of Use) and (b) any applicable law.</li>

                                                        <li>You shall adhere to clause 7 which, inter-alia, lays down all limitations on dissemination and use/reproduction of any materials (such as the Product catalogues) available on the Website.</li>

                                                        <li>You agree not to access (or attempt to access) the Website or Services by any means other than through the interfaces that are provided by Marico. You shall not use any deep-link, robot, spider or other automatic devices, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Website or Content (as defined below), or in any way reproduce or circumvent the navigational structure or presentation of the Website, to obtain or attempt to obtain any materials, documents or information through any means not specifically made available through the Website.</li>

                                                        <li> If you believe that any Content or User Content (as defined herein) or other content available on the Website does not comply with the terms of the Agreement(s) or applicable law, you may report such content in the manner prescribed under clause 16.7 herein.</li>

                                                        <li>The Website may allow you to - as submit any suggestions, comments, questions or other information to Marico using the Website / Services (collectively referred to "User Content"). You, being the originator of the User Content, are responsible for the User Content that you upload, post, publish, transmit or otherwise make available on the Website. You represent that you have obtained all relevant consents and approvals in order to post any User Content. You further represent that all such User Content will be in accordance with applicable law. You acknowledge that Marico does not endorse any User Content on the Website and is not responsible or liable for any User Content. Marico reserves the right to disable access to the User Content on the Website.</li>

                                                        <li>When you use the Website and/or the Services You specifically undertake not to host, display, upload, modify, publish, transmit, update or share any information or Content that:
                                                            <ul>
                                                                <li>belongs to another person and to which the User does not have any right to;</li>
                                                                <li> is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatsoever;</li>
                                                                <li>harms minors in any way;</li>
                                                                <li> impersonate any person or entity, or falsely state or otherwise misrepresent Your affiliation with a person or entity;</li>
                                                                <li> threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting of any other nation;</li>
                                                                <li> infringes any patent, trademark, copyright or other proprietary rights;</li>
                                                                <li>contain software viruses or any other computer code, files or programs designed to interrupt destroy or limit the functionality of any computer resource;</li>
                                                                <li>deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</li>
                                                                <li>engage in any activity that interferes with or disrupts access to the Website or the Services (or the servers and networks which are connected to the Website);</li>
                                                                <li>attempt to gain unauthorized access to any portion or feature of the Website, any other systems or networks connected to the Website, to any Marico server, or to any of the Services offered on or through the Website, by hacking, password mining or any other illegitimate means;</li>
                                                                <li>probe, scan or test the vulnerability of the Website or any network connected to the Website, nor breach the security or authentication measures on the Website or any network connected to the Website. You may not reverse look-up, trace or seek to trace any information on any other user, of or visitor to, the Website, or any other customer of Marico., including any Marico. Account not owned by You, to its source, or exploit the Website or Service or information made available or offered by or through the Website, in any way whether or not the purpose is to reveal any information, including but not limited to personal identification information, other than Your own information, as provided for by the Website;</li>
                                                                <li>disrupt or interfere with the security of, or otherwise cause harm to, the Website, systems resources, accounts, passwords, servers or networks connected to or accessible through the Websites or any affiliated or linked sites;</li>
                                                                <li>use the Website or Content for any purpose that is unlawful or prohibited by the Agreement, or to solicit the performance of any illegal activity or other activity which infringes the rights of Marico or other third parties;</li>
                                                                <li>falsify or delete any author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded;</li>
                                                                <li>violate any code of conduct or other guidelines, which may be applicable for or to any particular Service;</li>
                                                                <li>violate any applicable laws or regulations for the time being in force within or outside India;</li>
                                                                <li>violate the terms of the Agreement.</li>
                                                            </ul>
                                                        </li>

                                                        <li>Marico does not pre-screen User Content. Marico has no obligation to monitor any User Content. However, Marico at its discretion and/or in accordance with applicable law may remove any User Content from the Website, if such User Content is in violation of these Terms of Use or any applicable law. Where Marico removes any User Content from the Website, Marico may inform the user who had posted such User Content. Such actions do not in manner negate or dilute Marico position as an intermediary or impose any liability on Marico with respect to User Content.</li>

                                                        <li>You shall solely be responsible for maintaining the necessary computer / mobile equipment, internet connections and other software and technologies that may be required to access, use and transact on the Website. You may incur access or data fees from third parties at your cost in connection with your purchase and/or use of the services.</li>
                                                        <li>You shall use this Website, and any voucher/coupons purchased through it, for personal, non-commercial use only and shall not re-sell the same to any other person.</li>
                                                        <li>You may need to install updates that we or any third party introduce from time to time to use the services, Products, Website including downloads and required functionality, such as bug fixes, patches, enhanced functions, missing plug-ins and new versions (collectively referred to as "Updates"). By Your use of the Website, it is deemed that you have agreed to receive and install automatically requested Updates.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab15">
                                            <div className="card-header collapsed" id="heading15" data-toggle="collapse"
                                                data-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                                Intellectual Property Rights
                                            </div>
                                            <div id="collapse15" className="collapse" aria-labelledby="heading15"
                                                data-parent="#accordion">
                                                <div className="card-body">

                                                    <ol>
                                                        <li>
                                                            The Website and the processes, and their selection and arrangement, including but not limited to all text, graphics, user interfaces, visual interfaces, sounds and music (if any), artwork and computer code (collectively referred to as the "Content") on the Website is owned and controlled by Marico or its licensors and the design, structure, selection, coordination, expression, look and feel and arrangement of such Content is protected by copyright, patent and trademark laws, and various other intellectual property rights. Through Your use of the Website, by no means are any rights impliedly or expressly granted to You in respect of such Content. Marico reserves the right to change or modify the Content from time to time at its sole discretion.
                                                        </li>

                                                        <li>The trademarks, logos and service marks displayed on the Website ("Marks") are the property of Marico or their vendors/seller or respective third parties. You are not permitted to use the Marks without the prior consent of Marico, the vendor/seller or the third party that may own the Marks.</li>

                                                        <li>
                                                            Unless otherwise indicated or anything contained to the contrary or any proprietary material owned by a third party and so expressly mentioned, Marico owns all intellectual property rights to and into the trademark "Marico Limited", and the Website, including, without limitation, any and all rights, title and interest in and to copyright, related rights, patents, utility models, designs, know-how, trade secrets and inventions (patent pending), goodwill, source code, meta tags, databases, text, content, graphics, icons, and hyperlinks.
                                                        </li>
                                                        <li>
                                                            Except as expressly provided herein, You acknowledge and agree that You shall not copy, republish, post, display, translate, transmit, reproduce or distribute any Content through any medium without obtaining the necessary authorization from Marico or thirty party owner of such Content.
                                                        </li>
                                                    </ol>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab16">
                                            <div className="card-header collapsed" id="heading16" data-toggle="collapse"
                                                data-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                                                Disclaimer of Warranties & Liability
                                            </div>
                                            <div id="collapse16" className="collapse" aria-labelledby="heading16"
                                                data-parent="#accordion">
                                                <div className="card-body">

                                                    <ol>
                                                        <li>
                                                            <p>
                                                                The Website, all the materials and products (including but not
                                                                limited to software) and services, included on or otherwise made
                                                                available to You through this Website are provided on “as is” and
                                                                “as available” basis without any representation or warranties,
                                                                express or implied except otherwise specified in writing. Without
                                                                prejudice to the forgoing paragraph, Marico does not warrant that:
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    This Website will be constantly available, or available at all; or
                                                                </li>
                                                                <li>
                                                                    The information on this Website is complete, true, accurate or non-misleading.
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>Marico will not be liable to you in any way or in relation to the Contents of, or use of, or otherwise in connection with, the Website. Marico does not warrant that this site; information, Content, materials, product (including software) or services included on or otherwise made available to You through the Website; their servers; or electronic communication sent from Us are free of viruses or other harmful components.</li>

                                                        <li>
                                                            Nothing on Website constitutes, or is meant to constitute, advice of any kind. All the Products sold on Website are governed by different state laws and if Seller is unable to deliver such Products due to implications of different state laws, Seller will return or will give credit for the amount (if any) received in advance by Seller from the sale of such Product that could not be delivered to You.
                                                        </li>
                                                        <li>
                                                            You will be required to enter a valid phone number while placing an order on the Website. By registering Your phone number with us, You consent to be contacted by Us via phone calls and/or SMS notifications, in case of any order or shipment or delivery related updates.
                                                        </li>
                                                    </ol>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab17">
                                            <div className="card-header collapsed" id="heading17" data-toggle="collapse"
                                                data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                                Indemnification and Limitation of Liability
                                            </div>
                                            <div id="collapse17" className="collapse" aria-labelledby="heading17"
                                                data-parent="#accordion">
                                                <div className="card-body">

                                                    <ol>
                                                        <li> You agree to indemnify, defend and hold harmless Marico, its
                                                            subsidiaries, affiliates, vendors, agents and their respective
                                                            directors, officers, employees, contractors and agents (hereinafter
                                                            individually and collectively referred to as "indemnified parties") from
                                                            and against any and all losses, liabilities, claims, suits, proceedings,
                                                            penalties, interests, damages, demands, costs and expenses (including
                                                            legal and other statutory fees and disbursements in connection therewith
                                                            and interest chargeable thereon) asserted against or incurred by the
                                                            indemnified parties that arise out of, result from, or in connection
                                                            with (i) Your breach of the Agreement(s); or (ii) any claims made by any
                                                            third party due to, or arising out of, or in connection with, Your use
                                                            of the Website; or (iii) any claim that any content, information or
                                                            materials provided by You caused damage to a third party; or (iv) Your
                                                            violation of any rights of another, including any intellectual property
                                                            rights.</li>

                                                        <li>Marico may notify you of any claims which you shall be liable to
                                                            indemnify Marico against. You shall then be required to consult with
                                                            Marico regarding the course of action to be undertaken in defending such
                                                            a claim. Further, you shall not compromise or settle any claim or admit
                                                            any liability or wrongdoing on the part of Marico without the express
                                                            prior written consent of Marico which can be withheld or denied or made
                                                            conditional by Marico at its sole discretion.</li>

                                                        <li>
                                                            Notwithstanding anything to contrary in the Agreement(s), in no event
                                                            shall Marico., its subsidiaries or affiliates and their respective
                                                            officers, directors, employees, partners be liable to you for any
                                                            special, incidental, indirect, consequential, exemplary or punitive
                                                            damages whatsoever, including those resulting from loss of use, data or
                                                            profits, whether or not foreseeable or whether or not Marico has been
                                                            advised of the possibility of such damages, or based on any theory of
                                                            liability, including breach of contract or warranty, negligence or other
                                                            tortious action, or any other claim arising out of or in connection with
                                                            Your use of or access to the Website, Services or Content.
                                                        </li>
                                                    </ol>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab18">
                                            <div className="card-header collapsed" id="heading18" data-toggle="collapse"
                                                data-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
                                                Terms
                                            </div>
                                            <div id="collapse18" className="collapse" aria-labelledby="heading18"
                                                data-parent="#accordion">
                                                <div className="card-body">

                                                    <ol>
                                                        <li> The Agreement will continue to apply until terminated by either you or
                                                            Marico as set forth below. If you want to terminate your agreement with
                                                            Marico. You may do so by (i) not accessing the Website; or (ii) closing
                                                            Your Account for all of the Services that you use, where Marico has made
                                                            this option available to you.</li>

                                                        <li> You agree that Marico may, at its sole discretion and without prior
                                                            notice, terminate your access to the Website and block your current and
                                                            future access to the Website if Marico determines that You have violated
                                                            the terms of these Terms of Use or any other Agreement(s). You also
                                                            agree that, in the event of any violation by you of the Agreement(s)
                                                            causing irreparable harm to Marico, for which the monetary damages are
                                                            inadequate, and you consent to Marico obtaining any injunctive or
                                                            equitable relief that Marico deems necessary or appropriate in such
                                                            circumstances. These remedies are in addition to any other remedies
                                                            Marico may have at law or in equity.</li>

                                                        <li>
                                                            <p>In addition to clause 11.2 above, Marico may, at any time, with or
                                                                without notice, terminate these Terms of Use (or portion thereof,
                                                                such as any individual Additional Terms) with You if:</p>
                                                            <ul>
                                                                <li>Marico is required to do so by law (for example, where the
                                                                    provision of the Services to You is, or becomes, unlawful), or
                                                                    upon request by any law enforcement or other government
                                                                    agencies;</li>
                                                                <li>The provision of the Services to you by Marico is impossible or
                                                                    in Marico’s opinion, no longer commercially viable;</li>
                                                                <li>Marico has elected to discontinue, with or without reason,
                                                                    access to the Website, the Services (or any part thereof); or
                                                                </li>
                                                                <li>In the event Marico faces any unexpected technical issues or
                                                                    problems that prevent the Website and / or Services from
                                                                    working/ operating.</li>
                                                            </ul>
                                                        </li>

                                                        <li> Marico may also terminate or suspend all or a portion of Your Account
                                                            or access to the Services with or without assigning any reason. Except
                                                            as may be set forth in any Additional Terms applicable to a particular
                                                            Service, termination of Your Account may include: (i) removal of access
                                                            to all offerings within the Website or with respect to the Services;
                                                            (ii) disabling access to the Account Information, including Your
                                                            personal information, log-in ID and password, and all related
                                                            information, files and materials associated with or inside Your Account
                                                            (or any part thereof), and any User Content uploaded by You; and (iii)
                                                            prohibiting further use of the Services.</li>

                                                        <li>You agree that all terminations shall be made by Marico at its sole
                                                            discretion and that Marico shall not be liable to you or any third party
                                                            for any termination of Your Account (and accompanying deletion of your
                                                            Account Information), or Your access to the Website and Services.</li>

                                                        <li>Notwithstanding the foregoing, these Terns of Use will survive
                                                            indefinitely unless and until Marico chooses to terminate them.</li>
                                                    </ol>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab19">
                                            <div className="card-header collapsed" id="heading19" data-toggle="collapse"
                                                data-target="#collapse19" aria-expanded="false" aria-controls="collapse19">
                                                Communications
                                            </div>
                                            <div id="collapse19" className="collapse" aria-labelledby="heading19"
                                                data-parent="#accordion">
                                                <div className="card-body">

                                                    <ol>
                                                        <li>When you use the Website or send emails or other data, information or
                                                            communication to Marico, you agree and understand that you are
                                                            communicating with Marico through electronic records and you consent to
                                                            receive communications via electronic records from Marico periodically
                                                            and as and when required. Marico will communicate with you by email or
                                                            by notices on Website or electronic records on the Website or on your
                                                            mobile number which will be deemed adequate service of notice /
                                                            electronic record to the maximum extent permitted under any applicable
                                                            law,</li>
                                                    </ol>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab20">
                                            <div className="card-header collapsed" id="heading20" data-toggle="collapse"
                                                data-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
                                                General Provisions
                                            </div>
                                            <div id="collapse20" className="collapse" aria-labelledby="heading20"
                                                data-parent="#accordion">
                                                <div className="card-body">

                                                    <ol>
                                                        <li>Notice: All notices with respect to these Terms of Use from Marico will
                                                            be served to you by email or by general notification on the Website. Any
                                                            notice provided to Marico pursuant to these Terms of Use should be sent
                                                            to Grievance Officer at ____________@marico.com</li>

                                                        <li>Assignment: You cannot assign or otherwise transfer the Agreements, or
                                                            any rights granted hereunder or any obligations, to any third party and
                                                            any such assignment or transfer or purported assignment or transfer
                                                            shall be void ab initio. Marico reserves the right to freely assign
                                                            and/or transfer its rights and/ or obligations under the Agreement to
                                                            any third parties without the requirement of seeking your prior consent.
                                                            Marico may inform you of such assignment or transfer in accordance with
                                                            the notice requirements under the Agreement. Marico reserves the right
                                                            to transfer Your Account and Account Information to a third party who
                                                            purchases Marico business as conducted under the Website.</li>

                                                        <li>Severability: If, for any reason, a court of competent jurisdiction
                                                            finds any provision of the Agreement, or portion thereof, to be
                                                            unenforceable, that provision shall be enforced to the maximum extent
                                                            permissible so as to give effect to the intent of the parties as
                                                            reflected by that provision, and the remainder of the Agreement shall
                                                            continue in full force and effect. Marico may amend in a reasonable
                                                            manner such provision to make it enforceable and such amendment will be
                                                            given effect in accordance with the amendment terms of these Terms of
                                                            Use.</li>

                                                        <li> Waiver: Any failure or delay by a party to enforce or exercise any
                                                            provision of the Agreement, or any related right, shall not constitute a
                                                            waiver by such party of that provision or right. The exercise of one or
                                                            more of a party's rights hereunder shall not be a waiver of, or preclude
                                                            the exercise of, any rights or remedies available to such party under
                                                            these Terms of Use or in law or at equity. Any waiver by a party shall
                                                            only be made in writing and executed by a duly authorized officer of
                                                            such party.</li>

                                                        <li>Principal to Principal Relationship: You and Marico are independent
                                                            contractors, and nothing in these Terms of Use will be construed to
                                                            create a partnership, joint venture, association of persons, agency
                                                            (disclosed or undisclosed), franchise, sales representative, or
                                                            employment relationship between You and Marico. As an abundant caution,
                                                            it is clarified that Marico shall not have any right to conclude any
                                                            contract for sale or purchase of Products for and / or on Your behalf
                                                            and both You and Marico have entered this Agreement on principal to
                                                            principal basis.</li>

                                                        <li>Force Majeure: If performance of any service or obligation under these
                                                            Terms of Use or other Agreement by Marico is, or other third parties in
                                                            fulfilment of any purchase or sale transaction (for eg: logistics
                                                            service provider, fulfilment centre, payment gateways etc.) are,
                                                            prevented, restricted, delayed or interfered with by reason of labour
                                                            disputes, strikes, acts of God, floods, lightning, severe weather,
                                                            shortages of materials, rationing, utility or communication failures,
                                                            earthquakes, war, revolution, acts of terrorism, civil commotion, acts
                                                            of public enemies, blockade, embargo or any law, order, proclamation,
                                                            regulation, ordinance, demand or requirement having legal effect of any
                                                            government or any judicial authority or representative of any such
                                                            government, or any other act whatsoever, whether similar or dissimilar
                                                            to those referred to in this clause, which are beyond the reasonable
                                                            control of Marico or its third parties performing such services as
                                                            sub-contractor to Marico and could not have been prevented by reasonable
                                                            precautions (each, a "Force Majeure Event"), then Marico shall be
                                                            excused from such performance to the extent of and during the period of
                                                            such Force Majeure Event. Marico shall exercise all reasonable
                                                            commercial efforts to continue to perform its obligations hereunder.
                                                        </li>

                                                        <li>Grievance Officer: In compliance with Information Technology Act, 2000
                                                            and the rules made thereunder, the Grievance Officer of Marico for the
                                                            purpose of this Agreement shall be Mr. Mayuresh Purandare with email
                                                            address: mayuresh.purandare@marico.com. Marico may change the aforesaid
                                                            details from time to time under intimation to You.</li>


                                                    </ol>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab21">
                                            <div className="card-header collapsed" id="heading21" data-toggle="collapse"
                                                data-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
                                                Feedback and Information
                                            </div>
                                            <div id="collapse21" className="collapse" aria-labelledby="heading21"
                                                data-parent="#accordion">
                                                <div className="card-body">

                                                    <ol>
                                                        <li>Any feedback You provide to this Website shall be deemed to be
                                                            non-confidential. Marico shall be free to use such information on an
                                                            unrestricted basis. Further, by submitting the feedback, You represent
                                                            and warrant that (i) Your feedback does not contain confidential or
                                                            proprietary information of You or of third parties; (ii) Marico is not
                                                            under any obligation of confidentiality, express or implied, with
                                                            respect to the feedback; (iii) Marico may have something similar to the
                                                            feedback already under consideration or in development; and (iv) You are
                                                            not entitled to any compensation or reimbursement of any kind from
                                                            Marico, for the feedback under any circumstances.</li>

                                                        <li>To clarify, Marico may at its discretion, make any modifications or
                                                            changes to the Website, Content and / or Services on the basis of such
                                                            feedback, however Marico shall not be obliged to do so. Further, in the
                                                            event that Marico makes any changes or modifications to the Website,
                                                            Content and / or Services on the basis of any such feedback, You shall
                                                            not have any rights or title (including any intellectual property
                                                            rights) in such changes or modifications to the Website, Content and /
                                                            or Services. You expressly waive any and all rights in such changes or
                                                            modifications to the Website, Content and / or Services, and assign to
                                                            Marico, all worldwide rights and title (including any intellectual
                                                            property rights) to such changes or modifications to the Website,
                                                            Content and / or Services, in perpetuity. You hereby waive all rights
                                                            under Section 19(4) of the Indian Copyright Act, 1957, or other similar
                                                            provisions in laws of any jurisdiction, in relation to any such changes
                                                            or modifications to the Website, Content and / or Services.</li>


                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab22">
                                            <div className="card-header collapsed" id="heading22" data-toggle="collapse"
                                                data-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
                                                Additional Terms for Online Purchases of the Product
                                            </div>
                                            <div id="collapse22" className="collapse" aria-labelledby="heading22"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <ol>
                                                        <li>All commercial/contractual terms are offered by and agreed to between
                                                            Buyers and Sellers alone. The commercial/contractual terms include
                                                            without limitation price, shipping costs, payment methods, payment
                                                            terms, date, period and mode of delivery, warranties related to products
                                                            and services and after sales services related to products and services.
                                                            Marico does not have any control or does not determine or advise or in
                                                            any way involve itself in the offering or acceptance of such
                                                            commercial/contractual terms between the Buyers and Sellers.</li>

                                                        <li>Marico does not make any representation or Warranty as to specifics
                                                            (such as quality, value, salability, etc) of the products or services
                                                            proposed to be sold or offered to be sold or purchased on the Website.
                                                            Marico does not implicitly or explicitly support or endorse the sale or
                                                            purchase of any products or services on the Website. Marico accepts no
                                                            liability for any errors or omissions, whether on behalf of itself or
                                                            third parties.</li>

                                                        <li> Marico is not responsible for any non-performance or breach of any
                                                            contract entered into between Buyers and Sellers. Marico cannot and does
                                                            not guarantee that the concerned Buyers and/or Sellers will perform any
                                                            transaction concluded on the Website. Marico shall not and is not
                                                            required to mediate or resolve any dispute or disagreement between
                                                            Buyers and Sellers.</li>

                                                        <li> Marico does not make any representation or warranty as to the
                                                            item-specifics (such as legal title, creditworthiness, identity, etc) of
                                                            any of its Users. You are advised to independently verify the bona fides
                                                            of any particular User that You choose to deal with on the Website and
                                                            use Your best judgment in that behalf.</li>

                                                        <li>Marico does not at any point of time during any transaction between
                                                            Buyer and Seller on the Website come into or take possession of any of
                                                            the products or services offered by Seller nor does it at any point gain
                                                            title to or have any rights or claims over the products or services
                                                            offered by Seller to Buyer.</li>

                                                        <li>The Website is only a platform that can be utilized by Users to reach a
                                                            larger base to buy and sell products or services. Marico is only
                                                            providing a platform for communication and it is agreed that the
                                                            contract for sale of any of the products or services shall be a strictly
                                                            bipartite contract between the Seller and the Buyer.</li>

                                                        <li>At no time shall Marico hold any right, title or interest over the
                                                            products nor shall Marico have any obligations or liabilities in respect
                                                            of such contract.</li>

                                                        <li>Marico is not responsible for unsatisfactory or delayed performance of
                                                            services or damages or delays as a result of products which are out of
                                                            stock, unavailable or back ordered.</li>

                                                        <li>You shall independently agree upon the manner and terms and conditions
                                                            of delivery, payment, insurance etc. with the seller(s) that you
                                                            transact with.</li>
                                                        <li>Disclaimer: Pricing on any product(s) as is reflected on the Website may
                                                            due to some technical issue, typographical error or product information
                                                            published by seller may be incorrectly reflected and in such an event
                                                            seller may cancel such your order(s).</li>
                                                        <li>You release and indemnify Marico and/or any of its officers and
                                                            representatives from any cost, damage, liability or other consequence of
                                                            any of the actions of the Users of the Website and specifically waive
                                                            any claims that you may have in this behalf under any applicable law.
                                                            Notwithstanding its reasonable efforts in that behalf, Marico cannot
                                                            take responsibility or control the information provided by other Users
                                                            which is made available on the Website. You may find other User's
                                                            information to be offensive, harmful, inconsistent, inaccurate, or
                                                            deceptive. Please use caution and practice safe trading when using the
                                                            Website.</li>
                                                        <li>Please note that there could be risks in dealing with underage persons
                                                            or people acting under false pretence.</li>
                                                    </ol>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab23">
                                            <div className="card-header collapsed" id="heading23" data-toggle="collapse"
                                                data-target="#collapse23" aria-expanded="false" aria-controls="collapse23">
                                                Term of Sale
                                            </div>
                                            <div id="collapse23" className="collapse" aria-labelledby="heading23"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Offer and Acceptance of the Product

                                                    </p>
                                                    <ol>
                                                        <li>The Seller hereby makes an offer to sell the Products listed on the
                                                            Website and the Buyer upon agreeing to purchase the Products so listed
                                                            hereby accepts such offer to sell by the Seller. Accordingly, the
                                                            contract for sale of the Product is a bipartite contract between Buyer
                                                            and the Seller. Marico is not a third party beneficiary under such
                                                            bipartite contract. The Buyer understands and agrees that the offer for
                                                            sale of the Product by the Seller is not an absolute or an
                                                            un-conditional offer. Such offer to sale by the Seller is subject to
                                                            repudiation by the Seller at any time before the delivery of the Product
                                                            to the Buyer and without any obligation to assign or provide any reason
                                                            for such repudiation and without any consent from the Buyer and without
                                                            any liability or any obligation towards the Buyer. The Seller and Buyer
                                                            understand and agree that Marico has the right to cancel any sale
                                                            transaction, listing or acceptance (i) for any reason in accordance with
                                                            the Seller Agreement, these Terms of Sale, Website Terms of Use, Privacy
                                                            Policy or under any contract or policy between Marico on one hand and
                                                            the Seller or the Buyer on the other hand, or (ii) under an order or
                                                            instruction from any statutory, quasi-judicial or judicial authority.
                                                        </li>

                                                        <li>The availability of the Product under the offer to sell is subject to
                                                            change without notice prior to the purchase of the Product by the Buyer.
                                                            However, there may be circumstances where the Product may not be
                                                            available to be delivered to the Buyer after the purchase transaction.
                                                            In such an event, Seller may cancel such purchase transaction without
                                                            any recourse to Buyer and without any liability to the Seller or to
                                                            Marico. If Buyer's order is so cancelled, after the payment has been
                                                            processed, the said amount will be reversed / remitted to the Buyer
                                                            either to the bank account provided by the Buyer for such reversal, or
                                                            to the payment instrument of the Buyer from which payment was made, or
                                                            to any pre-paid payment instrument account of the Buyer.</li>

                                                        <li>
                                                            <p> With respect to the sale of Product by Seller to the Buyer, the
                                                                Seller hereby represents and warrants to the Buyer that:</p>
                                                            <ul>
                                                                <li>
                                                                    Seller has the right to sell the Products to the Buyer on or
                                                                    through the Website;
                                                                </li>
                                                                <li>
                                                                    Buyer shall have and enjoy quiet possession of the Products;
                                                                </li>
                                                                <li>
                                                                    Products shall be free from any charge or encumbrance in favor
                                                                    of third party;
                                                                </li>
                                                                <li>
                                                                    Buyer shall be entitled to all the warranties and other
                                                                    collaterals applicable to the Product or as generally made
                                                                    available by the manufacturer or seller of the Product;
                                                                </li>
                                                                <li>
                                                                    Product shall meet the description and specifications as
                                                                    provided on the Website.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ol>
                                                    <p>Pricing Information
                                                    </p>
                                                    <ol>
                                                        <li>The Selling Price of the Product is subject to change without notice
                                                            prior to the purchase of the Product by the Buyer. Due to technical
                                                            reasons there may be errors in Selling Price which may be corrected by
                                                            the Marico at any time and any acceptance of offer of sale by the Buyer
                                                            of the Products subject to such faulty Selling Price shall, subject to
                                                            discretion of the Seller, not be a valid acceptance and such transaction
                                                            can be avoided by the Seller.</li>

                                                        <li>All prices are inclusive of applicable taxes unless stated otherwise.
                                                        </li>
                                                    </ol>
                                                    <p>Delivery of the Product
                                                    </p>
                                                    <ol>
                                                        <li>There are various delivery models for delivery of purchased Product to
                                                            the Buyer, as decided by the Seller. The risk of any damage, loss or
                                                            deterioration of the Products during the course or delivery or during
                                                            transit shall be on the Seller and not on the Buyer. Seller represent
                                                            and warrant that the Products being delivered are not faulty and are
                                                            exactly those Products which are listed on the Website and purchased by
                                                            the Buyer and meet all descriptions and specifications as provided on
                                                            the Website.</li>

                                                        <li>The Product will be delivered to the shipping address provided by the
                                                            Buyer. In the event Buyer's order is not serviceable by logistic service
                                                            providers or by Seller or the delivery address is not located in an area
                                                            that is covered under the order confirmation form, the Seller may
                                                            contact the Buyer for an alternate shipping address on which the Product
                                                            can be delivered by the logistics service provider or by the Seller.
                                                        </li>

                                                        <li> Please note that there is no guaranteed dispatch time and any
                                                            information about the dispatch time is estimate only and should not be
                                                            relied upon as such. Therefore, time is not the essence of the
                                                            bi-partite contract between the Buyer and the Seller for purchase and
                                                            sale of Product on or through the Website. However, the Product shall
                                                            not be delivered to the Buyer unless the Buyer makes the payment of the
                                                            purchase of Product.</li>

                                                        <li>Buyer shall be bound to take delivery of the Products purchased by the
                                                            Buyer that are said to be in a deliverable state. Where Buyer neglects
                                                            or refuses to accept the delivery of the Products ordered by the Buyer,
                                                            the Buyer may be liable to the Seller for such non-acceptance.</li>

                                                        <li>The title in the Products and other rights and interest in the Products
                                                            shall directly pass on to the Buyer from Seller upon delivery of such
                                                            Product and upon full payment of price of the Product. Upon delivery,
                                                            the Buyer is deemed to have accepted the Products. The risk of loss
                                                            shall pass on to the Buyer upon delivery of Product.</li>
                                                        <li> Before accepting delivery of any Product, the Buyer shall reasonably
                                                            ensure that the Product's packaging is not damaged or tampered. No
                                                            Product returns will be accepted by the Seller, once the Product is
                                                            delivered and delivery thereof is accepted by the Buyer.</li>
                                                    </ol>
                                                    <p>Cancellation of transaction / orders
                                                    </p>
                                                    <ol>
                                                        <li> Cancellation by Seller: There may be certain orders that Seller is
                                                            unable to accept and has the right to cancel. Seller reserves the right,
                                                            at its sole discretion, to refuse or cancel any order for any reason
                                                            whatsoever. Some situations that may result in Buyer's order being
                                                            cancelled include, without limitation, non-availability of the Product
                                                            or quantities ordered by Buyer or inaccuracies or errors in pricing
                                                            information. Seller may also require additional verifications or
                                                            information before processing any order. All such cancellation shall be
                                                            without any recourse to Buyer and without any liability to the Seller or
                                                            Marico. If Buyer's order is so cancelled, after the payment has been
                                                            processed, the said amount will be reversed / remitted to the Buyer
                                                            either to the bank account provided by the Buyer for such reversal, or
                                                            to the payment instrument of the Buyer from which payment was made, or
                                                            to any pre-paid payment instrument account of the Buyer. Marico shall
                                                            have the sole discretion to determine the mode of reversal from the
                                                            above options. In the event the Buyer has availed benefit under any
                                                            marketing or promotional offer (including promotional code) given by
                                                            Marico for the purchase of the Product, the amount under such marketing
                                                            or promotional offer (including promotional code) shall not be refunded
                                                            in case of cancellation of order. The above is the sole remedy of the
                                                            Buyer and the sole liability of the Seller and sole responsibility of
                                                            Marico for any cancellation of the purchase order by the Seller or
                                                            otherwise other than by the Buyer.</li>

                                                        <li>Cancellation by the Buyer: In case of requests for order cancellations,
                                                            Seller reserves the right to accept or reject requests for order
                                                            cancellations for any reason whatsoever. As part of usual business
                                                            practice, if Seller receives a cancellation notice and the order has not
                                                            been processed, Seller may cancel the order and refund the entire amount
                                                            to Buyer within a reasonable period of time. Seller will not be able to
                                                            cancel orders that have already been processed by the Seller. Buyer
                                                            agrees not to dispute the decision made by Seller and accept Seller's
                                                            decision regarding the cancellation.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card" id="tab24">
                                            <div className="card-header collapsed" id="heading24" data-toggle="collapse"
                                                data-target="#collapse24" aria-expanded="false" aria-controls="collapse24">
                                                Terms and Conditions for Product Subscription
                                            </div>
                                            <div id="collapse24" className="collapse" aria-labelledby="heading24"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <ol>
                                                        <li>The Seller may also provide Buyers with an option to buy certain
                                                            products on a subscription based model.</li>

                                                        <li>Under the subscription model the Buyer will get an option to avail
                                                            discounts on certain products if the Buyer subscribes to buying a
                                                            specific quantity of such product for each month of the subscription
                                                            period. The discounts and the products which have a subscription option
                                                            available, will be notified on the website from time to time.</li>

                                                        <li>At the time of placing an order, the Buyer shall click the “Subscribe &
                                                            Save” option available on the website to see the discounts and
                                                            subscriptions available for the selected product. The discounts,
                                                            products and the subscription periods will be decided by the Seller in
                                                            its sole discretion. The discounts availed by the Buyer at the time of
                                                            subscription shall remain unchanged during the subscribed period for the
                                                            Buyer.</li>

                                                        <li>For placing an order for subscription, the Buyer shall choose the
                                                            product, the quantity which shall be delivered, the periodicity of
                                                            delivery (weekly/monthly/ quarterly etc) and the date on which such
                                                            product shall be delivered to the Buyer. For example the Buyer can
                                                            choose to buy a one litre pack of a product, to be delivered every month
                                                            for three months,</li>

                                                        <li>For order placed under the subscription model, the Buyer shall make
                                                            payment for the quantity of the product order for the current month
                                                            using the payment link available on the website or shared with the Buyer
                                                            via email.</li>

                                                        <li>After delivery of the first order under the subscription, for the
                                                            following months, for each order the Seller shall send an email
                                                            notifications to the Buyer on the registered email address, informing
                                                            the Buyer of the product, the quantity subscribed, the order value, the
                                                            delivery date, and the address on which such product would be delivered
                                                            which will also be available to the customer in the ‘My Account’ section
                                                            on the website. The email will also contain a payment link which the
                                                            Buyer shall use to make payment of the order value for the next order.
                                                        </li>
                                                        <li>In case the Buyer is unable to make payment through the payment link
                                                            and/or fails to make the payment via the payment link, the Seller will
                                                            ship the subscribed quantity of the products at the provided address on
                                                            a cash on delivery basis.</li>
                                                        <li>For any Buyer who is not eligible for a payment on delivery option, the
                                                            subscription order will be cancelled if the Buyer fails to make payment
                                                            using the payment link shared on the email.</li>
                                                        <li> Buyers will be notified by email and/or messages if his/her orders have
                                                            been shipped with payment on delivery or if your orders have been
                                                            cancelled due to any reasons.</li>
                                                        <li>The Seller retains a right to change the maximum retail price for the
                                                            products and/or offer discounts on the products at any time in any
                                                            channel of trade.</li>
                                                        <li>In the event the maximum retail price of a product is revised during the
                                                            subscription period, the Seller shall notify the Buyer of the bill value
                                                            as per such revised maximum retail price, after adjustments towards the
                                                            applicable discounts and amount to be paid by the Buyer via the payment
                                                            link shall be modified accordingly.</li>
                                                        <li>The Seller may in its sole discretion decide not to provide such
                                                            subscription models to a specific buyer and/or disallow it in certain
                                                            territories and/or on certain products.</li>
                                                        <li>Each delivery for the subscription shall be under a separate order which
                                                            shall come into existence on the date of payment for such order by the
                                                            Buyer.</li>
                                                        <li>The Buyer shall have an option to make edits to the subscription made.
                                                            The Buyer can edit the quantities subscribed (increase/reduce it), ,
                                                            and/or make edits to his/her contact details through the ‘My Account’
                                                            section on the website.

                                                            Governing Law</li>
                                                        <li>You agree that all claims, differences and disputes arising under or in
                                                            connection with or in relation to the Terms of Sale or any transactions
                                                            entered into on or through the Website or the relationship between you
                                                            and Marico shall be subject to the exclusive jurisdiction of the courts
                                                            at Mumbai, India and you hereby accede to and accept the jurisdiction of
                                                            such courts.</li>
                                                    </ol>
                                                    <p>The ownership of the sensitive personal information collected in this portal
                                                        lies with the individual collecting the information.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab25">
                                            <div className="card-header collapsed" id="heading25" data-toggle="collapse"
                                                data-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                                                Disclaimer by Marico
                                            </div>
                                            <div id="collapse25" className="collapse" aria-labelledby="heading25"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <ol>
                                                        <li>Marico's role is that of an intermediary in the form of an online
                                                            marketplace and is limited to managing the website to enable seller to
                                                            offer to sell the products and to enable buyer to purchase the products
                                                            so offered, and other incidental services to facilitate the transactions
                                                            between sellers and the buyers. Accordingly, the contract for sale of
                                                            any of the products shall be a bipartite contract between seller and the
                                                            buyer. At no time shall Marico have any obligations or liabilities in
                                                            respect of such contract nor shall Marico hold any title in the
                                                            products. The title in the products and other rights and interest in the
                                                            products shall directly pass to the buyer from the seller.</li>

                                                        <li>These terms of sale shall not amend or modify any agreements, contracts,
                                                            terms or policies between the buyer or seller on one hand and Marico on
                                                            the other hand.</li>

                                                        <li>Marico does not control, endorse or accept responsibility for any
                                                            product offered by sellers accessible through the website or any linked
                                                            sites. Marico makes no representations or warranties whatsoever about,
                                                            and shall not be liable for, the seller or any such third parties, their
                                                            products including representations relating to merchantability, fitness
                                                            of a product or service for a particular purpose. Any transactions that
                                                            buyer may have with such third parties are at buyer's own risk. The
                                                            products shall be subject to seller's terms and conditions for warranty,
                                                            service and maintenance, and Marico does not accept any responsibility
                                                            for the same. Marico also does not accept any responsibility for the
                                                            usage of the products by the buyer.</li>

                                                        <li>Marico is in no way responsible or liable for the offer for sale or sale
                                                            of the Product by the Seller to the Buyer, its delivery, the warranty
                                                            terms (if any) related to the Product and the return, refund or
                                                            cancellation of purchase of any Products.</li>

                                                        <li> Buyer expressly acknowledges that the Seller selling the defective
                                                            Product will be responsible to Buyer for any claims that Buyer may have
                                                            in relation to such defective Product and Marico shall not in any manner
                                                            be held liable for the same.</li>

                                                        <li>Marico shall not assume any liability for the non-availability of the
                                                            Product, delivery of the Product directly by the Seller and the
                                                            installation of the Product where required.</li>
                                                    </ol>
                                                    <p>The ownership of the sensitive personal information collected in this portal
                                                        lies with the individual collecting the information.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab26">
                                            <div className="card-header collapsed" id="heading26" data-toggle="collapse"
                                                data-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
                                                Coupons and Vouchers
                                            </div>
                                            <div id="collapse26" className="collapse" aria-labelledby="heading26"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <ol>
                                                        <li>MARICO20: This coupon code is valid only for Marico employees. It is
                                                            applicable only through registered accounts from the official MARICO
                                                            email ID and is valid till 31st December 2021. It is restricted to upto
                                                            3 redemption per email ID per month.</li>

                                                        <li>All coupon codes and vouchers are applicable to limited time period
                                                            offer and at discretion of Marico and Marico reserves the right to
                                                            modify, cancel and change the coupon codes, coupon code usage and terms
                                                            of usage.</li>

                                                        <li>All coupon codes and vouchers will not be valid during any event or sale
                                                            on the platform</li>

                                                        <li>Shipping charges and taxes may apply to the full value of discounted and
                                                            free promotional items bought using the coupon code</li>

                                                        <li>Coupon Codes and gift cards can’t be clubbed with any ongoing offer
                                                            discount/cash back/promotion run by Marico or Marico’s platform</li>

                                                        <li>If the product purchased using a promotional voucher is returned, the
                                                            refund value will include the value of the voucher code.</li>

                                                        <li>Marico has the right to cancel orders if found to be of fraudulent
                                                            nature.</li>

                                                    </ol>
                                                    <p>The ownership of the sensitive personal information collected in this portal
                                                        lies with the individual collecting the information.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab27">
                                            <div className="card-header collapsed" id="heading27" data-toggle="collapse"
                                                data-target="#collapse27" aria-expanded="false" aria-controls="collapse27">
                                                Shipping policy
                                            </div>
                                            <div id="collapse27" className="collapse" aria-labelledby="heading27"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>We always ship your order on the same day or within 24 hours of you placing
                                                        it. Once shipped, you will receive an email with your shipment details.
                                                        Under normal circumstances, your order will reach you within 7 working days.
                                                    </p>
                                                    <p>If you have any queries/concerns related to your shipment, please contact our
                                                        support team saffolasupport@marico.com within 24 hours of receiving the
                                                        product/s.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab28">
                                            <div className="card-header collapsed" id="heading28" data-toggle="collapse"
                                                data-target="#collapse28" aria-expanded="false" aria-controls="collapse28">
                                                Return policy
                                            </div>
                                            <div id="collapse28" className="collapse" aria-labelledby="heading28"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>We’re sure you’ll never want to return a Marico product. However, in the
                                                        unfortunate event the product you have received is damaged/wrong, it can be
                                                        returned to us within 15 days from the date of delivery.</p>
                                                    <p>Simply send an email to saffolasupport@marico.com with photos of invoice and
                                                        product along with your order number. We will respond to your email within
                                                        24 hours and arrange to send your order to you the way it was intended the
                                                        first time.</p>
                                                    <p>In case you no longer want the product –

                                                        For Prepaid Orders: we will refund the order value via the payment gateway.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab29">
                                            <div className="card-header collapsed" id="heading29" data-toggle="collapse"
                                                data-target="#collapse29" aria-expanded="false" aria-controls="collapse29">
                                                Refund policy
                                            </div>
                                            <div id="collapse29" className="collapse" aria-labelledby="heading29"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>A refund can be provided on PREPAID orders only.</p>
                                                    <p>Your refund will be initiated within 3 working days of us receiving the
                                                        refund request and authorizing the refund.</p>
                                                    <p>Your refund will be credited to the account used for the payment of your
                                                        order, an estimated 4-8 days after initiation. Please note that the timing
                                                        of the actual account credit will depend on multiple external agencies such
                                                        as banks and payment gateways.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab30">
                                            <div className="card-header collapsed" id="heading30" data-toggle="collapse"
                                                data-target="#collapse30" aria-expanded="false" aria-controls="collapse30">
                                                Order cancellation
                                            </div>
                                            <div id="collapse30" className="collapse" aria-labelledby="heading30"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>In case you wish to cancel your order before it has been shipped from our
                                                        warehouse, simply drop an email to support@mylivonmysalon.com to let us know
                                                        and we’ll take care of the rest.</p>
                                                    <p>Your refund will be initiated within 3 working days of us receiving the
                                                        refund request and authorizing the refund.</p>
                                                    <p>Even if you’ve pre-paid, rest assured that we’ll refund the amount to you.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="tab31">
                                            <div className="card-header collapsed" id="heading31" data-toggle="collapse"
                                                data-target="#collapse31" aria-expanded="false" aria-controls="collapse31">
                                                Contact Us
                                            </div>
                                            <div id="collapse31" className="collapse" aria-labelledby="heading31"
                                                data-parent="#accordion">
                                                <div className="card-body">
                                                    <p>Reach Us at support@mylivonmysalon.com</p>
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

export default termsCondition