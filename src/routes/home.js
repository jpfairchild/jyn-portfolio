import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.scss';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ProjectCard } from '../components/projectcard';
import projectOrder from "../json/_projectOrder.json";

//svgs
import herolines from "../illustrations/home_lines.svg";
import namelines from "../illustrations/name_lines.svg";

function Home() {


  return (

    <div className="container">
      <Header />

      <div className='row hero-banner'>
        <div className='d-md-flex flex-md-equal w-100'>
          <img className='svglines' src={herolines} alt='bglines' />
          <h1 className='name top_absolute'>Jyn Fairchild</h1>
          <img className='namelines mid_absolute' src={namelines} alt='namelines' />
          <h3 className='role bot_absolute'>DESIGNER</h3>
        </div>
      </div>

      <div className='row'>
        <div className="d-md-flex flex-md-equal w-100">

        <Link to={'./project/flow'}>
          <ProjectCard projectName={projectOrder.mostRecent[0]}/>
        </Link>

        </div>
      </div>

      {/* 2 Recent Reviews */}
      <div className='row'>
        <div className="col-12 w-100 d-md-flex flex-md-equal justify-content-center">

          <Link to={'./project/google' + projectOrder.mostRecent[1]}>
            <ProjectCard className='col-6' projectName={projectOrder.mostRecent[1]}/>
          </Link>
          
          <Link to={'./project/bantam' + projectOrder.mostRecent[2]}>
            <ProjectCard className='col-6' projectName={projectOrder.mostRecent[2]}/>
          </Link>

        </div>
      </div>

      <div className='row'>
        <div className="d-md-flex flex-md-equal w-100">

          <Link to={{pathname:'./project/flow' + projectOrder.mostRecent[3]}}>
            <ProjectCard projectName={projectOrder.mostRecent[3]}/>
          </Link>

          {/* <Link to={'./project/flow' + projectOrder.mostRecent[4]}>
            <ProjectCard projectName={projectOrder.mostRecent[4]}/>
          </Link>

          <Link to={'./project/flow' + projectOrder.mostRecent[0]}>
            <ProjectCard projectName={projectOrder.mostRecent[0]}/>
          </Link> */}

        </div>
      </div>


      {/* long boi + all */}
      <div className='row justify-content-center pt-50 pt-lg-50'>
        <div className='col-lg-6 pt-5 pt-md-5'>
          <p className='line-spacing-paragraph'>
            Let's be real, a whole lot of shit movies come out.
            Time is short. Most aren't worth your time. This website chronicles
            the movies that are definitely worth your time.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
