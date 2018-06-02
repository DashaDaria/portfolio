import React from 'react';
import './ProjectCard.css';
import GoArrowRight from 'react-icons/lib/go/arrow-right';

const ProjectCard = ({project, topline, image, link}) => {
  return(
    <div className="project-container">
      <div className="content">
        <a href={link}>
          <div className="content-overlay"></div>
          <img  className="content-image" src={image} alt=""/>
          <div className="content-details fadeIn-left">
            <div className="project-title">{project}</div>
            <div className="project-topline">{topline}</div>
            <button className="details-button">Details <GoArrowRight/></button>
          </div>
        </a>
      </div>
    </div>
    )
  }

export default ProjectCard;
