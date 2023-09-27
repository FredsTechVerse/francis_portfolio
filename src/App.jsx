import "./App.scss";
import React from "react";
import {
  Header,
  About,
  Footer,
  Navbar,
  Services,
  Projects,
  Skills,
  Testimonials,
} from "./container";

const App = () => {
  return (
    <div className="app text__white">
      {/* Let us give the feel of pages to our portfolio. Trying out something different and fancy. We got this. */}
      <Navbar />
      <div className="pages">
        <Header />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default App;
