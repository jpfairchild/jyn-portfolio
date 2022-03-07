import React from 'react';
import { Footer } from '../components/footer';
import { HeaderResume } from '../components/header';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/projectgrid';

// Scss
import '../styles/app.scss';

// PDF
import ResumePDF from "../resume/resume.pdf";

// Svgs
import arrow from "../svgs/arrow.svg";
import ui from "../svgs/ui.svg";
import code from "../svgs/code.svg";
import illustration from "../svgs/illustration.svg";
import animation from "../svgs/animation.svg";
import linklogo from "../logos/logo_linkedin.svg";



function Resume() {

  // Animation
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: .2
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

  const yUp4 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1.6, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };
  
  const yUp5 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1.8, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const yUp6 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 2, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };
  
  const yUp7 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 2.2, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const yUp8 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 2.4, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const yUp9 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 2.6, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const yUp10 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 2.8, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const yUp11 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 3, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const yUp12 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 3.2, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };

  const yUp13 = {
    hidden: { x: 0, y: 20, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 3.4, duration: 1, ease: [0.05, 0.15, 0.30, 0.99]} }
  };



  return (
    <motion.div 
      className="container"
      initial="hidden"
      animate="visible"
      variants={container}
    >

      <HeaderResume />

      {/* Title & Description */}

      <div className='row project-page-title-description justify-content-center mb-lg-140 mb-100'>

        <motion.div 
          className='pp-ts-resume'
          initial="hidden"
          animate="visible"
          variants={yUp}
        >
          <h1 className='resume-title mr-20'>Resume</h1>
          <h2 className='resume-sub-text'>MAKE GOOD SHIT</h2>
          <a className='btn my-20 mr-10' href='https://www.linkedin.com/in/jpfairchild/'>
            <img className='' src={linklogo} alt='linkedin' />
          </a>
          <a className='btn my-20' href={ResumePDF} download>Download PDF</a>
        </motion.div>

        <motion.p 
          className='project-page-p text-width-100'
          initial="hidden"
          animate="visible"
          variants={yUp2}
        >
          I love to be challenged; to think outside the box. 
          I like working with companies that make meaningful connections with people. A place where my 
          co-workers are as passionate about the things they love as I am about design. 
        </motion.p>

      </div>

      {/* Skills */}
      <div className='skills mb-lg-140 mb-100'>
        <div className='flex-resume-skill'>

          <motion.div 
            className='skill-group'
            initial="hidden"
            animate="visible"
            variants={yUp3}
          >
            <img className='resume-skill' src={ui} alt='ui' />
            <h3 className='resume-skill-title'>UX / UI</h3>
          </motion.div>

          <motion.div 
            className='skill-group'
            initial="hidden"
            animate="visible"
            variants={yUp4}
          >
            <img className='resume-skill' src={code} alt='code' />
            <h3 className='resume-skill-title'>CODE</h3>
          </motion.div>

          <motion.div 
            className='skill-group'
            initial="hidden"
            animate="visible"
            variants={yUp5}
          >
            <img className='resume-skill' src={illustration} alt='illustration' />
            <h3 className='resume-skill-title'>ILLUSTRATION</h3>
          </motion.div>

          <motion.div 
            className='skill-group'
            initial="hidden"
            animate="visible"
            variants={yUp6}
          >
            <img className='resume-skill' src={animation} alt='animation' />
            <h3 className='resume-skill-title'>ANIMATION</h3>
          </motion.div>

        </div>
      </div>


      {/* Experience Section Start */}


      {/* Experience Item */}
      <motion.div 
        className='row flex-resume justify-content-center'
        initial="hidden"
        animate="visible"
        variants={yUp7}
      >

        <div className='resume-company'>
          <h1 className='resume-company-title text-width-70'>bld.ai</h1>
          <h2 className='resume-company-year text-width-70'>2020 - 2022</h2>
        </div>

        <p className='project-page-p text-width-50'>Bld is a uber talented growing agency 
          working in a dozen countries. At bld, I managed a design team of 7, executing designs for 150 
          engineers over 20 projects. My role included feedback &#x26; guidance for existing projects, 
          nailing prospective clients, and hiring new designers.</p>

      </motion.div>

      <motion.img 
        className='resume-arrow w-100 mt-100 mb-100' 
        src={arrow} 
        alt='arrow'
        initial="hidden"
        animate="visible"
        variants={yUp8}
      />

      {/* Experience Item */}
      <motion.div 
        className='row flex-resume justify-content-center'
        initial="hidden"
        animate="visible"
        variants={yUp9}
      >

        <div className='resume-company'>
          <h1 className='resume-company-title text-width-70'>cat &#x26; husky</h1>
          <h2 className='resume-company-year text-width-70'>2019 - 2021</h2>
        </div>

        <p className='project-page-p text-width-50'>I co-founded an agency called cat &#x26; husky in 
          2019 with a long time trusted engineering partner. As cat &#x26; husky, we become well known in 
          the machining industry after several successful projects. We were convinced to join bld.ai 
          after hearing their vision on the future of agencies. </p>

      </motion.div>

      <motion.img 
        className='resume-arrow w-100 mt-100 mb-100' 
        src={arrow} 
        alt='arrow'
        initial="hidden"
        animate="visible"
        variants={yUp10}
      />

      {/* Experience Item */}
      <motion.div className='row flex-resume justify-content-center'
        initial="hidden"
        animate="visible"
        variants={yUp11}
      >

        <div className='resume-company'>
          <h1 className='resume-company-title text-width-70'>art platform</h1>
          <h2 className='resume-company-year text-width-70'>2019 - 2022</h2>
        </div>

        <p className='project-page-p text-width-50'>After google, I started an underground art platform. 
        While not financially anything to write home about, it has a small but dedicated community drawing 
        and painting some of the finest art on the internet.</p>

      </motion.div>

      <motion.img 
        className='resume-arrow w-100 mt-100 mb-100' 
        src={arrow} 
        alt='arrow'
        initial="hidden"
        animate="visible"
        variants={yUp12}
      />

      {/* Experience Item */}
      <motion.div 
        className='row flex-resume justify-content-center'
        initial="hidden"
        animate="visible"
        variants={yUp13}
      >

        <div className='resume-company'>
          <h1 className='resume-company-title text-width-70'>google</h1>
          <h2 className='resume-company-year text-width-70'>2015 - 2019</h2>
        </div>

        <p className='project-page-p text-width-50'>I worked at google for 4 years. I worked on a wide range of different projects,
          Google Search, Google Maps, with most of my time spent @ Youtube. I learned how to push good design inside a large rigid organization. 
          But most of my real innovations came in new ways to work with engineering partners.</p>

      </motion.div>

      <div className='mb-100'></div>

      <ProjectGrid />

      <Footer />

    </motion.div>
  );
}

export default Resume;
