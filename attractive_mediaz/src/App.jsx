import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudy from "./Components/CaseStudy";
import WhatWeCanDo from "./Components/WhatWeCanDo";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case" element={<About />} />
          <Route path="/whatwecando" element={<WhatWeCanDo />} />
          <Route path="/about" element={<CaseStudy />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
