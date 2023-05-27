import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ image, name, id, tag }) => {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <ul class="bordered-list">
        <li>javascript</li>
        <li>Node</li>
        <li>Redux</li>
      </ul>
    </div>
  );
};

export default ProjectItem;
