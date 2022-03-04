import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {

  return (
    <>
      <footer>

        <div className='nav-parent text-center pt-lg-20 pb-100 pb-lg-140'>

            <Link to='/'  className='nav-item'>
              HOME
            </Link>
            <Link to='/resume' className='nav-item'>
              RESUME
            </Link>

        </div>

      </footer>
    </>
  );
}

export function FooterResume() {

  return (
    <>
      <footer>

        <div className='nav-parent text-center pt-lg-20 pb-100 pb-lg-140'>

            <Link to='/'  className='nav-item'>
              HOME
            </Link>

        </div>

      </footer>
    </>
  );
}

