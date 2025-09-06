import React from "react";
// Import your images from the assets folder
import banner1 from "../assets/img/banner/01.jpg";
import banner2 from "../assets/img/banner/02.jpg";
import banner3 from "../assets/img/banner/03.jpg";

function BannerArea() {
  // Define banners manually
  const banners = [
    {
      id: 1,
      title: "Digital Meter",
      subtitle: "Thermometer",
      image: banner1,
    },
    {
      id: 2,
      title: "Gun",
      subtitle: "Thermometer",
      image: banner2,
    },
    {
      id: 3,
      title: "Pulse",
      subtitle: "Oximeter",
      image: banner3,
    },
  ];

  return (
    <div className="banner-area banner-pb pt-30 pb-70 pl-55 pr-55">
      <div className="container-fluid">
        <div className="row">
          {banners.map((banner) => (
            <div className="col-xl-4 col-lg-4" key={banner.id}>
              <div className="banner-wrapper mb-30">
                <div className="banner-img pos-rel">
                  
                    <img
                      src={banner.image}
                      alt={banner.title || "Banner image"}
                      className="w-full rounded-xl shadow-md"
                    />
                  
                  <div className="banner-text">
                    <span>{banner.title}</span>
                    <h2>{banner.subtitle}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerArea;
