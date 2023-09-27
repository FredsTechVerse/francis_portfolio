import React from "react";
import { BsGithub, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia2 = () => (
  <div className="app__social2">
    <div>
      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=254792485346"
        rel="noreferrer"
      >
        <BsWhatsapp />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/francis-gitau-35049723b"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        href="https://twitter.com/Franciswgitau?t=SMlYCfI1pbNCvkkOrHm53g&s=09"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        target="_blank"
        href="https://github.com/Gitau01Frank?tab=overview&from=2022-05-01&to=2022-05-31"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia2;
