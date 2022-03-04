import React, { useEffect, useState } from 'react';
import { Footer } from '../components/footer';
import { HeaderResume } from '../components/header';
import '../styles/app.scss';

// Svgs
import arrow from "../svgs/arrow.svg";
import ui from "../svgs/ui.svg";
import code from "../svgs/code.svg";
import illustration from "../svgs/illustration.svg";
import animation from "../svgs/animation.svg";

// Images
// import me from "../images/me.png"



function About() {
  
  return (
    <div className="container">

      <HeaderResume />

      {/* Title & Description */}

      <div className='row project-page-title-description justify-content-center mb-lg-140 mb-100'>

        <div className='pp-ts-resume'>
          <h1 className='resume-title mr-20'>About</h1>
          <h2 className='resume-sub-text'>MAKE GOOD SHIT</h2>
        </div>

        <p className='project-page-p text-width-100'>I love to be challenged; to think outside the box. 
          I like working with companies that make meaningful connections with people. A place where my 
          co-workers are as passionate about the things they love as I am about design. 
        </p>

      </div>

      {/* Skills */}
      <div className='skills mb-lg-140 mb-100'>
        <div className='flex-resume-skill'>
          <img className='resume-skill' src={ui} alt='ui' />
          <img className='resume-skill' src={code} alt='code' />
          <img className='resume-skill' src={illustration} alt='illustration' />
          <img className='resume-skill' src={animation} alt='animation' />
        </div>
      </div>


      {/* Experience Section Start */}


      {/* Experience Item */}
      <div className='row flex-resume justify-content-center'>

        <div className='resume-company'>
          <h1 className='resume-company-title text-width-70'>bld.ai</h1>
          <h2 className='resume-company-year text-width-70'>2020 - 2022</h2>
        </div>

        <p className='project-page-p text-width-50'>Bld is a uber talented growing agency 
          working in a dozen countries. At bld, I managed a design team of 7, executing designs for 150 
          engineers over 20 projects. My role included feedback &#x26; guidance for existing projects, 
          nailing prospective clients, and hiring new designers.</p>

      </div>

      <img className='resume-arrow w-100 mt-100 mb-100' src={arrow} alt='arrow' />

      {/* Experience Item */}
      <div className='row flex-resume justify-content-center'>

        <div className='resume-company'>
          <h1 className='resume-company-title text-width-70'>cat &#x26; husky</h1>
          <h2 className='resume-company-year text-width-70'>2019 - 2021</h2>
        </div>

        <p className='project-page-p text-width-50'>I co-founded an agency called cat &#x26; husky in 
          2019 with a long time trusted engineering partner. As cat &#x26; husky, we become well known in 
          the maching industry after several successful projects. We were convinced to join bld.ai 
          after hearing their vision on the future of agencies. </p>

      </div>

      <img className='resume-arrow w-100 mt-100 mb-100' src={arrow} alt='arrow' />

      {/* Experience Item */}
      <div className='row flex-resume justify-content-center'>

        <div className='resume-company'>
          <h1 className='resume-company-title text-width-70'>art platform</h1>
          <h2 className='resume-company-year text-width-70'>2019 - 2022</h2>
        </div>

        <p className='project-page-p text-width-50'>After google, I started an underground art platform. 
        While not financially anything to write home about, it has a small but dedicated community drawing 
        and painting some of the finest art on the internet.</p>

      </div>

      <img className='resume-arrow w-100 mt-100 mb-100' src={arrow} alt='arrow' />

      {/* Experience Item */}
      <div className='row flex-resume justify-content-center'>

        <div className='resume-company'>
          <h1 className='resume-company-title text-width-70'>google</h1>
          <h2 className='resume-company-year text-width-70'>2015 - 2019</h2>
        </div>

        <p className='project-page-p text-width-50'>I worked at google for 4 years. I worked on a wide range of different projects,
          Google Search, Google Maps, with most of my time spent @ Youtube. I learned how to push good design inside a large rigid organization. 
          But most of my real innovations came in new ways to work with engineering partners.</p>

      </div>

      <div className='mb-100'></div>

      <Footer />
    </div>
  );
}

export default About;
