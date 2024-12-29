"use client"


import React from "react";
import Image from "next/image";
import { Html, Head, Main, NextScript } from 'next/document';
import { useState } from "react";
import SearIcon from './asset/icon/SearchIcon.svg'
import addToCartIcon from '../assets/icon/AddtocartIcon.svg'
import PersonIcon from '../assets/icon/PersonIcon.svg'
<link href="https://db.onlinewebfonts.com/c/2bf16335573007d828f4197c2b884c04?family=Satoshi" rel="stylesheet" type="text/css"/>





const Navbar: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
    
      {/* Notification Banner */}
      {showBanner && (
        <div className="notification-banner">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <a href="#" className="sign-up-link">
              Sign Up Now
            </a>
          </p>
          <button
            className="close-btn"
            aria-label="Close"
            onClick={() => setShowBanner(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">SHOP.CO</div>
        <ul className="navbar-menu">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">On Sale</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
        </ul>
        <div className="navbar-icons">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for products..."
          />
          <button className="icon-btn"><Image src={addToCartIcon} alt="Person Icon"></Image></button>
          <button className="icon-btn"><Image src={PersonIcon} alt="Person Icon"></Image></button>
          
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
