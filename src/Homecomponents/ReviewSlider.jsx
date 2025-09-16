import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import sanityClient from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import bgImg from "../assets/img/bg/test.jpg";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source).url();

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch full image object, not just URL
    sanityClient
      .fetch(
        `*[_type == "testimonial"] | order(_createdAt desc) {
          name,
          role,
          rating,
          text,
          image
        }`
      )
      .then((data) => setTestimonials(data))
      .catch(console.error);
  }, []);

  if (!testimonials.length) return <p>Loading testimonials...</p>;

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
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          style={{ padding: "50px 0" }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="testimonial-slide"
                style={{
                  background: "#fff",
                  padding: "40px",
                  borderRadius: "15px",
                  height: "100%",
                  minHeight: "320px",
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
                  {item.image?.asset && (
                    <img
                      src={urlFor(item.image.asset)}
                      alt={item.name}
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                        marginRight: "20px",
                        objectFit: "cover",
                      }}
                    />
                  )}
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
                </p>
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
