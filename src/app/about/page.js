"use client";
import React from "react";
import TestimonialsSection from "@/Home-Components/Testimonial";
import Counters from "@/Home-Components/Counter";
import Top3 from "@/Home-Components/Top-3";
import PartnersSection from "@/Home-Components/Brands";
function About() {
  return (
    <>
      <Top3 />
      <Counters />
      <TestimonialsSection />
      <PartnersSection />
    </>
  );
}

export default About;
