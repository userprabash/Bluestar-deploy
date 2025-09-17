import React from "react";
import Link from "next/link";
import Featuredsection from "@/Navbar/Featuredsection";
import Banner from "@/Home-Components/Banner";
import Top3 from "@/Home-Components/Top-3";
import TestimonialsSection from "@/Home-Components/Testimonial";
import PartnersSection from "@/Home-Components/Brands";
import ProductCard from "@/Home-Components/Products";
import { FaLongArrowAltRight } from "react-icons/fa";
function page() {
  return (
    <>
      <Featuredsection />
      <Banner />
      <Top3 />
      <div className="container mt-4">
        <div className="row mb-30 align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-7">
            <div className="section-title mb-30">
              <h2>Featured Products</h2>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 text-md-right">
            <div className="b-button shop-btn s-btn mb-30 text-end">
              <Link href="/product">
                View All Products <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ProductCard />
      <TestimonialsSection />
      <PartnersSection />
    </>
  );
}

export default page;
