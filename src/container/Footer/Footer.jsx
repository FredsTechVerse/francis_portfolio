import React, { useState } from "react";
// import axios from "../../axios";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import SocialMedia2 from "../../components/SocialMedia2";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // const contact = {
    //   name: formData.username,
    //   email: formData.email,
    //   message: formData.message,
    // };
    setTimeout(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    }, 1500);

    // axios
    //   .post("./contacts", contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      {!isFormSubmitted ? (
        <div>
          <h2 className="head-text">
            Let's <span>work</span> together
          </h2>

          <div className="app__footer-cards">
            <div className="app__footer-card ">
              <img src={images.email} alt="email" />
              <a href="mailto:franciswainainag@gmail.com" className="p-text">
                EMAIL
              </a>
            </div>
          </div>

          <div className="app__footer-form">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="footer-text">Thank you for getting in touch!</h3>
          <div className="app__footer-cards">
            <div className="app__footer-card ">
              <img src={images.email} alt="email" />
              <a href="mailto:franciswainainag@gmail.com" className="btn-text">
                Email
              </a>
            </div>
          </div>
        </div>
      )}
      <SocialMedia2 />

      <div className="copyright">
        <p>@2022 FRANCIS GITAU.</p>
        <p>All rights reserved.</p>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
