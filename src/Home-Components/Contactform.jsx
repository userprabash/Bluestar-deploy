"use client";
import React, { useState } from "react";
import styles from "../Style/Contact.module.scss"; // Import the CSS Module

const ContactForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for the agreement checkbox
  const [agreed, setAgreed] = useState(false);

  // State for submission status
  const [status, setStatus] = useState("");

  // Handler for text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setStatus("You must agree to the rules & policies.");
      return;
    }

    setStatus("Submitting...");
    console.log("Form Data Submitted:", formData);

    // For demonstration purposes:
    setTimeout(() => {
      setStatus("Message sent successfully!");
    }, 1000);
  };

  return (
    <section className={styles.contactForm}>
      <div className="container">
        <div className={styles.sectionCapture}>
          <h2 className={styles.sectionHeading}>Reach out today</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.fieldRow}>
            {/* Left Column */}
            <div className={`${styles.fieldCol} ${styles.colMd6}`}>
              <div className={styles.fieldRow}>
                {/* Name Field */}
                <div className={styles.fieldCol}>
                  <label htmlFor="name" className={styles.fieldLabel}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.formInput}
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Email Field */}
                <div className={styles.fieldCol}>
                  <label htmlFor="email" className={styles.fieldLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Phone Field */}
                <div className={styles.fieldCol}>
                  <label htmlFor="phone" className={styles.fieldLabel}>
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className={styles.formInput}
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className={`${styles.fieldCol} ${styles.colMd6}`}>
              <div className={styles.fieldCol}>
                <label htmlFor="message" className={styles.fieldLabel}>
                  Message
                </label>
                <textarea
                  rows="5"
                  id="message"
                  name="message"
                  className={`${styles.formTextarea} ${styles.heightMd100}`}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className={styles.contactFormBtn}>
            <div className={styles.fieldRow}>
              {/* Checkbox */}
              <div className={`${styles.fieldCol} ${styles.colMd6}`}>
                <label className={styles.custCheckboxLabel}>
                  <input
                    type="checkbox"
                    className={styles.custCheckbox}
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <span className={styles.custCheck}></span>
                  <span className={styles.loginRead}>
                    I agree to the <a href="#">rules & policies</a> and
                    acknowledge that my info will be stored safely following the
                    data guidelines.
                  </span>
                </label>
              </div>
              {/* Submit Button */}
              <div className={styles.fieldCol}>
                <button
                  type="submit"
                  className={`${styles.btnStyle2} ${
                    agreed ? styles.active : styles.disabled
                  }`}
                  disabled={!agreed}
                >
                  Submit now
                </button>
              </div>
            </div>
          </div>

          {/* Submission Status Message */}
          {status && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
