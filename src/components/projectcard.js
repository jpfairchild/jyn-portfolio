import '../styles/app.scss';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";





export function ProjectCard({ projectName }) { 

  // Animation
  const yUp = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1, duration: 1 } }
  };

  //Set States for Data to be imported


  //image
  const [reviewImage, setReviewImage] = useState(undefined);

  // const [Var, FunctionSetVar] = useState(InitialState);
  
  //React 
  useEffect(() => {
    async function getFile() {
      
      const reviewImage = await import(`../logos/${projectName}_logo.svg`);

      //React State Updates
      //Default sets the dynamic import to the state
      setReviewImage(reviewImage.default);

    };

    getFile();
    
  })

  //Image
  const image1 = reviewImage && ({
    backgroundImage: `url(${reviewImage})`
  });

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
      <div className='project-img' style={image1}></div>
    </motion.div>
  );
}

export default ProjectCard;