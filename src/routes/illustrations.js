import React, { useEffect, useState } from 'react';
import { Footer } from '../components/footer';
import { Header, HeaderProject } from '../components/header';
import ProjectGrid from '../components/projectgrid';
import { motion } from 'framer-motion';

// scss
import '../styles/app.scss';

// ------ Images
// Array that cycles through a folder

function importAll(r) {
  let images = {};
  console.log('r', r);
  r.keys().map((item) => { 
    images[item.replace('./', '')] = r(item);
    return false;
  });
  return images;
}

let images = {}

images = importAll(require.context('../illustrations', false, /\.(png|jpe?g|svg)$/));


// Page Function
function Illustrations() {

  // Animation
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 1
      }
    }
  };

  // These animation objects define how the animations display. 
  // n versions is currently only staggering animation timings using (delay: 1)

  const yUp = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: .4, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };
  
  const yUp2 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: .8, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const yUp3 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1.4, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };
  

  return (
    <motion.div 
      className="container"
      initial="hidden"
      animate="visible"
      variants={container}
    >

      <HeaderProject />

      <div className='row project-page-title-description justify-content-center mb-lg-140 mb-100'>

        <motion.div 
          className='pp-ts text-width-100'
          initial="hidden"
          animate="visible"
          variants={yUp}
        >
          <h1 className='pp-title mr-20'>Illustrations</h1>
          <h2 className='pp-sub-text'>IN PURSUIT OF THE VECTOR</h2>
        </motion.div>

        <motion.p 
          className='project-page-p text-width-100'
          initial="hidden"
          animate="visible"
          variants={yUp2}
        >
          Honestly I don't do enough illustrations to ever
          feel comfortable calling myself an illustrator, but I dabble in illustrations. 
          I'm particularly proud of the synthesizer and the halo guns.  
        </motion.p>

      </div>

      {/* ------ 1st of Mocks ------ */}
      <div className='row XXXXX justify-content-center mb-lg-140 mb-80'>

        <motion.div 
          className='XXXXX__slider flex-images-illustrations w-100 rounded-corner'
          initial="hidden"
          animate="visible"
          variants={yUp3}
        >

          {Object.keys(images).map((fileName) => {
            return <img key={fileName} className='image-width-100 XXXXX__slide' src={images[fileName]} alt={fileName}/>;
          })}
  
        </motion.div>
      </div>

      <div className='mb-100'></div>

      <ProjectGrid />

      <Footer />
    </motion.div>
  );
}

export default Illustrations;