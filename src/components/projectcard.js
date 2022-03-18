import '../styles/app.scss';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


export function ProjectCard({ projectName }) {

  //Set States for Data to be imported
  const [projectMeta, setProjectMeta] = useState({});

  //image
  const [reviewImage, setReviewImage] = useState(undefined);
  
  // Animation
  const yUp = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1, duration: 1 } }
  };
  
  //React 
  useEffect(() => {
    async function getFile() {
      
      const project = projectName;
      const projectMeta = await import(`../json/${project}.json`);
      const reviewImage = await import(`../logos/${project}_logo.svg`);

      //React State Updates
      //Default sets the dynamic import to the state
      setProjectMeta(projectMeta.default);
      setReviewImage(reviewImage.default);

    };

    getFile();
    
  })

  //Image
  const image1 = reviewImage && ({
    backgroundImage: `url(${reviewImage})`
  });

  //Json -> Variables
  const title = projectMeta.projecttitle;
  const type = projectMeta.projecttype;

  return (
    <motion.div 
      className="project-card overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={yUp}
    >
      {/* <div className="movie-card-text my-20 py-20 d-md-flex flex-md-equal">
        <h5 className='line-spacing-title'>{reviewData.movietitle}</h5>
        <h5 className='text-right'>{reviewData.rating}</h5>
      </div> */}
      <div className='project-meta'>
        <h2 className='project-card-title'>{title}</h2>
      </div>
      <div className='project-img' style={image1}></div>
      <div className='project-meta'>
        <h2 className='project-card-type'>{type}</h2>
      </div>
    </motion.div>
  );
}

export default ProjectCard;