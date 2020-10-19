import React, { Component } from 'react';
import '../../styles/SASS/css/style.css';

class FrontFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="frontFooterMain">
                <div className="footerUpper">
                    <div className="footerCats">
                        <div className="footerCatsTitle">
                            <span>Categories</span>
                        </div>
                        <ol className="footerCatsList">
                            <li><a>Bamboo</a></li>
                            <li><a>Brass</a></li>
                            <li><a>Cane</a></li>
                            <li><a>Ceramic</a></li>
                            <li><a>Coir</a></li>
                            <li><a>Lacquer</a></li>
                            <li><a>Leather</a></li>
                            <li><a>Rush &amp; Reed</a></li>
                            <li><a>Textile</a></li>
                            <li><a>Wood</a></li>
                        </ol>
                    </div>
                    <div className="contactUs">
                        <div className="footerCatsTitle">
                            <span>Contact us</span>
                        </div>
                        <div className="contactUslinks"><a>Send us a message</a></div>
                        <div className="contactUslinks"><a href="mailto:info@ecraftt.com">info@ecraftt.com</a></div>
                        <div className="contactUslinks"><a href="tel:+94-71-7171771">+94-71-7171771</a></div>
                    </div>
                </div>
                <hr/>
                <div className="footerLower">
                    <div className="allRights">
                        <span>&copy; 2019 Ecraftt. All rights reserved.</span>
                    </div>
                    <div className="policies">
                        <div className="terms"><a>Terms of use</a></div>&nbsp;|&nbsp;
                        <div className="terms"><a>Privacy policy</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontFooter;