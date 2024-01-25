import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Header from "./components/header/Header";
import About from "./sections/About";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
const App = () => {
  return (
    <div className="scroll-smooth ">
      <Navbar />
      <Header />
      <main className="">
        <About />
        <Testimonial />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export default App;
