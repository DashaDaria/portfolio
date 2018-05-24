import React from 'react';
import './ProjectCard.css';
import GoIconPack from 'react-icons/lib/go';
import FaIconPack from 'react-icons/lib/fa'
import GoChevronRight from 'react-icons/lib/go/chevron-right';

const ProjectCard = ({project, image}) => {
  return(
    <div className="project-container">
    <img src={image} alt="project" className="image" />
    <div className="overlay">
      <div className="project-text">
        {project}
        <p><button className="details-button">Details <GoChevronRight/></button></p>
        </div>
      </div>
    </div>
    )
  }

export default ProjectCard;
