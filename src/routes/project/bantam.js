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
import image16 from '../../images/bantam_v1.png';
import image17 from '../../images/bantam_v2.png';
import image18 from '../../images/bantam_v3.png';


// Page Function
function Bantam() {

  return (
    <div className="container">

      <Header />

      <div className='row project-page-title-description justify-content-center w-100'>

        <div className='pp-ts'>
          <h1 className='pp-title'>Bantam Tools</h1>
          <h2 className='pp-sub-text'>THROUGH ALUMINUM LIKE BUTTER</h2>
        </div>

        <p className='project-page-p'>Bantam is on the cutting edge of computer controlled milling 
          (pun intended). They have made an incredibly precise and small milling machine that is '
          magnitudes cheaper than the status quo. I helped them redesign their desktop software used 
          to make designs and control the machine.
        </p>

      </div>

      <div className='body-content'>

        {/* ------ 1st of Mocks ------ */}
        <div className='row'>

          <div className='row flurish-d-none m-20'>
            <div className='flurish-parent d-none d-sm-block d-md-block d-lg-block d-xl-block mt-lg-100'>
              <h3 className='flurish-text-vertical'>MOCKS</h3>
              <img className='flurish-vertical' src={flurish} alt='flurish' />
            </div>
          </div>

          <div className='flex-bantam'>
            <img className=' image-width-100 image10' src={image10} alt='image10'/>
            <img className=' image-width-100 image15' src={image15} alt='image15'/>
          </div>
          
        </div>

        {/* Text Paragraph */}
        <div className='row project-page-mid-role justify-content-center w-100 mb-lg-180 mb-md-80'>
          <p className='project-page-p'>I build frameworks, not one offs. Software companies that are 
            constantly evolving and need to adapt to new user needs every year. I only build designs to be 
            reusable. If Bantam ever needs to add a new tool, process, set of controls, they will be able 
            to adapt the designs for their new needs easily. </p>
        </div>
        
        {/* ------ 2nd of Mocks ------ */}
        <div className='row m-10 m-lg-10'>

          <div className='flex-bantam'>
            <img className='image-width-40' src={image11} alt='material' />
            <img className='image-width-40' src={image12} alt='initial' />
          </div>
          
        </div>

        {/* ------ 3rd of Mocks ------ */}
        <div className='row m-10 m-lg-10'>
          <div className='flex-bantam'>
              <img className='bantam-illustrations ' src={image14} alt='image14'/>
          </div>
        </div>

        {/* Text Paragraph */}
        <div className='row project-double-text justify-content-center w-100'>

          <div className='flurish-parent d-none d-sm-block d-md-block d-lg-block d-xl-block mr-lg-40'>
            <h3 className='flurish-text-vertical'>QUALITY MATTERS</h3>
            <img className='flurish-vertical flurish-quality' src={flurish} alt='flurish' />
          </div>

          <p className='project-page-p mb-60 mr-lg-80'>Bantam was a great partner to work with because they knew what 
            they wanted to be done, but also where they wanted to focus in the future. In certain areas of the app I 
            gave them minimal viable product designs, but also future versions.</p>

          <p className='project-page-p mb-60'>Additional features fully ready for implementation when engineers have 
            time, but things that didn&#x27;t need to be part of the first iteration. </p>
        </div>

        {/* ------ 2nd of Mocks ------ */}
        <div className='row m-10 m-lg-10'>

          <div className='flex-bantam'>
            <img className='image-width-33' src={image16} alt='material' />
            <img className='image-width-33' src={image17} alt='initial' />
            <img className='image-width-33' src={image18} alt='initial' />
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Bantam;