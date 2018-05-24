import React from 'react';
import './ProjectCard.css';
import GoIconPack from 'react-icons/lib/go';
import FaIconPack from 'react-icons/lib/fa'
import GoChevronRight from 'react-icons/lib/go/chevron-right';
import GoArrowRight from 'react-icons/lib/go/arrow-right';

const ProjectCard = ({project,topline, image, link}) => {
  return(
    <div className="project-container">
      <div className="content">
          <div className="content-overlay"></div>
          <img className="content-image" src={image}/>
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
