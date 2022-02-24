import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header_project';
import '../../styles/app.scss';

// Svgs
import flurish from "../../svgs/flurish_lines.svg";

// ------ Images
// Lets make a array that cycles through a folder

function importAll(r) {
  let images = {};
  console.log('r', r);
  r.keys().map((item) => { 
    images[item.replace('./', '')] = r(item);
    return false;
  });
  return images;
}

let images = {}

images = importAll(require.context('../../illustrations', false, /\.(png|jpe?g|svg)$/));


// Page Function
function Illustrations() {
  

  // console.log("object", images)

  return (
    <div className="container">

      <Header />

      <div className='row project-page-title-description justify-content-center mb-lg-140 mb-100'>

        <div className='pp-ts text-width-100'>
          <h1 className='pp-title mr-20'>Illustrations</h1>
          <h2 className='pp-sub-text'>IN PURSUIT OF THE VECTOR</h2>
        </div>

        <p className='project-page-p text-width-100'>Honestly I don't do enough illustrations to ever
          feel comfortable calling myself an illustrator, but I dabble in illustrations. 
          I'm particularly proud of the synthesizer and the halo guns.  
        </p>

      </div>

      {/* ------ 1st of Mocks ------ */}
      <div className='row XXXXX justify-content-center mb-lg-140 mb-80'>
        <div className='XXXXX__slider flex-images-illustrations w-100 rounded-corner'>

            {Object.keys(images).map((fileName) => {
              return <img key={fileName} className='image-width-50 XXXXX__slide' src={images[fileName]} alt={fileName}/>;
            })}

        </div>
      </div>

      <div className='mb-100'></div>

      <Footer />
    </div>
  );
}

export default Illustrations;