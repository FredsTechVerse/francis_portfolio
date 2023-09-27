import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Services.scss";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices([
      {
        title: "PCB Design",
        description:
          "Bringing electronic circuit to life has always been my passion.",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxgreiPka0HL1fSmfTMq5aA9wlO89j4Ld1aD5FZtInCU0DqTad_s1LGLFpIb2fDfTPD8&usqp=CAU",
      },

      {
        title: "Embedded Software Design",
        description: "I enjoy designing and developing embedded softwares.",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtrW3mqO5acnbMZqGzuszx2gV6e-ohSRf8rgUD91uyTKz25SUHbBkVd5u_kEoGZeyLFKE&usqp=CAU",
      },
      {
        title: "Cloud Computing",
        description: "I enjoy learning and interacting with cloud computing.",
        imageUrl:
          "https://buildertrend.com/wp-content/uploads/2022/06/CloudComputing_Blog_5.20.png",
      },
    ]);
  }, []);

  return (
    <>
      <div className="app__container app__about">
        <h2 className="head-text">
          MY <span>SERVICES</span>
        </h2>
        <div className="head__line"></div>

        <div className="app__profiles">
          {services.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imageUrl} alt={about.title} />
              <h2>{about.title}</h2>
              <p>{about.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Services, "app__about"), "services");
