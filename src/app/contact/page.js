import React from "react";
import { RiMapPinRangeLine, RiPhoneLine, RiMailLine } from "react-icons/ri";
import ContactForm from "@/Home-Components/Contactform";
const ContactBanner = () => {
  return (
    <>
      <div className="contactwrapper">
        <div className="contact-banner-touch section-pt">
          <div className="container">
            <div className="row row-mtm flex-lg-row-reverse align-items-lg-center">
              <div className="col-12 col-lg-7 col-xl-8 animate__fadeIn">
                <div className="contact-banner">
                  <div className="banner-hover">
                    <span className="d-block banner-img br-hidden">
                      <img
                        src="/img/contact-1.jpg"
                        className="w-100 img-fluid"
                        alt="contact-1"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 col-xl-4">
                <div className="contact-touch">
                  <div className="row row-mtm30">
                    <div className="col-12 animate__fadeIn">
                      <div className="contact-touch-content d-flex flex-wrap">
                        <span className="contact-touch-icon width-88 height-88 dominant-color icon-24 d-flex align-items-center justify-content-center extra-bg rounded-circle">
                          <RiMapPinRangeLine className="d-block lh-1" />
                        </span>
                        <div className="contact-touch-info width-calc-88 psl-15 psl-sm-30">
                          <h6 className="font-18 meb-8">Address</h6>
                          <div className="ul-mtm20">
                            <span>1234 MG road, Bengaluru</span>
                            <span>Karnataka 560001, India</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 animate__fadeIn">
                      <div className="contact-touch-content d-flex flex-wrap">
                        <span className="contact-touch-icon width-88 height-88 dominant-color icon-24 d-flex align-items-center justify-content-center extra-bg rounded-circle">
                          <RiPhoneLine className="d-block lh-1" />
                        </span>
                        <div className="contact-touch-info width-calc-88 psl-15 psl-sm-30">
                          <h6 className="font-18 meb-8">Phone</h6>
                          <div className="ul-mtm20">
                            <span>
                              <a
                                href="tel:+919876543210"
                                className="d-inline-block body-dominant-color"
                              >
                                +91 98765-43210
                              </a>
                            </span>
                            <span>
                              <a
                                href="tel:+919988765432"
                                className="d-inline-block body-dominant-color"
                              >
                                +91 99887-65432
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 animate__fadeIn">
                      <div className="contact-touch-content d-flex flex-wrap">
                        <span className="contact-touch-icon width-88 height-88 dominant-color icon-24 d-flex align-items-center justify-content-center extra-bg rounded-circle">
                          <RiMailLine className="d-block lh-1" />
                        </span>
                        <div className="contact-touch-info width-calc-88 psl-15 psl-sm-30">
                          <h6 className="font-18 meb-8">Email</h6>
                          <div className="ul-mtm20">
                            <span>
                              <a
                                href="mailto:info@demowebsite.com"
                                className="d-inline-block body-dominant-color"
                              >
                                info@demowebsite.com
                              </a>
                            </span>
                            <span>
                              <a
                                href="mailto:hello@demowebsite.com"
                                className="d-inline-block body-dominant-color"
                              >
                                hello@demowebsite.com
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <div className="map-area pt-5">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.819426332729!2d85.3161662!3d27.691975400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b2f51553ab%3A0xaa188d5ea062422!2sM8R8%2BQFC%2C%20Tripura%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1756126455200!5m2!1sen!2snp"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
