import React from "react";
import bgImage from "../assets/img/bg/04.jpg"; // Change path & extension if it's actually .jpg/.png
import contactimage from "../assets/img/logo/doct.jpg/";
import Slider from "../Homecomponents/Slider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import SEO from "../Component/SEO";

const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL_2; // Add in your .env

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => toast.error("❌ Failed to send message."));
  };
  return (
    <>
      <SEO
        title="Contact Bluestar Surgical House | Kathmandu"
        description="Get in touch with Bluestar Surgical House for inquiries about medical equipment, surgical instruments, and products. Visit or call us in Kathmandu, Nepal."
        url="https://bluestarsurgicalhouse.com.np/contact"
      />
      <div
        className="breadcrumb-area pt-125 pb-125"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-wrapper">
                <div className="breadcrumb-text">
                  <h2>contact</h2>
                </div>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <span>
                      {" "}
                      {">"}
                      {"  "}contact
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-area pos-rel pt-100 ">
        <div className="shape d-none d-xl-block">
          <div className="shape-item con-01">
            <img alt />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="contact-address-wrapper mt-20 mb-30">
                <div className="section-title mb-30">
                  <h2>Conatct Us</h2>
                </div>
                <ul className="contact-address-link">
                  <li>
                    <div className="contact-address-icon f-left mr-25">
                      <i class="fa-regular fa-map" />
                    </div>
                    <div className="contact-address-text">
                      <span>Office Address</span>
                      <h4>
                        Tripureshwor
                        <br />
                        Kathmandu
                      </h4>
                    </div>
                  </li>
                  <li>
                    <div className="contact-address-icon f-left mr-25">
                      <i class="fa-solid fa-phone" />
                    </div>
                    <div className="contact-address-text">
                      <span>Phone Number</span>
                      <h4>
                        <a href="tel:015351096" className="hover:underline">
                          01-5351096
                        </a>
                        <br />
                        <a href="tel:015351086" className="hover:underline">
                          01-5351086
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <div className="contact-address-icon f-left mr-25">
                      <i className="far fa-envelope-open" />
                    </div>
                    <div className="contact-address-text">
                      <span>Email</span>
                      <h4
                        style={{
                          wordWrap: "break-word",
                          wordBreak: "break-all",
                        }}
                      >
                        <a
                          href="mailto:bluestarsurgicalhouse@gmail.com"
                          className="hover:underline text-[#4E97FD]"
                        >
                          bluestarsurgicalhouse@gmail.com
                        </a>
                        <br />
                        <a
                          href="mailto:info@bluestarsurgicalhouse.com.np"
                          className="hover:underline text-[#4E97FD]"
                        >
                          info@bluestarsurgicalhouse.com.np
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li>
                    <div className="contact-address-icon f-left mr-25">
                      <i className="far fa-clock" />
                    </div>
                    <div className="contact-address-text">
                      <span>Office Time</span>
                      <h4>
                        Sunday - Friday, <br /> 10 am - 07 pm
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="contact-img mb-30">
                <img src={contactimage} alt />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center mb-65">
                <h2>Send Us A Message</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <form
                id="contacts-form"
                className="contacts-form"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-12">
                    <div className=" contactss-name">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className=" contactss-email">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email Address"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className=" contactss-website">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className=" contactss-message">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message..."
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contacts-form-button text-center">
                      <button className="c-btn">
                        send message <i className="far fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="map-area pb-60">
        <div class="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.819426332729!2d85.3161662!3d27.691975400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b2f51553ab%3A0xaa188d5ea062422!2sM8R8%2BQFC%2C%20Tripura%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1756126455200!5m2!1sen!2snp"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default Contact;
