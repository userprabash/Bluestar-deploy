"use client";

import dynamic from "next/dynamic";
import {
  FaSpa,
  FaShoppingBasket,
  FaPills,
  FaHeadSideVirus, // replacement for FaHeadSideMask
  FaBriefcaseMedical,
  FaCapsules,
  FaStethoscope,
} from "react-icons/fa";

// dynamically load react-slick so it doesn't run in SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featuredsection = () => {
  const categories = [
    { icon: "icon-skincare", title: "Beauty" },
    { icon: "icon-food", title: "Grocery" },
    { icon: "icon-medicine", title: "Pharmacy" },
    { icon: "icon-mask-1", title: "Surgical Mask" },
    { icon: "icon-medical", title: "Medkits" },
    { icon: "icon-food", title: "Medicine" },
    { icon: "icon-stethoscope", title: "Stethoscope", products: 1 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
      { breakpoint: 476, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="featured-section style-3 pt-4">
      <div className="container-fluid">
        <Slider {...settings}>
          {categories.map((cat, index) => (
            <div className="featured-item" key={index}>
              <div className="icon">
                <i className={cat.icon}></i>
              </div>
              <div className="text">
                <h2>
                  <a href="">{cat.title}</a>
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Featuredsection;
