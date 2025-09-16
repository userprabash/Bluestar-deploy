import bgImage from "../assets/img/bg/04.jpg"; // Change path & extension if it's actually .jpg/.png
import Slider from "../Homecomponents/Slider";
import { Link } from "react-router-dom";
import aboimg from "../assets/img/about/two.png";
import CounterSection from "../Homecomponents/Counter";
import ReviewSlider from "../Homecomponents/ReviewSlider.jsx";
import Aboutus from "../Homecomponents/Testimonial.jsx";
import SEO from "../Component/SEO.jsx";

function About() {
  return (
    <>
      <SEO
        title="About Bluestar Surgical House | Trusted Medical Supplier"
        description="Learn about Bluestar Surgical House, our mission, and our commitment to providing high-quality medical equipment and surgical instruments in Kathmandu, Nepal."
        url="https://bluestarsurgicalhouse.com.np/about"
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
                  <h2>About</h2>
                </div>
                <ul className="breadcrumb-menu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <span>
                      {" "}
                      {">"}
                      {"  "}About
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aboutus />

      <div className="features-02-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center mb-65">
                <h2>Our Main Goals</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="feature-02-wrapper text-center mb-30">
                <div className="p-feature-text">
                  <h3>Deliver Quality Medical Solutions</h3>
                  <div className="feature-02-icon"></div>
                  <p>
                    Provide reliable, safe, and top-grade surgical products.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="feature-02-wrapper text-center mb-30">
                <div className="p-feature-text">
                  <h3>Support Healthcare Professionals</h3>
                  <div className="feature-02-icon"></div>
                  <p>
                    quip hospitals and clinics with the tools they need to save
                    lives.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="feature-02-wrapper text-center mb-30">
                <div className="p-feature-text">
                  <h3>Ensure Timely Supply</h3>
                  <div className="feature-02-icon"></div>
                  <p>
                    Maintain fast and consistent delivery for critical medical
                    needs.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="feature-02-wrapper text-center mb-30">
                <div className="p-feature-text">
                  <h3>Build Long-Term Trust</h3>
                  <div className="feature-02-icon"></div>
                  <p>
                    Foster lasting relationships with clients through service
                    and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CounterSection />
      <div className="about-area about-pb pt-150 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about-img pos-rel mb-30">
                <img src={aboimg} alt />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-wrapper pos-rel mb-30">
                <div className="section-title mb-40">
                  <h2>Our Mission and Vision</h2>
                </div>
                <div className="about-item">
                  <ul>
                    <li>
                      <div className="about-text">
                        <h4>
                          <i className="far fa-check-circle" />
                          Our Mission{" "}
                        </h4>
                        <p>
                          To deliver safe, durable, and affordable medical
                          products that support healthcare providers in saving
                          lives and improving patient care.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="about-text">
                        <h4>
                          <i className="far fa-check-circle" />
                          Our Vision
                        </h4>
                        <p>
                          To become the leading surgical supplier in Nepal,
                          known for quality, trust, and innovation in healthcare
                          solutions.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewSlider />
      <Slider />
    </>
  );
}

export default About;
