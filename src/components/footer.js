import React from 'react';
import { Link } from 'react-router-dom';
import ScrollIntoView from "./scrollintoview";

export function Footer() {

  return (
    <>
      <footer className='nav-parent'>
        <div className='arriflex'></div>

        <div className='d-flex flex-column flex-lg-row pb-30 pb-lg-50 mr-lg-50 justify-content-center'>
          <Link to='/' className='nav-item mb-20 mb-lg-20'>
            HOME
          </Link>
          <Link to='/allfilms' className='nav-item mb-20 mb-lg-20'>
            ALL FILMS
          </Link>
          <Link to='/rating'className='nav-item mb-20 mb-lg-20'>
            RATING
          </Link>
          <Link to='/about' className='nav-item mb-20 mb-lg-20'>
            ABOUT
          </Link>
        </div>

      </footer>
    </>
  );
}
