import React from 'react';
import { Link } from 'react-router-dom';
import ScrollIntoView from "./scrollintoview";

export function Footer() {

  return (
    <>
      <footer>

        <div className='nav-parent pt-lg-20 pb-100 pb-lg-140 mr-lg-50'>

            <Link to='/'  className='nav-item mr-30'>
              HOME
            </Link>
            <Link to='/rating'  className='nav-item mr-30'>
              ABOUT
            </Link>
            <Link to='/about' className='nav-item'>
              RESUME
            </Link>

        </div>

      </footer>
    </>
  );
}
