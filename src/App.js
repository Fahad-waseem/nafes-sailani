import React, { useEffect } from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Qualification from "./components/Qualification/Qualification";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/Scrollup/ScrollUp";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
    });
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
