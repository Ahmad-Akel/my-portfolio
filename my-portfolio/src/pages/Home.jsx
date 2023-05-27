import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Me from "../assets/me.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Ahmad Akel</h2>
        <div>
          <img src={Me}></img>
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
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
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
