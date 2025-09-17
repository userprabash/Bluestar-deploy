import React from "react";

function Top3() {
  return (
    <>
      <section className="feature-section container-fluid py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 px-5">
            <h2 className="section-title mb-5">
              Your Trusted Partner in Surgical & Medical Supplies
            </h2>

            <div className="feature-item d-flex mb-4">
              <div className="feature-icon">
                <img src="/check.svg" alt="check icon" />
              </div>
              <div>
                <h5 className="fw-bold">Comprehensive Product Range</h5>
                <p>
                  At BS Surgical Suppliers, we bring together a complete range
                  of surgical instruments, laboratory essentials, and pharmacy
                  equipment — all under one roof. Whether you are setting up a
                  new clinic, expanding a hospital, or stocking your pharmacy,
                  we ensure that you get everything you need from a single,
                  reliable source.
                </p>
              </div>
            </div>

            <div className="feature-item d-flex mb-4">
              <div className="feature-icon">
                <img src="/check.svg" alt="check icon" />
              </div>
              <div>
                <h5 className="fw-bold">Quality You Can Trust</h5>
                <p>
                  We believe healthcare professionals should never compromise on
                  quality. That’s why all our products are carefully sourced
                  from trusted manufacturers and meet international standards of
                  durability and safety. Every item we deliver is built to
                  support accurate diagnoses, safe procedures, and long-lasting
                  performance in demanding medical environments.
                </p>
              </div>
            </div>

            <div className="feature-item d-flex">
              <div className="feature-icon">
                <img src="/check.svg" alt="check icon" />
              </div>
              <div>
                <h5 className="fw-bold">Serving Healthcare Professionals</h5>
                <p>
                  For years, BS Surgical Suppliers has been a reliable partner
                  to hospitals, clinics, and pharmacies across Nepal. We take
                  pride in our ability to deliver not just products but also
                  trust, efficiency, and ongoing support. From small practices
                  to large healthcare institutions, we are dedicated to making
                  modern healthcare more accessible and sustainable throughout
                  the country.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 feature-image-container"></div>
        </div>
      </section>
    </>
  );
}

export default Top3;
