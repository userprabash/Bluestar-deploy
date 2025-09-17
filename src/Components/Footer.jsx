import Image from "next/image";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section-s2 footer-22">
      <div className="upper-footer">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="widget about-widget">
                <div className="widget-logo">
                  <Image
                    src="/img/logo.png"
                    alt="BS Surgical Logo"
                    width={180}
                    height={60}
                  />
                </div>
                <p>
                  We proudly supply hospitals and clinics with a wide range of
                  surgical products, ensuring safety, durability, and excellence
                  in every instrument.
                </p>
              </div>
            </div>

            {/* Information */}
            <div className="col col-lg-2 col-md-6 col-sm-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Information</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Delivery</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Secure Payment</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Stores</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Custom Links */}
            <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="widget link-widget custom">
                <div className="widget-title">
                  <h3>Custom Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Legal Notice</a>
                  </li>
                  <li>
                    <a href="#">Prices Drop</a>
                  </li>
                  <li>
                    <a href="#">New Products</a>
                  </li>
                  <li>
                    <a href="#">Best Sales</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="widget subscribe">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i>
                        <FaEnvelope />
                      </i>
                      Email: bssurgicalsuppliers@gmail.com
                    </li>
                    <li>
                      <i>
                        <FaPhoneAlt />
                      </i>
                      Call: +977 9803541809
                    </li>
                    <li>
                      <i>
                        <FaMapMarkerAlt />
                      </i>
                      Tripureshwor, Kathmandu
                    </li>
                    <li>
                      <i>
                        <FaClock />
                      </i>
                      Hours: 10:00 – 18:00, Sun – Fri
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="col copy-left">
              <p className="copyright">
                © 2025 <a href="#">BS Surgical Suppliers</a>. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
