import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.scss';
import { Footer } from '../components/footer';
import { HeaderNoLogo } from '../components/header';
import { ProjectCard } from '../components/projectcard';
import projectorder from "../json/_projectorder";
import ProjectGrid from '../components/projectgrid';


//svgs
import heroLines from "../svgs/home_lines.svg";
import smallHeroLines from "../svgs/home_small_lines.svg";
import namelines from "../svgs/name_lines.svg";

function Home() {


  return (

    <div className="container">
      <HeaderNoLogo />

      <div className='row hero-banner'>
        <div className='flex-md-equal center-bg'>
          <img className='svglines' src={heroLines} alt='bglines' />
          <img className='svglines_small' src={smallHeroLines} alt='bgsmalllines' />
          <h1 className='name top-absolute'>Jyn Fairchild</h1>
          <img className='namelines mid-absolute' src={namelines} alt='namelines' />
          <h3 className='role bot-absolute'>DESIGNER</h3>
        </div>
      </div>

      {/* I SAID BITCHHHHHHHH */}
      <ProjectGrid />

      {/* long boi + all */}
      <div className='row justify-content-center pt-50 pt-lg-50 mb-100'>
        <div className='col-lg-6 pt-5 pt-md-5'>
          <p className='line-spacing-paragraph text-center'>
            Without design, the world sucks.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Home;
