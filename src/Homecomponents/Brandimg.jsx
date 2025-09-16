import React, { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => (source ? builder.image(source).url() : "");

const Brandimg = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "brandimg"] | order(_createdAt asc) {
          name,
          url,
          image
        }`
      )
      .then((data) => {
        console.log("Fetched brands:", data); // debug fetched data
        setBrands(data);
      })
      .catch((err) => console.error("Sanity fetch error:", err));
  }, []);

  if (!brands.length) return <p>Loading brands...</p>;

  return (
    <div className="brand-area py-40 pt-10">
      <div className="container">
        <div className="row">
          <div className="section-title text-center mb-65">
            <h2>Our Brands</h2>
          </div>
          {brands.map((brand, index) => (
            <div className="col-xl-2 col-lg-2 col-md-3 col-6" key={index}>
              <div className="single-brand mb-60 text-center">
                <a href={brand.url} target="_blank" rel="noopener noreferrer">
                  {brand.image ? (
                    <img
                      className="img-brand"
                      src={urlFor(brand.image)}
                      alt={brand.name || `Brand ${index + 1}`}
                      style={{ objectFit: "contain", maxHeight: "80px" }}
                    />
                  ) : (
                    <span>{brand.name}</span>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brandimg;
