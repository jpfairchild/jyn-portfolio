import React, { useEffect, useState } from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header_project';
import '../styles/app.scss';

// Svgs
import flurish from "../illustrations/flurish_lines.svg";

// Images
import image1 from '../images/bld_nav_min.png';
import image2 from '../images/bld_nav_max.png';
import image3 from '../images/bld_time.png';
import image4 from '../images/bld_kanban.png';
import image5 from '../images/bld_chat.png';
import image6 from '../images/bld_pivot.png';
import image7 from '../images/bld_invoice.png';


// Page Function
function Project ({ match }) {

  return (
    <div className="container">

      <Header />

      <div className='row project-page-title-description justify-content-center w-100'>

        <div className='pp-ts'>
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

        <div className='flex-images'>
            <img className='image-project-page mr-lg-40 mb-40' src={image1} alt='image1'/>
            <img className='image-project-page mr-lg-40 mb-40' src={image2} alt='image2'/>
            <img className='image-project-page mr-lg-40 mb-40' src={image3} alt='image3'/>
            <img className='image-project-page mr-lg-40 mb-40' src={image4} alt='image4'/>
        </div>
        
      </div>

      {/* Mid Role Text */}
      <div className='row project-page-mid-role justify-content-center w-100'>
        <p className='project-page-p'>Time Tracking, Kanban, Chat, Mentions, oh my.</p>
      </div>
      
      {/* ------ 2nd of Mocks ------ */}
      <div className='row image-set m-10 m-lg-10'>

        <div className='flex-images'>
            <img className='image-project-page mr-lg-40 mb-40' src={image5} alt='image5'/>
        </div>
        
      </div>

      {/* Mid Role Text */}
      <div className='row project-page-mid-role justify-content-center w-100'>
        <p className='project-page-p'>Time Tracking, Kanban, Chat, Mentions, oh my.</p>
      </div>

      {/* ------ 3rd of Mocks ------ */}
      <div className='row image-set m-10 m-lg-10'>

        <div className='flex-images'>
            <img className='image-project-page mr-lg-40 mb-40' src={image6} alt='image6'/>
            <img className='image-project-page mr-lg-40 mb-40' src={image7} alt='image7'/>
        </div>
        
      </div>








      <Footer />
    </div>
  );
}

export default Project ;