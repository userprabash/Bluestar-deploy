// src/pages/OrderNow.jsx
import bgImage from "../assets/img/bg/04.jpg";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import { toast } from "react-toastify";
const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;
import SEO from "../Component/SEO";

export default function OrderNow() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    email: "",
    phone: "",
    quantity: 1,
    details: "",
  });
  const [loading, setLoading] = useState(false);
  // Fetch product titles from Sanity
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "product"]{ _id, title }`)
      .then((data) => setProducts(data))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Google Apps Script Web App URL (replace with your deployed script link)

  // Submit order to Google Sheets
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // required for Google Apps Script
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        toast.success("✅ Order submitted successfully!");
        setFormData({
          product: "",
          name: "",
          email: "",
          phone: "",
          quantity: 1,
          details: "",
        });
      })
      .catch(() => {
        toast.error("❌ Failed to submit order. Try again!");
      });
  };

  return (
    <>
      <SEO
        title="Place Your Order | Bluestar Surgical House"
        description="Order medical instruments, surgical equipment, and accessories online at Bluestar Surgical House in Kathmandu, Nepal. Fast and reliable delivery."
        url="https://bluestarsurgicalhouse.com.np/order"
      />
      {/* Breadcrumb */}
      <div
        className="breadcrumb-area pt-125 pb-125"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-wrapper">
                <div className="breadcrumb-text">
                  <h2>Order Now</h2>
                </div>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <span>Order Now</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Left: Order Form */}
          <div className="col-lg-6 col-md-12">
            <div className="p-4 border rounded shadow-sm bg-white h-100">
              <h2 className="mb-4 text-center">Place Your Order</h2>
              <form onSubmit={handleSubmit}>
                {/* Product Dropdown */}
                <div className="mb-3">
                  <label className="form-label">Choose Product</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="form-control"
                  >
                    <option value="">Select a product</option>
                    {products.map((p) => (
                      <option key={p._id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label"> Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                    autoComplete="off"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                    autoComplete="off"
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-control"
                    autoComplete="off"
                  />
                </div>

                {/* Quantity */}
                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    min="1"
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>

                {/* Additional Details */}
                <div className="mb-3">
                  <label className="form-label">Additional Details</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows="3"
                    className="form-control"
                  />
                </div>

                {/* Submit Button */}
                <button
                  style={{ backgroundColor: "#4E97FD", color: "white" }}
                  type="submit"
                  className="btn w-100"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Order"}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Quick Contact */}
          <div className="col-lg-6 col-md-12">
            <div className="p-4 border rounded shadow-sm bg-light h-100">
              <h2 className="mb-4 text-center">Quick Contact</h2>
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  📞 <strong>Phone:</strong> 01-5351096
                </li>
                <li className="mb-3">
                  📍 <strong>Location:</strong> Tripureshwor, Kathmandu
                </li>
                <li className="mb-3">
                  🕒 <strong>Opening Hours:</strong> Sun–Fri: 10:00 AM – 7:00 PM
                </li>
                <li className="mb-3">
                  ✉️ <strong>Email:</strong> bluestarsurgicalhouse@gmail.com
                </li>
              </ul>
              <div className="map-container mt-4">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.819426332729!2d85.3161662!3d27.691975400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b2f51553ab%3A0xaa188d5ea062422!2sM8R8%2BQFC%2C%20Tripura%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1756126455200!5m2!1sen!2snp"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
