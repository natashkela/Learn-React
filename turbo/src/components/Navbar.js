import React from 'react';
import companyLogo from '../img/company-logo.png';
import NavbarItem from './Navbar-Item.js'
const Navbar = () => {
  let nav ='{"main":[ { "mainMenuItem":{ "name":"Home", "href":"index.html" }, "dropdownMenuItems":{} }, { "mainMenuItem":{ "name":"Listing", "href":"car-listing-grid.html" }, "dropdownMenuItems":[ { "name":"Car listing grid", "href":"car-listing-grid.html" }, { "name":"Car listing list", "href":"car-listing-list.html" }, { "name":"ListingDetails", "href":"listing-detail.html" } ] }, { "mainMenuItem":{ "name":"Blog", "href":"blog-listing.html" }, "dropdownMenuItems":[ { "name":"Blog Listing", "href":"blog-listing.html" }, { "name":"Blog Post", "href":"post-single.html" } ] }, { "mainMenuItem":{ "name":"Page", "href":"#" }, "dropdownMenuItems":[ { "name":"About", "href":"about-us.html" }, { "name":"Contact Us", "href":"contact-us.html" }, { "name":"Checkout", "href":"checkout.html" }, { "name":"Shopping Cart", "href":"shopping-cart.html" }, { "name":"Registration", "href":"registration.html" } ] }, { "mainMenuItem":{ "name":"Elements", "href":"elements.html" }, "dropdownMenuItems":{} }]}';
  let navigationItems = JSON.parse(nav);
  return (
    <nav className="navbar navbar-default" id="sticker">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html"><img src={companyLogo} alt="" /></a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {Object.values(navigationItems["main"]).map((navItem,index)=>
              <NavbarItem key={index} mainMenuItem={navItem} />
            )}
            <li className="login-register-link right-side-link"><a href="registration.html">
                <i className="icon_lock-open_alt"></i>Login</a>
            </li>
            <li className="dropdown right-side-link">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                         aria-haspopup="true" aria-expanded="false">ENG<span className="ion-chevron-down"></span></a>
              <ul className="dropdown-menu with-language">
                <li><a href="#">Fr</a></li>
                <li><a href="#">De</a></li>
              </ul>
            </li>
            <li className="dropdown right-side-link last">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                                                         aria-haspopup="true" aria-expanded="false">USD<span className="ion-chevron-down"></span></a>
              <ul className="dropdown-menu with-language">
                <li><a href="#">USD</a></li>
                <li><a href="#">Eur</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
