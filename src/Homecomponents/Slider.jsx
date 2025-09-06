import React from "react";
import Slider from "react-slick";
import { FaInstagram } from "react-icons/fa";

import insta01 from "../assets/img/instagram/01.jpg";
import insta02 from "../assets/img/instagram/02.jpg";
import insta03 from "../assets/img/instagram/03.jpg";
import insta04 from "../assets/img/instagram/04.jpg";
import insta05 from "../assets/img/instagram/05.jpg";
import insta06 from "../assets/img/instagram/06.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [insta01, insta02, insta03, insta04, insta05, insta06, insta01];

const InstagramSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="instagram-area pl-130 pr-130">
      <div className="container-fluid">
        <Slider {...settings} className="instagram-active">
          {images.map((img, index) => (
            <div className="p-0" key={index}>
              <div className="instagram-wrapper">
                <div className="instagram-img">
              
                    <img src={img} alt={`Instagram ${index + 1}`} />
                    
                
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InstagramSlider;