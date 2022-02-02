import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from './menu';


export function Header() {

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>

            <nav className="navbar navbar-light">

              {/* <div className='flex-column align-items-start justify-content-start ml-10'>
                <a className="navbar-brand" href="./">LIFE IS TOO SHORT FOR SHIT FILMS</a>
                <h2 className='line-spacing-paragraph mr-60 pt-5 pt-lg-5'>Life is already too short, don't waste it watching garbage</h2>
              </div> */}

              <div className='flex-column align-items-start justify-content-start ml-10'>
                
              </div>

              <div className='hamburger-nav'>
                <Menu />
              </div>

              <div className="web-nav nav-parent pt-lg-20">
                <NavLink exact to='/rating'  className='nav-item'>
                  ABOUT
                </NavLink>
                <NavLink exact to='/about' className='nav-item'>
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
