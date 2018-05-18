import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({project}) => {
  return(
    <div className="project-container">
      {project}
    </div>
    )
  }

export default ProjectCard;
