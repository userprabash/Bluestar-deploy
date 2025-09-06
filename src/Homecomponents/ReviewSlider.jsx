import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules"; // <-- Correct for Swiper v10+

import image1 from "../assets/img/testimonial/03.png";
import image2 from "../assets/img/testimonial/04.png";
import image3 from "../assets/img/testimonial/05.png";
import image4 from "../assets/img/testimonial/06.png";
import bgImg from "../assets/img/bg/test.jpg";

const testimonials = [
  {
    img: image1,
    rating: 4.5,
    text: "Bluestar Surgical House has been our trusted partner for over two years. Their surgical and lab equipment are of excellent quality, delivered on time, and supported by a professional team. They’ve truly simplified our procurement process.",
    name: "Sajan",
    role: "Client",
  },
  {
    img: image2,
    rating: 4.5,
    text: "We rely on Bluestar Surgical House for our laboratory instruments, and they never disappoint. Their commitment to quality and customer service makes them stand out from other suppliers in Nepal.",
    name: "Himal",
    role: "Client",
  },
  {
    img: image3,
    rating: 4.5,
    text: "The team at Bluestar House Suppliers goes above and beyond to understand our requirements. From surgical tools to pharmacy essentials, everything we’ve ordered has met international standards at competitive prices.",
    name: "Sapana",
    role: "Client",
  },
  {
    img: image4,
    rating: 4.5,
    text: "What I appreciate most about Bluestar Surgical House is their after-sales support. They are quick to respond and always ensure customer satisfaction. It gives us peace of mind knowing we have a reliable partner.",
    name: "Sitaram",
    role: "Client",
  },
];

const Testimonials = () => {
  return (
    <div
      className="testimonial-area"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>What Our Client’s Say</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40} // Increase spacing between slides
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          style={{ padding: "50px 0" }} // add vertical spacing for the slider
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="testimonial-slide"
                style={{
                  background: "#fff",
                  padding: "40px", // Increase padding
                  borderRadius: "15px", // Slightly bigger rounded corners
                  height: "100%",
                  minHeight: "320px", // Bigger slide height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      marginRight: "20px",
                    }} // bigger image
                  />
                  <div className="test-rating">
                    {[...Array(5)].map((_, i) => {
                      if (i < Math.floor(item.rating))
                        return (
                          <i
                            key={i}
                            className="fas fa-star"
                            style={{ color: "#febd00", marginRight: "3px" }}
                          ></i>
                        );
                      else if (i < item.rating)
                        return (
                          <i
                            key={i}
                            className="fas fa-star-half-alt"
                            style={{ color: "#febd00", marginRight: "3px" }}
                          ></i>
                        );
                      return (
                        <i
                          key={i}
                          className="far fa-star"
                          style={{ color: "#febd00", marginRight: "3px" }}
                        ></i>
                      );
                    })}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    textAlign: "justify",
                    color: "#555",
                  }}
                >
                  {item.text}
                </p>{" "}
                {/* slightly bigger text */}
                <h4 style={{ marginTop: "20px", fontSize: "20px" }}>
                  {item.name}
                </h4>
                <span style={{ color: "#e4573d", fontSize: "16px" }}>
                  {item.role}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
