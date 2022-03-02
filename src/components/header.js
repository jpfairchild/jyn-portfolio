import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from './menu';
import { motion } from "framer-motion";

// svgs
import personalLogo from '../logos/personal_logo.svg';


export function Header() {
  

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>

            <nav className="navbar navbar-light">

              {/* <div className='flex-column align-items-start justify-content-start ml-10'>

                <a className="navbar-brand" href="./"> Title </a>
                <h2 className='line-spacing-paragraph mr-60 pt-5 pt-lg-5'> Sub-Text </h2>

              </div> */}

              <div className='flex-column align-items-start justify-content-start ml-10'></div>

              {/* <div className='hamburger-nav'>
                <Menu />
              </div> */}

              <div className="web-nav nav-parent pt-lg-20">
                {/* <NavLink to='/about'  className='nav-item'>
                  ABOUT
                </NavLink> */}
                <NavLink to='/resume' className='nav-item'>
                  RESUME
                </NavLink>
              </div>

            </nav>
            
          </div>
        </div>
      </div>
    </>
  );
}

export function HeaderNoLogo() {

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: .5,
        staggerChildren: 0.2
      }
    }
  };

  const wait = {
    hidden: { x: 0, y: 0, opacity: 0, transition: {delay: 0} },
    visible: { x : 0, y: 0, opacity: 1, transition: {delay: 1.5, duration: 1, ease: [0.05, 0.15, 0.30, 0.99] } }
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>

            <nav className="navbar navbar-light">

              <Link to='/'>
              <img className='opactiy-0 personalLogo pt-20 pl-10' src={personalLogo} alt='' />
              </Link>

              {/* <div className='hamburger-nav'>
                <Menu />
              </div> */}

              <motion.div 
                className="web-nav nav-parent pt-lg-20"
                initial="hidden"
                animate="visible"
                variants={wait}
              >
                {/* <NavLink to='/about'  className='nav-item'>
                  ABOUT
                </NavLink> */}
                <NavLink to='/resume' className='nav-item'>
                  RESUME
                </NavLink>
              </motion.div>

            </nav>
            
          </div>
        </div>
      </div>
    </>
  );
}

export function HeaderResume() {

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>

            <nav className="navbar project-nav navbar-light">

              <Link to='/'>
              <img className='personalLogo pt-20 pl-10' src={personalLogo} alt='personalLogo' />
              </Link>

              {/* <div className='hamburger-nav'>
                <Menu />
              </div> */}

              <div className="web-nav nav-parent pt-lg-20">
                {/* <NavLink to='/about'  className='nav-item'>
                  ABOUT
                </NavLink> */}
                {/* <NavLink to='/resume' className='nav-item'>
                  RESUME
                </NavLink> */}
              </div>

            </nav>
            
          </div>
        </div>
      </div>
    </>
  );
}


export function HeaderProject() {

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>

            <nav className="navbar project-nav navbar-light">

              <Link to='/'>
              <img className='personalLogo pt-20 pl-10' src={personalLogo} alt='personalLogo' />
              </Link>

              {/* <div className='hamburger-nav'>
                <Menu />
              </div> */}

              <div className="web-nav nav-parent pt-lg-20">
                {/* <NavLink to='/about'  className='nav-item'>
                  ABOUT
                </NavLink> */}
                <NavLink to='/resume' className='nav-item'>
                  RESUME
                </NavLink>
              </div>

            </nav>
            
          </div>
        </div>
      </div>
    </>
  );
}
