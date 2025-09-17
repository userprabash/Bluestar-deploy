"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 1180);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-area header-style-3">
      {/* Header Middle */}
      <div className="header-middle">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Text (desktop only) */}
            <div className="col-lg-5 d-none d-lg-block">
              <p>
                Welcome to B.S. surgical suppliers. We provide medical
                accessories
              </p>
            </div>

            {/* Contact */}
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="header-area-right">
                <div className="profile">
                  <a href="tel:1234567890">
                    <i className="icon-contact"></i>
                    <span>(+800) 1234 5678 90</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address (desktop only) */}
            <div className="col-lg-3 ms-auto d-none d-lg-block text-end">
              <div className="middle-r">
                <p>Tripureshwor, Kathmandu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Area */}
      <div id="header-sticky" className={`menu-area ${sticky ? "sticky" : ""}`}>
        <div className="container-fluid">
          <div className="second-menu">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-3 col-lg-3 col-6">
                <div className="navbar-header">
                  <Link href="/" className="navbar-brand">
                    <img
                      src="https://www.bluestarsurgicalhouse.com.np/assets/BLUESTAR-DDE_J2oE.png"
                      alt="logo"
                      priority
                    />
                  </Link>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="col-xl-7 col-lg-6 d-none d-lg-block">
                <nav className="main-menu">
                  <ul className="nav">
                    <li className="has-submenu">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="has-submenu">
                      <Link href="/about">About</Link>
                    </li>
                    <li className="has-submenu">
                      <Link href="/product">Products</Link>
                    </li>
                    <li className="has-submenu">
                      <Link href="/blog">Blog</Link>\
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Search (desktop only) */}
              <div className="col-xl-2 col-lg-3 d-none d-lg-block">
                <div className="search__container">
                  <input
                    className="search__input"
                    type="text"
                    placeholder="Search products..."
                  />
                  <button className="search__btn" type="submit">
                    <FaSearch />
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button (mobile only) */}
              <div className="col-6 d-lg-none text-end">
                <button
                  className="mobile-menu-toggle"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? "active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}>
        <button
          className="mobile-close"
          onClick={() => setMobileMenuOpen(false)}
        >
          ✕
        </button>
        <ul>
          <li>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
