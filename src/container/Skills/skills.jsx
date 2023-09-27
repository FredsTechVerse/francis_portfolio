import React, { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { RiSettings6Line } from "react-icons/ri";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./skills.scss";
import "bootstrap/dist/css/bootstrap.css";

const Skills = () => {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    setEducation([
      {
        course: "Computer & Electronics Engineering",
        school: "Jomo Kenyatta University of Technology",
      },
    ]);

    setExperience([
      {
        title: "Gear Box Ltd",
        duration: "May 2022 - August 2022",
        pointers: [
          "Interacted with embedded systems",
          "Tackled network programming",
          "Worked with MQTT communication protocol",
        ],
      },
    ]);

    setSkills([
      {
        skill: "Embedded Systems",
        expertise: 90,
      },
      {
        skill: "Micropython",
        expertise: 85,
      },
      {
        skill: "Network Programming",
        expertise: 80,
      },
      {
        skill: "HTML",
        expertise: 95,
      },
      {
        skill: "CSS",
        expertise: 90,
      },
      {
        skill: "Javascript",
        expertise: 80,
      },
      {
        skill: "GIT",
        expertise: 90,
      },
      {
        skill: "C",
        expertise: 75,
      },
      {
        skill: "Linux",
        expertise: 80,
      },
    ]);
  }, []);

  return (
    <>
      <h2 className="head-s-text">
        Skills & <span>Experiences</span>
      </h2>
      <div className="head__line"></div>

      <div className="app__skills-container">
        <div className="app__skills-list">
          {/* EDUCATION */}

          <div className="app__skills-size app__skills-education">
            <h2 className="head-s-text">EDUCATION</h2>
            <div className="skill__line"></div>

            {education.map((education) => (
              <>
                <h4>{education.course}</h4>
                <p>{education.school}</p>
              </>
            ))}
          </div>
          {/* EXPERIENCE */}
          <div className="app__skills-size app__skills-experience">
            <h2 className="head-s-text">EXPERIENCE</h2>
            <div className="skill__line"></div>
            {experience.map((experience) => (
              <>
                <div className="experience-title">
                  <span className="experience-text">{experience.title}</span>
                  <span className="experience-duration">
                    {experience.duration}
                  </span>
                </div>

                {experience.pointers.map((pointer, index) => (
                  <li key={pointer + index} className="app__skills-pointer">
                    <span className="pointer-icon">
                      <RiSettings6Line />
                    </span>
                    <span className="pointer-text">{pointer}</span>
                  </li>
                ))}
              </>
            ))}
          </div>
        </div>

        <div className="app__skills-size app___skills-skills">
          <h2 className="head-s-text">SKILLS</h2>
          <div className="skill__line"></div>

          {skills.map((experience) => (
            <div style={{ width: "320px", padding: 20 }}>
              <h4>{experience.skill}</h4>
              <ProgressBar now={experience.expertise} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
