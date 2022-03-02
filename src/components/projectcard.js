import '../styles/app.scss';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";





export function ProjectCard({ projectName }) { 

  // Animation
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .5,
        staggerChildren: 0.2
      }
    }
  };

  const yUp = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1, duration: 1, ease: [0.05, 0.15, 0.30, 0.99] } }
  };

  //Set States for Data to be imported

  //json
  const [reviewData, setReviewData] = useState({});

  //image
  const [reviewImage, setReviewImage] = useState(undefined);

  // const [Var, FunctionSetVar] = useState(InitialState);
  
  //React 
  useEffect(() => {
    async function getFile() {
      
      const reviewFile = await import(`../json/${projectName}.json`);
      const reviewImage = await import(`../logos/${projectName}_logo.svg`);

      //React State Updates
      //Default sets the dynamic import to the state
      setReviewData(reviewFile.default);
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