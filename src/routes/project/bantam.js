import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header_project';
import '../../styles/app.scss';

// Svgs
import flurish from "../../illustrations/flurish_lines.svg";

// Images
import image10 from '../../images/bantam_overview.png';
import image11 from '../../images/bantam_material.png';
import image12 from '../../images/bantam_initial.png';
import image13 from '../../images/bantam_probe.png';
import image14 from '../../images/bantam_illustrations.png';
import image15 from '../../images/bantam_overview_small.png';

// Page Function
function Bantam() {

  return (
    <div className="container">

      <Header />

      <div className='row project-page-title-description justify-content-center w-100'>

        <div className='pp-ts'>
          <h1 className='pp-title mr-md-40'>Bantam Tools</h1>
          <h2 className='pp-sub-text'>THROUGH ALUMINUM LIKE BUTTER</h2>
        </div>

        <p className='project-page-p'>Bantam is on the cutting edge of computer controlled milling 
          (pun intended). They have made an incredibly precise and small milling machine that is '
          magnitudes cheaper than the status quo. I helped them redesign their desktop software used 
          to make designs and control the machine.
        </p>

      </div>

      {/* ------ 1st of Mocks ------ */}
      <div className='row image-set m-10 m-lg-10'>

        <div className='row flurish-d-none m-20'>
          <div className='flurish-parent d-none d-sm-block d-md-block d-lg-block d-xl-block mt-lg-100'>
            <h3 className='flurish-text-vertical'>MOCKS</h3>
            <img className='flurish-vertical' src={flurish} alt='flurish' />
          </div>
        </div>

        <div className='flex-images flex-images-bantam'>
          <img className='image-project-page mr-lg-40 mb-80 image10
            d-none d-sm-none d-md-none d-lg-block d-xl-block' src={image10} alt='image10'/>
          <img className='image-project-page mr-lg-40 mb-80 image15 
            d-none d-sm-block d-md-block d-lg-none d-xl-none' src={image15} alt='image15'/>
        </div>
        
      </div>

      {/* Text Paragraph */}
      <div className='row project-page-mid-role justify-content-center w-100 mb-180'>
        <p className='project-page-p'>I build frameworks, not one offs. Software companies that are 
          constantly evolving and need to adapt to new user needs every year. I only build designs to be 
          reusable. If Bantam ever needs to add a new tool, process, set of controls, they will be able 
          to adapt the designs for their new needs easily. </p>
      </div>
      
      {/* ------ 2nd of Mocks ------ */}
      <div className='row image-set m-10 m-lg-10'>

        <div className='flex-images flex-images-bantam'>
          <img className='image-project-page image-project-bantam mr-lg-80 mb-40' src={image11} alt='material' />
          <img className='image-project-page image-project-bantam mr-lg-40 mb-40' src={image12} alt='initial' />
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
        <div className='flex-images flex-images-bantam'>
            <img className='bantam-illustrations mb-40 image7' src={image14} alt='image7'/>
        </div>
      </div>

      {/* Text Paragraph */}
      <div className='row project-double-text justify-content-center w-100'>

        <div className='flurish-parent d-none d-sm-block d-md-block d-lg-block d-xl-block mr-lg-40'>
          <h3 className='flurish-text-vertical'>QUALITY MATTERS</h3>
          <img className='flurish-vertical flurish-quality' src={flurish} alt='flurish' />
        </div>

        <p className='project-page-p mb-60 mr-lg-80'>I think engineers get a bad rep with the design community for 
          implimenting designs poorly. This is half true, but often I find designers aren&#x27;t 
          communicating well, having checkins during the engineering team during the coding process 
          and made zero specs around their designs.</p>

        <p className='project-page-p mb-60'>I&#x27;m a huge fan on making specs for engineers. Often specs act as 
        blueprints and then when something is off, you can pull up the spec and it acts as almost a 
        contract that you can hold the engineer too.</p>
      </div>

      {/* ------ 4th of Mocks ------ */}
      <div className='row image-set m-10 m-lg-10'>
        <div className='flex-images flex-images-bantam'>
            {/* <img className='image-project-page mr-lg-40 mb-40 image8' src={image14} alt='image8'/>
            <img className='image-project-page mr-lg-40 mb-40 image9' src={image15} alt='image9'/> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Bantam;