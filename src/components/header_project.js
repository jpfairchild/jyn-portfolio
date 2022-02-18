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

              <Link exact to='/' className=''>
              <img className='pt-20 pl-10' src={personalLogo} alt='' />
              </Link>

              {/* <div className='hamburger-nav'>
                <Menu />
              </div> */}

              <div className="web-nav nav-parent pt-lg-20">
                <NavLink exact to='/rating'  className='nav-item mr-40'>
                  ABOUT
                </NavLink>
                <NavLink exact to='/about' className='nav-item mr-40'>
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
