import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Projects.scss";

const Work = () => {
  const [works, setWorks] = useState([
    {
      title: "Blink LED",
      description: "Hello world with the arduino.",
      projectLink: "https://youtube.com/shorts/uaMCbCbZ3Rg?feature=share",
      codeLink: "https://github.com/FredzTech/Form_Handling-Front-End-",
      imageUrl:
        "https://hackster.imgix.net/uploads/attachments/939539/blob_f9aEIFJtMW.blob?auto=compress&w=900&h=675&fit=min&fm=jpg",
      tags: ["All", "Embedded Systems"],
    },
    {
      title: "Interfacing Arduino with PIR sensor",
      description:
        "The PIR sensor is used to sense motion. In this case , when motion is detected, the buzzer goes off.",
      projectLink: "https://youtube.com/shorts/M1GduWhraRI?feature=share",
      codeLink: "https://github.com/FredzTech/Form_Handling-Front-End-",
      imageUrl:
        "https://circuitdigest.com/sites/default/files/inlineimages/Arduino-motion-sensor.jpg",
      tags: ["All", "Embedded Systems"],
    },
  ]);
  const [filteredWork, setFilteredWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setFilteredWork(works);
  }, []);

  const handleWorkFilter = (item) => {
    // To toggle the active button.

    setActiveFilter(item); //Saving the tag.
    setAnimateCard([{ x: 150, opacity: 0 }]); // Some bit of a pause one that we can not see.

    setTimeout(() => {
      //Work is filtered base on the saved tag in the active filter variable.
      if (item === "All") {
        setFilteredWork(works);
      } else {
        setFilteredWork(works.filter((work) => work.tags.includes(item)));
      }
      setAnimateCard([{ x: 0, opacity: 1 }]); //Showing the cards once again. the animations is just for the eyes so that we do not see the boring changes.
    }, 900);
  };

  return (
    <>
      {/* <div className="app__work-heading"> */}
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <div className="head__line"></div>
      {/* </div> */}

      {/* THIS ARE THE PILLS HEADING LOOPED OVER FOR AUTOMATED RENDER EACH ATTACHED TO THE CLICK FUNCTION THAT SETS 
THE ACTIVE FILTER STATE TO THE NAME OF THE ITEMS EG WEB DESIGN NA NDO INATUMIKA KUSET COLOR.  */}

      {/* This is the div that is responsible for the tags. */}
      <div className="app__work-filter">
        {["Embedded Systems", "Cloud Computing", "All"].map((item, index) => (
          <p
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex card__text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </p>
        ))}
      </div>

      {/* THIS IS THE DIV THAT IS RESPONSIBLE FOR THE PROJECT LIKE THE CONTAINER BOX. */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {/* THIS IS WHERE THE INDIVIDUAL BOXES ARE CREATED. */}
        {filteredWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            {/* This is the div with the images and the links. */}
            <div className="app__work-img app__flex">
              <img src={work.imageUrl} alt={work.name} />

              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileTap={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.5 }}
                    className="app__flex"
                  >
                    {/* WE ARE AMIMATING THE ICON THE REP FOR THE LINK. */}
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileTap={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              {/* This is the div for the title, heading paragrap ahd the tags. */}
              <h4 className="app__work-heading">{work.title}</h4>
              <p className="app__work-description">{work.description}</p>

              <p className="app__work-tag">{work.tags[1]}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "works");
