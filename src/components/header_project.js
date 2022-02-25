import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from './menu';

// svgs
import personalLogo from '../logos/personal_logo.svg';


export function Header() {

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>

            <nav className="navbar project-nav navbar-light">

              <Link to='/'>
              <img className='pt-20 pl-10' src={personalLogo} alt='' />
              </Link>

              {/* <div className='hamburger-nav'>
                <Menu />
              </div> */}

              <div className="web-nav nav-parent pt-lg-20">
                <NavLink to='/about'  className='nav-item'>
                  ABOUT
                </NavLink>
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
