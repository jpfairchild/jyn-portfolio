import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header_project';
import '../../styles/app.scss';

// Svgs
import flurish from "../../illustrations/flurish_lines.svg";

// Images
import OverviewLarge from '../../images/bantam_overview.png';
import OverviewSmall from '../../images/bantam_overview_small.png';
import BantamMaterial from '../../images/bantam_material.png';
import BantamInitial from '../../images/bantam_initial.png';
import BantamProbe from '../../images/bantam_probe.png';
import BantamIllustrations from '../../images/bantam_illustrations.png';
import BantamV1 from '../../images/bantam_v1.png';
import BantamV2 from '../../images/bantam_v2.png';
import BantamV3 from '../../images/bantam_v3.png';
import BantamFeed from '../../images/bantam_feed.png';
import BantamFeedExpaneded from '../../images/bantam_feed_expanded.png';
import BantamSpec1 from '../../images/bantam_spec.png';
import BantamSpec2 from '../../images/bantam_spec2.png';


// Page Function
function Bantam() {

  return (
    <div className="container">

      <Header />

      <div className='row project-page-title-description justify-content-center mb-lg-140 mb-100'>

        <div className='pp-ts text-width-100'>
          <h1 className='pp-title'>Bantam Tools</h1>
          <h2 className='pp-sub-text'>THROUGH ALUMINUM LIKE BUTTER</h2>
        </div>

        <p className='project-page-p text-width-100'>Bantam is on the cutting edge of computer controlled milling 
          (pun intended). They have made an incredibly precise and small milling machine that is '
          magnitudes cheaper than the status quo. I helped them redesign their desktop software used 
          to make designs and control the machine.
        </p>

      </div>



      <div className='body-content'>

        {/* ------ 1st set of Mocks ------ */}
        <div className='row mb-140'>

          <div className='flex-bantam'>
            <img className=' image-width-100 image10' src={OverviewLarge} alt='image10'/>
            <img className=' image-width-100 image15' src={OverviewSmall} alt='image15'/>
          </div>
          
        </div>



        {/* Text Paragraph */}
        <div className='row justify-content-center mt-lg-160 mb-lg-160 mb-100'>
          <p className='project-page-p text-width-100'>I build frameworks, not one offs. Software companies that are 
            constantly evolving and need to adapt to new user needs every year. I only build designs to be 
            reusable. If Bantam ever needs to add a new tool, process, set of controls, they will be able 
            to adapt the designs for their new needs easily. </p>
        </div>


        
        {/* ------ 2nd set of Mocks ------ */}
        <div className='row m-10 m-lg-10 mb-lg-160'>

          <div className='flex-bantam'>
            <img className='image-width-40 mb-60' src={BantamMaterial} alt='material' />
            <img className='image-width-40 mb-60' src={BantamInitial} alt='initial' />
          </div>
          
        </div>



        {/* ------ 3rd set of Mocks ------ */}
        <div className='row m-10 m-lg-10'>
          <div className='flex-bantam'>
              <img className='image-width-100 mb-lg-240 mb-100' src={BantamIllustrations} alt='image14'/>
          </div>
        </div>



        {/* Text Paragraph */}
        <div className='row justify-content-center'>

          <div className='flurish-parent d-none d-sm-none d-md-none d-lg-none d-xl-block mr-lg-40'>
            <h3 className='flurish-text-vertical'>QUALITY MATTERS</h3>
            <img className='flurish-vertical flurish-quality' src={flurish} alt='flurish' />
          </div>

          <p className='project-page-p text-width-51 mb-60 mr-lg-80'>Bantam was a great partner to work with because they knew what 
            they wanted to be done, but also where they wanted to focus in the future. In certain areas of the app I 
            gave them minimal viable product designs, but also future versions.</p>

          <p className='project-page-p text-width-51 mb-120 mb-lg-240'>Additional features fully ready for implementation when engineers have 
            time, but things that didn&#x27;t need to be part of the first iteration. </p>
        </div>



        {/* ------ 4th set of Mocks ------ */}
        <div className='row m-10 m-lg-10 mb-lg-160'>

          <div className='flex-bantam'>
            <img className='image-width-25 mb-60' src={BantamV1} alt='material' />
            <img className='image-width-25 mb-60' src={BantamV2} alt='initial' />
            <img className='image-width-25 mb-60' src={BantamV3} alt='initial' />
          </div>
          
        </div>



        {/* ------ 5th set of Mocks ------ */}
        <div className='row m-10 m-lg-10 mb-lg-160'>

          <div className='flex-bantam'>
            <img className='image-width-40 mb-60' src={BantamFeed} alt='material' />
            <img className='image-width-40 mb-80' src={BantamFeedExpaneded} alt='initial' />
          </div>

        </div>



        {/* Text Paragraph */}
        <div className='row justify-content-center mb-lg-120'>

          <div className='flurish-parent d-none d-sm-none d-md-none d-lg-none d-xl-block mr-lg-40'>
            <h3 className='flurish-text-vertical'>QUALITY MATTERS</h3>
            <img className='flurish-vertical flurish-quality' src={flurish} alt='flurish' />
          </div>

          <p className='project-page-p text-width-51 mb-60 mr-lg-80'>I think engineers get a bad rep with the design community for 
            implimenting designs poorly. This is only half true... often I find designers aren&#x27;t communicating with the 
          engineering team during the coding process and/or  making zero specs around their designs.</p>

          <p className='project-page-p text-width-51 mb-60 mb-lg-160 mb-100'>I&#x27;m a huge fan on making specs for engineers. Often specs act as 
            blueprints and then when something is off, you can pull up the spec and it acts as almost a contract that you 
            can hold the engineer too.</p>
        </div>



        {/* ------ 6th set of Mocks ------ */}
        <div className='row m-10 m-lg-10 mb-lg-40'>

          <div className='flex-bantam'>
            <img className='image-width-40 mb-60' src={BantamSpec1} alt='material' />
            <img className='image-width-40 mb-60' src={BantamSpec2} alt='initial' />
          </div>

        </div>



      </div>

      <Footer />
    </div>
  );
}

export default Bantam;