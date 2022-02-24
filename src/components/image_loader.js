import '../styles/app.scss';
import React, { useEffect, useState } from 'react';

export function image_loader({ fileName }) {

  //Set States for Data to be imported

  //image
  const [reviewImage, setReviewImage] = useState(undefined);
  
  //React 
  useEffect(() => {
    async function getFile() {
      
      const reviewImage = await import(`../illustrations/${fileName}.png`);

      //React State Updates
      //Default sets the dynamic import to the state
      setReviewData(reviewFile.default);
      setReviewImage(reviewImage.default);

    };

    getFile();
    
  })

  //Image
  const image1 = reviewImage && ({
    backgroundImage: `url(${reviewImage})`
  });

  return (
    <div className="project-card overflow-hidden">
      {/* <div className="movie-card-text my-20 py-20 d-md-flex flex-md-equal">
        <h5 className='line-spacing-title'>{reviewData.movietitle}</h5>
        <h5 className='text-right'>{reviewData.rating}</h5>
      </div> */}
      <div className='project-img' style={image1}></div>
    </div>
  );
}

export default image_loader;