import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterColmn from '../FooterColmn/FooterColmn'

const Footer = () => {
    const LatestTweets = [

        { name: "Webkul Marketplace Designs" },
        { name: "eMarket - Multi-purpose MarketPlace OpenCart 3 Theme with 30+ Homepages & Mobile Layouts Included" }
    ]
    const ourLocation = [
        { name: "GEC CIRCLE", link: "//google.com/map" },
        { name: "CRB", link: "//google.com/map" },

    ]
    const About = [
        { name: "About us" },
        { name: "Blog" },
        { name: "Special offers" },
        { name: "F.A.Q" },
        { name: "Privacy policy Terms of us" },
        { name: "About us" },

    ]
    const services = [
        { name: "Laptop Repair" },
        { name: "Tablet Repair" },
        { name: "Phone Repair" },
        { name: "Dell Laptop Repair" },
        { name: "Ipad Repair" },
        { name: "Gadget Repair" }

    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterColmn key={1} menuTitle={"Latest Tweets"} menuItems={LatestTweets} />
                    <FooterColmn key={2} menuTitle="Our Services" menuItems={services} />
                    <FooterColmn key={3} menuTitle="About" menuItems={About} />
                    <FooterColmn key={4} menuTitle="Find Us" menuItems={ourLocation}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="media-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="media-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="#"><FontAwesomeIcon className="media-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-white">Call now</h6>
                            <button className="btn btn-outline-light">+27272327</button>
                        </div>
                    </FooterColmn>
                </div>
                <hr />
                <div className="copyRight text-center text-white">
                    <div className="d-flex justify-content-between">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>


                        <p>Get in Touch | <a href="#top" class="text-link text-white">Back to Top</a></p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;