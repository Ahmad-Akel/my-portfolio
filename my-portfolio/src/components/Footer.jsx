import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://twitter.com/AhmadAk86120125" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.youtube.com/@ohmycode4462" target="_blank">
          <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com/in/ahmadakel/" target="_blank">
          <LinkedInIcon />
        </a>
        <a
          href="https://ohmycodechallenge.blogspot.com/2022/03/tic-tac-toe.html"
          target="_blank"
        >
          <LanguageIcon />
        </a>
        <a href="https://github.com/Ahmad-Akel" target="_blank">
          <GitHubIcon />
        </a>
      </div>
      <p> &copy; 2023 ahmadakel.com</p>
    </div>
  );
}

export default Footer;
