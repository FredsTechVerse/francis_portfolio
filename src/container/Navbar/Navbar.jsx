import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>
          FRANC<span>IS</span>
        </h1>
      </div>
      <ul className="app__navbar-links">
        {[
          "home",
          "about",
          "services",
          "skills",
          "works",
          "testimonials",
          "contact",
        ].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <RiMenu3Fill onClick={() => setToggle(!toggle)} />
      </div>

      {toggle && (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__navbar-dropdown"
        >
          <HiX onClick={() => setToggle(false)} />
          <ul>
            {[
              "home",
              "about",
              "services",
              "skills",
              "testimonials",
              "contact",
            ].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
