import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div
        className="footer-area pt-80 pb-25"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            {/* About Company */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-wrapper mb-30">
                <h3 className="footer-title" style={{ color: "#222" }}>
                  About Company
                </h3>
                <div className="footer-text">
                  <p style={{ color: "#555" }}>
                    Bluestar Surgical House provides trusted surgical and
                    medical equipment to healthcare professionals across Nepal.
                    Committed to quality, reliability, and timely delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-wrapper ml-80 mb-30">
                <h3 className="footer-title" style={{ color: "#222" }}>
                  Useful Links
                </h3>
                <div className="footer-link">
                  <ul>
                    <li>
                      <Link to="/" style={{ color: "#007BFF" }}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" style={{ color: "#007BFF" }}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" style={{ color: "#007BFF" }}>
                        Our Product
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" style={{ color: "#007BFF" }}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="footer-wrapper ml-80 mb-30">
                <h3 className="footer-title" style={{ color: "#222" }}>
                  Categories
                </h3>
                <div className="footer-link">
                  <ul>
                    <li style={{ color: "#444" }}>Bio Chemistry</li>
                    <li style={{ color: "#444" }}>Electrolyte</li>
                    <li style={{ color: "#444" }}>Hematology</li>
                    <li style={{ color: "#444" }}>Hemostatic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-area mr-70 ml-70 pt-25">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="copyright">
                <p style={{ color: "#333" }}>
                  Copyright <i className="far fa-copyright"></i> 2025{" "}
                  <Link
                    to="/"
                    style={{ color: "#333", textDecoration: "none" }}
                  >
                    Blustar Surgical House
                  </Link>
                  . All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="footer-bottom-link f-right">
                <p style={{ color: "#333" }}>
                  Website developed by{" "}
                  <a
                    href="https://prabashnepal.com.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007BFF", fontWeight: "bold" }}
                  >
                    Prabash Nepal
                  </a>{" "}
                  & maintained by{" "}
                  <a
                    href="https://purushotambhandari.com.np"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007BFF", fontWeight: "bold" }}
                  >
                    Purushotam Bhandari
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
