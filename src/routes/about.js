import React from 'react';
import arriflex from '../illustrations/arriflex.png';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../styles/app.scss';


function About() {
  return (
    <div className="container">
      <Header />
      {/* arriflex img */}
      <div className='row mt-60 mt-lg-120 mr-60 ml-60 justify-content-center'>
        <div className=''>
          <img
            className='img-fluid'
            width="360"
            height="182"
            srcSet={arriflex}
            alt="camera illustration"
          />
        </div>
      </div>

      {/* paragraph */}
      <div className='row pt-40 pt-lg-40 justify-content-center'>
        <div className='col-lg-5 pt-1 pt-md-2'>
          <p className='line-spacing-paragraph pt-5 pt-md-5'>
            Let's be real, a whole lot of shit movies come out.
            Time is short. Most aren't worth your time. This website chronicles
            the movies that are definitely worth your time.
          </p>
        </div>
      </div>
      {/* links */}
      <div className='d-block d-lg-none'>
        <Footer />
      </div>
    </div>
  );
}

export default About;