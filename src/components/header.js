import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from './menu';

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
