import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({project, image}) => {
  return(
    <div className="project-container">
    <img src={image} alt="project" className="image" />
    <div className="overlay">
      <div className="project-text">
        {project}
        <p><button>Details</button>
        <button>Github</button></p>
        </div>
      </div>
    </div>
    )
  }

export default ProjectCard;
