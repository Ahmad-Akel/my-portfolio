import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Me from "../assets/me.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Ahmad Akel</h2>
        <div className="imageContainer">
          <img src={Me} style={{ height: "250px" }}></img>
        </div>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/ahmadakel/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="mailto:ahmad.oudai1999@gmail.com" target="_blank">
            <EmailIcon />
          </a>
          <a href="https://github.com/Ahmad-Akel" target="_blank">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills" style={{ backgroundColor: "white" }}>
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, NPM BootStrap,
              MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Java Spring, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Typescript, Java, Python, C#</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
