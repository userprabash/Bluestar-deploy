import React from "react";
import brand01 from "../assets/img/brand/analyticon.webp";
import brand02 from "../assets/img/brand/diatron.webp";
import brand03 from "../assets/img/brand/himedia.webp";
import brand04 from "../assets/img/brand/kapitol.png";
import brand05 from "../assets/img/brand/qualigens.webp";
import brand06 from "../assets/img/brand/remi.webp";
import brand07 from "../assets/img/brand/sartorius.webp";
import brand08 from "../assets/img/brand/sinocare.webp";
import brand09 from "../assets/img/brand/agappe.png";
import brand10 from "../assets/img/brand/apel.png";
import brand11 from "../assets/img/brand/buita.png";
import brand12 from "../assets/img/brand/jian.jpeg";
import brand13 from "../assets/img/brand/rayto.png";
import brand14 from "../assets/img/brand/healgen.png";
import brand15 from "../assets/img/brand/sdbio.png";
import brand16 from "../assets/img/brand/labline.png";
import brand17 from "../assets/img/brand/jayna.png";
import brand18 from "../assets/img/brand/werfen.png";

// each brand has { image, link }
const brands = [
  { img: brand01, url: "https://www.analyticon-diagnostics.com/en/" },
  { img: brand02, url: "https://www.diatron.com" },
  { img: brand03, url: "https://www.himedialabs.com" },
  { img: brand04, url: "https://kapitol-group.com/" },
  { img: brand05, url: "https://www.qualigens.com" },
  { img: brand06, url: "https://www.remilabworld.com" },
  { img: brand07, url: "https://www.sartorius.com" },
  { img: brand08, url: "https://www.sinocare.com" },
  { img: brand09, url: "https://www.agappe.com" },
  { img: brand10, url: "http://www.apel.co.jp/?lang=en" },
  { img: brand11, url: "https://www.biota-labs.com/" },
  { img: brand12, url: "https://www.gdjianlian.com/" },
  { img: brand13, url: "http://www.rayto.com/en/" },
  { img: brand14, url: "https://www.healgen.com" },
  { img: brand15, url: "https://www.sdbiosensor.com" },
  { img: brand16, url: "https://www.labline.com" },
  { img: brand17, url: "http://www.rayto.com/en/" },
  { img: brand18, url: "https://www.werfen.com" },
];

const Brandimg = () => {
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
                  <img
                    className="img-brand"
                    src={brand.img}
                    alt={`Brand ${index + 1}`}
                  />
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
