import React from "react";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";
import IntroVideo from "./components/IntroVideo";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Photos from "./components/Photos";
import Earnings from "./components/Earnings";
import Team from "./components/Team";
import Course from "./components/Course";
import Testimonials from "./components/Testimonials";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="scroll-smooth font-sans antialiased">
      <Toaster position="top-center" />
      <Navbar /> {/* Add Navbar at the top */}
      <section id="home">
        <Hero />
      </section>
      <section id="intro-video">
        <IntroVideo />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="photos">
        <Photos />
      </section>
      <section id="earnings">
        <Earnings />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="course">
        <Course />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="social">
        <SocialLinks />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default App;
