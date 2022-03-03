import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/footer';
import { Header, HeaderProject } from '../../components/header';
import ProjectGrid from '../../components/projectgrid';
import { motion } from 'framer-motion';

// Scss
import '../../styles/app.scss';

// Svgs
import flurish from "../../svgs/flurish_lines.svg";

// ------ Images ------ //

// -- Set 1
// Combined
import BldCombined from '../../images/bld_projectimage.png';
// Dobule
import BldDouble from '../../images/bld_double.png';
// Triple
import BldNavs from '../../images/bld_navs.png';
import BldTime from '../../images/bld_time.png';
import BldKanban from '../../images/bld_kanban.png';

// Rest of images
import BldChat from '../../images/bld_chat.png';
import BldPivot from '../../images/bld_pivot.png';
import BldInvoice from '../../images/bld_invoice.png';
import BldSpec1 from '../../images/bld_nav_both.png';
import BldSpec2 from '../../images/bld_spec.png';



function Bld() {


  // Animation
  const container = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: .3
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
          <h1 className='pp-title mr-20'>Freelance App</h1>
          <h2 className='pp-sub-text'>ORGANIZE YOUR WORK</h2>
        </motion.div>

        <motion.p 
          className='project-page-p text-width-100'
          initial="hidden"
          animate="visible"
          variants={yUp2}
        >
          This project was a worker management tool created  
          for a post covid remote work world. Analogous to  
          And.co, the tool lets you track time, chat, create and 
          assign tasks, invoice clients, form &#38; manage a team.
        </motion.p>

      </div>

      {/* ------ 1st of Mocks ------ */}
      <motion.div 
        className='row justify-content-center mb-lg-140 mb-80'
        initial="hidden"
        animate="visible"
        variants={yUp3}
      >

        <div className='row flurish-d-none m-20'>
          <div className='flurish-parent d-none d-sm-block d-md-block d-lg-block d-xl-block'>
            <h3 className='flurish-text-vertical'>MOCKS</h3>
            <img className='flurish-vertical' src={flurish} alt='flurish' />
          </div>
        </div>

        <div className='flex-images-bld image-width-90 d-none d-sm-none d-md-none d-lg-block d-xl-block p-30'>
          <img className='w-100' src={BldCombined} alt='image1'/>
        </div>

        <div className='flex-images-bld text-center image-width-100 d-none d-sm-none d-md-block d-lg-none d-xl-none p-30'>
          <img className='image-width-33 pb-30' src={BldNavs} alt='image1'/>
          <img className='image-width-100' src={BldDouble} alt='image1'/>
        </div>

        <div className='flex-images-bld text-center image-width-100 d-block d-sm-block d-md-none d-lg-none d-xl-none p-20'>
          <img className='image-width-100 pb-20' src={BldNavs} alt='image1'/>
          <img className='image-width-100 pb-20' src={BldTime} alt='image1'/>
          <img className='image-width-100' src={BldKanban} alt='image1'/>
        </div>
        
      </motion.div>

      {/* Text Paragraph */}
      <div className='row project-page-mid-role justify-content-center w-100 mb-lg-140 mb-80'>
        <p className='project-page-p text-width-100'>Time Tracking, Kanban, Chat, Mentions, oh my.</p>
      </div>
      
      {/* ------ 2nd of Mocks ------ */}
      <div className='row image-set justify-content-center mb-lg-140 mb-100'>

        <div className='flex-images-bld image-width-50 p-20'>
            <img className='w-100' src={BldChat} alt='bldchatimage'/>
        </div>
        
      </div>

      {/* Text Paragraph */}
      <div className='row project-page-mid-role justify-content-center w-100 mb-lg-140 mb-100'>
        <p className='project-page-p text-width-100'>Revenue breakdown by project, by month, by person. 
          Blended rate next to the original estimate was a common ask from clients. Invoicing panel 
          making invoicing simple and easy.</p>
      </div>

      {/* ------ 3rd of Mocks ------ */}
      <div className='row image-set justify-content-center mb-lg-240 mb-200'>
        <div className='flex-images-bld image-width-90 p-20 p-lg-30'>
            <img className='image-width-100 tablet-margin-b-pivot phone-margin-b-pivot web-margin-r-pivot' src={BldPivot} alt='pivot'/>
            <img className='image-width-50' src={BldInvoice} alt='invoice'/>
        </div>
      </div>

      {/* Text Paragraph */}
      <div className='row project-double-text justify-content-center w-100 mb-lg-200 mb-120'>

        <div className='flurish-parent d-none d-sm-none d-md-none d-lg-block d-xl-block mr-lg-40'>
          <h3 className='flurish-text-vertical'>QUALITY MATTERS</h3>
          <img className='flurish-vertical flurish-quality' src={flurish} alt='flurish' />
        </div>

        <p className='project-page-p text-width-51 mb-60 mr-lg-80'>I think engineers get a bad rep 
          with the design community for implementing designs poorly. This is half true, but often I 
          find designers aren&#x27;t communicating well, having check ins during the engineering team 
          during the coding process and made zero specs around their designs.</p>

        <p className='project-page-p text-width-51 mb-60 mr-lg-80'>I&#x27;m a huge fan on making specs 
          for engineers. Often specs act as blueprints and then when something is off, you can pull 
          up the spec and it acts as almost a contract that you can hold the engineer too.</p>
      </div>

      {/* ------ 4th of Mocks ------ */}
      <div className='row image-set justify-content-center'>
        <div className='flex-images-bld image-width-50 p-lg-30 p-20'>
            <img className='image-width-50 pr-40 pb-40 pb-lg-none' src={BldSpec1} alt='image8'/>
            <img className='image-width-50 pb-20 pb-lg-none' src={BldSpec2} alt='image9'/>
        </div>
      </div>

      <div className='mb-100'></div>

      <ProjectGrid />

      <Footer />
    </motion.div>
  );
}

export default Bld;