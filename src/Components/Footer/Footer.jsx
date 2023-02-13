import React from 'react'
import FooterLink from './FooterLink'
import './Footer.css'

function Footer() {
return (
    <div>
    <div className="back_to_top">
    <a href="#"> Back to top</a>
    </div>
    <div className="footer">
    <ul>
    <h3>Get to know us</h3>
    <FooterLink lists="Careers" />
    <FooterLink lists="Blog" />
    <FooterLink lists="About Amazon" />
    <FooterLink lists="Investor Relations" />
    <FooterLink lists="Amazon Devices" />
    <FooterLink lists="Amazon Science" />
    </ul>
    <ul>
    <h3>Make Money with us</h3>
    <FooterLink lists="Sell products on Amazon" />
    <FooterLink lists="Sell on Amazon Business" />
    <FooterLink lists="Sell apps on Amazon" />
    <FooterLink lists="Become an Affiliate" />
    <FooterLink lists="Advertise Your Products" />
    <FooterLink lists="Self-Publish with Us" />
    <FooterLink lists="Host an Amazon Hub" />
    </ul>
    <ul>
    <h3>Amazon Payment products</h3>
    <FooterLink lists="Amazon Business Card" />
    <FooterLink lists="Shop with Points" />
    <FooterLink lists="Reload Your Balance" />
    <FooterLink lists="Amazon Currency Converter" />
    </ul>
    <ul>
    <h3>Let Us Help You</h3>
    <FooterLink lists="Amazon and COVID-19" />
    <FooterLink lists="Your Account" />
    <FooterLink lists="Your Orders" />
    <FooterLink lists="Shipping Rates & Policies" />          
    <FooterLink lists="Returns & Replacements" />
    <FooterLink lists="Manage Your Content and Devices" />
    <FooterLink lists="Amazon Assistant" />
    <FooterLink lists="Help" />
    </ul>
        </div>
    </div>
)
}

export default Footer