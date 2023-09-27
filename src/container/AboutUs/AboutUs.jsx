import React from "react";
import "./AboutUs.scss";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <>
      <div className="app__container app__about">
        {/* THIS IS THE FIRST BIT ABOUT THE HEADING. */}
        <h2 className="head-s-text">ABOUT ME</h2>
        <div className="head__line"></div>
        {/* THE PAGES CONTENT */}

        <div className="app__content app__flex">
          {/* <img src={images.mainProfile} alt="Franci's" /> */}
          <motion.div
            whileInView={{ scale: [0, 1] }}
            // whileTap={{ scale: [1, 0.9] }}
            transition={{ duration: 0.5 }}
            className="app__flex p-s-text about__paragraph"
          >
            Warm Greeting.I am an electronics and computer engineering student
            at Jomo Kenyatta University of Technology who enjoys interacting
            with embedded systems as well as cloud computing. Check on what I
            have been working on in the portfolio section.
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(AboutUs, "about", "app__whitebg");
