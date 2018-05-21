import React from 'react';
import './ProjectCard.css';
import patrolli from './patrolli.jpg';


const ProjectCard = ({project}) => {
  return(
    <div className="project-container">
    <img src={patrolli} alt="project" className="image" />
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
