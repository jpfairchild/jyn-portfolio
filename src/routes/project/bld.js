import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header_project';
import '../../styles/app.scss';

// Svgs
import flurish from "../../illustrations/flurish_lines.svg";

// Images
import image1 from '../../images/bld_nav_min.png';
import image2 from '../../images/bld_nav_max.png';
import image3 from '../../images/bld_time.png';
import image4 from '../../images/bld_kanban.png';
import image5 from '../../images/bld_chat.png';
import image6 from '../../images/bld_pivot.png';
import image7 from '../../images/bld_invoice.png';
import image8 from '../../images/bld_nav_both.png';
import image9 from '../../images/bld_spec.png';

// Page Function
function Bld() {

  return (
    <div className="container">

      <Header />

      <div className='row project-page-title-description justify-content-center w-100'>

        <div className='pp-ts-bld'>
          <h1 className='pp-title mr-md-40'>Worker Management App</h1>
          <h2 className='pp-sub-text'>ORGANIZE YOUR WORK</h2>
        </div>

        <p className='project-page-p'>This project was a worker management tool created  
          for a post covid remote work world. Analogous to  
          And.co, the tool lets you track time, chat, create and 
          assign tasks, invoice clients, form &#38; manage a team.
        </p>

      </div>

      {/* ------ 1st of Mocks ------ */}
      <div className='row image-set m-10 m-lg-10'>

        <div className='row flurish-d-none m-20'>
          <div className='flurish-parent d-none d-sm-block d-md-block d-lg-block d-xl-block'>
            <h3 className='flurish-text-vertical'>MOCKS</h3>
            <img className='flurish-vertical' src={flurish} alt='flurish' />
          </div>
        </div>

        <div className='flex-images-bld'>
            <img className='image-project-page mr-lg-40 mb-40' src={image1} alt='image1'/>
            <img className='image-project-page mr-lg-40 mb-40' src={image2} alt='image2'/>
            <img className='image-project-page mr-lg-40 mb-40 image3' src={image3} alt='image3'/>
            <img className='image-project-page mr-lg-40 mb-40 image4' src={image4} alt='image4'/>
        </div>
        
      </div>

      {/* Text Paragraph */}
      <div className='row project-page-mid-role justify-content-center w-100'>
        <p className='project-page-p'>Time Tracking, Kanban, Chat, Mentions, oh my. This is some more text</p>
      </div>
      
      {/* ------ 2nd of Mocks ------ */}
      <div className='row image-set m-10 m-lg-10'>

        <div className='flex-images-bld'>
            <img className='mr-lg-40 mb-40 image5' src={image5} alt='image5'/>
        </div>
        
      </div>

      {/* Text Paragraph */}
      <div className='row project-page-mid-role justify-content-center w-100'>
        <p className='project-page-p'>Revenue breakdown by project, by month, by person. 
          Blended rate next to the original estimate was a common ask from clients. Invoicing panel 
          making invoicing simple and easy.</p>
      </div>

      {/* ------ 3rd of Mocks ------ */}
      <div className='row image-set m-10 m-lg-10'>
        <div className='flex-images-bld'>
            <img className='image-project-page mr-lg-40 mb-40 image6' src={image6} alt='image6'/>
            <img className='image-project-page mr-lg-40 mb-40 image7' src={image7} alt='image7'/>
        </div>
      </div>

      {/* Text Paragraph */}
      <div className='row project-double-text justify-content-center w-100'>

        <div className='flurish-parent d-none d-sm-block d-md-block d-lg-block d-xl-block mr-lg-40'>
          <h3 className='flurish-text-vertical'>QUALITY MATTERS</h3>
          <img className='flurish-vertical flurish-quality' src={flurish} alt='flurish' />
        </div>

        <p className='project-page-p mb-60 mr-lg-60'>I think engineers get a bad rep with the design community for 
          implimenting designs poorly. This is half true, but often I find designers aren&#x27;t 
          communicating well, having checkins during the engineering team during the coding process 
          and made zero specs around their designs.</p>

        <p className='project-page-p mr-30 mb-60'>I&#x27;m a huge fan on making specs for engineers. Often specs act as 
        blueprints and then when something is off, you can pull up the spec and it acts as almost a 
        contract that you can hold the engineer too.</p>
      </div>

      {/* ------ 4th of Mocks ------ */}
      <div className='row image-set m-10 m-lg-10'>
        <div className='flex-images-bld'>
            <img className='image-project-page mr-lg-40 mb-40 image8' src={image8} alt='image8'/>
            <img className='image-project-page mr-lg-40 mb-40 image9' src={image9} alt='image9'/>
        </div>
      </div>

      <div className='mb-100'></div>

      <Footer />
    </div>
  );
}

export default Bld;