import React from "react";
import Hero from "../Components/Hero";
import Specials from "../Components/Specials";
import Testimonials from "../Components/Testimonials";
import Aboutme from "../Components/AboutMe";

export default function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <Aboutme />
    </>
  );
}