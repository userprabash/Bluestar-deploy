"use client";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { urlFor } from "@/lib/sanityImageUrl";
import styles from "../Style/Brands.module.scss";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const PartnersSection = () => {
  const [brands, setBrands] = useState([]);
  const sliderRef = useRef(null); // ✅ create ref

  useEffect(() => {
    client
      .fetch(
        `*[_type == "brandimg"] | order(_createdAt asc) {
          name,
          url,
          image
        }`
      )
      .then((data) => setBrands(data))
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, // slow scroll
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // continuous
    cssEase: "linear",
    arrows: false,
    swipe: false, // optional: disable dragging
    draggable: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  if (!brands.length) return <p className="text-center">Loading brands...</p>;

  return (
    <div
      className={styles.Brands}
      onMouseEnter={() => sliderRef.current?.slickPause()} // ✅ pause on hover
      onMouseLeave={() => sliderRef.current?.slickPlay()} // ✅ resume on leave
    >
      <h3 className={styles.title}>Our Brands</h3>
      <Slider ref={sliderRef} {...settings} className={styles.slider}>
        {brands.map((brand, index) => (
          <div key={index} className={styles.partnerItem}>
            <a href={brand.url} target="_blank" rel="noopener noreferrer">
              {brand.image ? (
                <Image
                  src={urlFor(brand.image).url()}
                  alt={brand.name || `Brand ${index + 1}`}
                  width={160}
                  height={80}
                  className="img-brand"
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <span>{brand.name}</span>
              )}
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSection;
