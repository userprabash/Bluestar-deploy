import React from "react";
import aboimg from "../assets/img/about/one.png";

function aboutus() {
  return (
    <>
      <div className="about-area about-pb pt-50 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-wrapper pos-rel mb-30">
                <div className="section-title mb-20">
                  <h1>About Us</h1>
                  <br />
                </div>
                <div className="about-item">
                  <ul>
                    <li>
                      <div className="about-text justification">
                        <p>
                          At Blue Star Surgical House, we are dedicated to
                          providing high-quality surgical, medical, and
                          laboratory equipment to hospitals, clinics, and
                          healthcare professionals across Nepal. Our mission is
                          simple — to support the medical community with
                          reliable products, timely delivery, and exceptional
                          service.
                        </p>
                        <p>
                          {" "}
                          With years of experience in the healthcare supply
                          industry, we understand the critical importance of
                          quality and precision. That’s why we source our
                          products from trusted global brands and ensure they
                          meet strict safety and performance standards.
                        </p>
                        <p>
                          From essential surgical instruments to advanced
                          medical devices, Blue Star Surgical House is your
                          trusted partner in delivering solutions that save
                          lives and improve patient care
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-img pos-rel mb-30">
                <img src={aboimg} alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default aboutus;
