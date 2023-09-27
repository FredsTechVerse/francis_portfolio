import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex" id="home">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-content">
          <h1 className="app__header-name">FRANCIS GITAU</h1>

          <span className="app__header-info_span">
            {/* Style will be inherited from the parent element */}

            <span className="text__dark">
              <Typewriter
                options={{
                  strings: [
                    " I am a Designer.",
                    " I am a Maker.",
                    " I am an Engineer.",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: 700,
                }}
              />
            </span>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
