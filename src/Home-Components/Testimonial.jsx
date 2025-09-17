"use client";

import Slider from "react-slick";
import Image from "next/image";
import styles from "../Style/Testimonial.module.scss";
const testimonials = [
  {
    title: "Fast delivery",
    text: "Fast delivery, pleased receiving sample products along with order!",
    name: "Patrik Smith",
    location: "Los Angeles, CA",
    image: "/img/72x72_photo1.jpg",
  },
  {
    title: "Sent wrong item",
    text: "They sent me the completely wrong products and I had to wait a week for replacement which was a nuisance as I had run out.",
    name: "Sandra Mann",
    location: "New York, NY",
    image: "/img/72x72_photo4.jpg",
  },
  {
    title: "Good price",
    text: "Good price and quality but I'm always disappointed with the slow delivery.",
    name: "Antonio Lopez",
    location: "Albuquerque, NM",
    image: "/img/72x72_photo2.jpg",
  },
  {
    title: "Very easy to deal with",
    text: "Quick and easy to order and great service as always.",
    name: "Amanda Johnson",
    location: "Austin, TX",
    image: "/img/72x72_photo3.jpg",
  },
];

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true, // keep arrows

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className="container-fluid">
        <h2 className={`${styles.sectionTitle} text-center mb-5`}>
          What People Are Saying
        </h2>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>❝</div>
              <h5 className={styles.testimonialTitle}>{item.title}</h5>
              <p className={styles.testimonialText}>{item.text}</p>
              <div className={styles.author}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className={styles.authorImage}
                />
                <div>
                  <strong>{item.name}</strong>
                  <div className={styles.location}>{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
