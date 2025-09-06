import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../assets/img/slider/mispahx58.png";
import banner2 from "../assets/img/slider/mispa.png";
import background from "../assets/img/slider/01.jpg";

function Banner() {
  const banners = [banner1, banner2];

  return (
    <section className="hero-area">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div
              className="single-slider slider-height d-flex align-items-center"
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="hero-text mt-90">
                      <div className="hero-slider-caption">
                        <h2 data-animation="fadeInUp" data-delay=".4s">
                          Your Trusted Partner in Healthcare Equipment.
                        </h2>
                      </div>
                      <div className="hero-slider-btn">
                        <Link
                          to="/contact"
                          data-animation="fadeInUp"
                          data-delay=".8s"
                          className="c-btn"
                        >
                          enquiry now <i className="far fa-plus" />
                        </Link>
                        <div
                          className="b-button"
                          data-animation="fadeInUp"
                          data-delay="1s"
                          style={{ animationDelay: "1s" }}
                        >
                          <Link to="/products">
                            hot collection <i className="far fa-plus" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div
                      className="slider-img d-none d-lg-block"
                      data-animation="fadeInRight"
                      data-delay=".8s"
                    >
                      <img
                        style={{ width: "500px", objectFit: "cover" }}
                        src={banner}
                        alt="slider"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Banner;
