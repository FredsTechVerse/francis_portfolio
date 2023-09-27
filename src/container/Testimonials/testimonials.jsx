import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import { motion } from "framer-motion";
// import axios from "../../axios";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./testimonials.scss";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials([
      {
        name: "Sarah Wanjiru",
        company: "Jomo Kenyatta University Of Technology",
        imageUrl:
          "https://freds-portfolio.s3.ap-southeast-1.amazonaws.com/Testimonial-1652524405838.jpeg",
        feedback:
          "Francis is a super awesome engineer.He has a burning desire to learn new things and improve on his knowledge",
      },
    ]);
  }, []);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className="head-s-text">TESTIMONIALS</h2>
      <div className="head__line"></div>

      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imageUrl}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="f-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__whitebg"
);

// export default Testimonial;
