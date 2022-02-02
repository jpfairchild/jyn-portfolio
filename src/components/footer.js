import React from 'react';
import { Link } from 'react-router-dom';
import ScrollIntoView from "./scrollintoview";

export function Footer() {

  return (
    <>
      <footer className='nav-parent'>
        <div className='arriflex'></div>

        <div className='d-flex flex-column flex-lg-row pb-30 pb-lg-50 mr-lg-50 justify-content-center'>
          <div className="web-nav nav-parent pt-lg-20">
            <Link exact to='/rating'  className='nav-item'>
              ABOUT
            </Link>
            <Link exact to='/about' className='nav-item'>
              RESUME
            </Link>
          </div>
        </div>

      </footer>
    </>
  );
}
