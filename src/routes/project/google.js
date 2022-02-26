import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/footer';
import { Header, HeaderProject } from '../../components/header';
import '../../styles/app.scss';

// Svgs
import flurish from "../../svgs/flurish_lines.svg";

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

// Images Google
import LibraryLight from '../../images/google_youtube-case-study-light.png';
import LibraryDark from '../../images/google_youtube-case-study-dark.png';
import EnableAnimation from '../../animations/google_youtube_dark-mode-settings.mp4';
import LibrarySpec from '../../images/google_youtube-spec.png';
import FloatyAnimation from '../../animations/google_floaty.mp4';

// Page Function
function Google() {

  return (
    <div className="container">

    <HeaderProject />


      <div className='row project-page-title-description justify-content-center mb-lg-140 mb-100'>

      <div className='pp-ts-resume'>
          <h1 className='pp-title'>Google</h1>
          <h2 className='pp-sub-text'>DO NO EVIL</h2>
        </div>

        <p className='project-page-p text-width-100'>I loved my time at google. I learned how data can drive 
          useful decisions (and poor decisions). Design exists in this weird state where people admit its 
          integral yet refrain from pushing to far too fast. I hope we push into a new era of design where 
          we force UX to evolve past the easy patterns of convenience over function.
        </p>

      </div>



      <div className='body-content'>

        {/* Flurish */}
        <div className='row'>
          <img className='flurish-horizontal' src={flurish} alt='flurish' />
          <h3 className='flurish-text'>MOCKS</h3>
        </div>

        {/* ------ Dark and Light Library ------ */}
        <div className='row mb-lg-160'>

          <div className='flex-bantam mb-mobile-google'>
            <img className='image-width-40' src={LibraryLight} alt='material' />
            <img className='image-width-40' src={LibraryDark} alt='initial' />
          </div>
          
        </div>



        {/* Text Paragraph */}
        <div className='row justify-content-center mt-lg-160 mb-lg-160 mb-100'>
          <p className='project-page-p text-width-100'>YouTube's Dark mode was one of my favorite projects I did 
            during my time @ Google. It touched every screen, every part of the app. Death by a million cuts, it taught me 
            that even seeminly small changes, at scale, change a lot. What seems like a simple color change meant hundreds of 
            screen designs, and actual style guide for the first time in YouTube's history, different tooltips, 
            different illustrations, &#x26; updated navigation transitions.</p>
        </div>


        
        {/* ------ Settings Animation ------ */}
        <div className='row mb-lg-160 mb-mobile-google'>

          <div className='flex-google'>
            <video 
              className='image-width-40 mb-60' 
              src={EnableAnimation} 
              autoPlay
              loop
              muted
              playsInline 
              alt='material' />
          </div>
          
        </div>



        {/* Text - Power User */}
        <div className='row justify-content-center mr-lg-40 mb-mobile-google'>

          <div className='flurish-parent d-none d-sm-none d-md-none d-lg-block d-xl-block mr-lg-40'>
            <h3 className='flurish-text-vertical'>POWER USER QUEEN</h3>
            <img className='flurish-vertical flurish-quality-google' src={flurish} alt='flurish' />
          </div>

          <p className='project-page-p text-width-51 mb-60'>The Library was under utilized when I 
            arrived at YouTube. I identified it as a large user pain point that had a ton of utility. 
            Over the next 2 years I recruited like minded engineers and a team of 12 formed around 
            us dedicated to improving the user experience of core users.</p>

        </div>



        {/* ------ Library Spec ------ */}
        <div className='row m-10 m-lg-10 mb-lg-160'>

          <div className='flex-bantam'>
            <img className='image-width-50 mb-60' src={LibrarySpec} alt='material' />
          </div>
          
        </div>

        <div className='row'>
          <img className='flurish-horizontal' src={flurish} alt='flurish' />
          <h3 className='flurish-text'>TOOLTIPS = 15%+ USAGE</h3>
        </div>

        {/* ------ Floaty Animation ------ */}
        <div className='row m-10 m-lg-10 mb-lg-160 mb-mobile-google'>

          <div className='flex-google'>
            <video 
              className='image-width-40 mb-60' 
              src={FloatyAnimation} 
              autoPlay
              loop
              muted
              playsInline 
              alt='floaty animation' />
          </div>

        </div>


        {/* Text Paragraph */}
        <div className='row justify-content-center mb-lg-120'>

          <p className='project-page-p text-width-51 mb-60'>While working at Google, I spent years 
            improving products through creative design solutions, making substancial metrics improvements along 
            the way. I worked on a multitude of projects, but most of my impact was increasing user adoption and
            usage.</p>

        </div>



      </div>

      <Footer />
    </div>
  );
}

export default Google;