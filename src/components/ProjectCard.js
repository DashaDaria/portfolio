import React from 'react';
import './ProjectCard.css';
import GoArrowRight from 'react-icons/lib/go/arrow-right';

const ProjectCard = ({project,topline, image, link}) => {
  return(
    <div className="project-container">
      <div className="content">
          <div className="content-overlay"></div>
          <img className="content-image" src={image} alt=""/>
          <div className="content-details fadeIn-left">
            <h3>{project}</h3>
            <p>{topline}</p>
            <p><a className="details-button" value="Details" href={link}>Details <GoArrowRight/></a></p>
          </div>
      </div>
    </div>
    )
  }

export default ProjectCard;




//
// <div className="project-container">
// <img src={image} alt="project" className="image" />
// <div className="overlay">
//   <div className="project-text">
//     <h3>{project}</h3>
//     <p>{topline}</p>
//     <p><a className="details-button" href={link}>Details <GoArrowRight/></a></p>
//     </div>
//   </div>
// </div>
