"use client";

const Banner = () => {
  return (
    <section className="static-hero-s3">
      <div className="container-fluid">
        <div className="static-hero-wrap">
          <div className="row">
            {/* Left side (Big Discount) */}
            <div className="col-lg-12 left-col">
              <div className="static-hero-left">
                <div className="row align-items-center">
                  {/* Text */}
                  <div className="col-lg-6">
                    <div className="hero-content">
                      <h1>Welcome to</h1>
                      <h2>BS Surgical Suppliers</h2>
                      <p>
                        We are a trusted supplier of high-quality laparoscopic
                        and surgical instruments, serving hospitals, clinics,
                        and medical professionals across Nepal. Our mission is
                        to deliver safe, reliable, and affordable medical
                        equipment that supports better patient care and
                        successful outcomes.
                      </p>
                      <a className="btn-style-1">All Products</a>
                    </div>
                  </div>

                  {/* Hero Image */}
                  <div className="col-lg-6">
                    <div className="hero-img">
                      <img
                        src="https://www.bluestarsurgicalhouse.com.np/assets/mispahx58-CpuVuPT6.png"
                        alt="Discount"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Right decorative shape */}
                <div className="right-shape">
                  <img src="/img/shape2.png" alt="shape" />
                </div>
              </div>
            </div>

            {/* Right side banners (if needed) */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
