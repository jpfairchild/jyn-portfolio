import '../styles/app.scss';
import React, { useEffect, useState } from 'react';

export function ReviewCard({ reviewTitle }) {

  //Set States for Data to be imported

  //json
  const [reviewData, setReviewData] = useState({});

  //image
  const [reviewImage, setReviewImage] = useState(undefined);

  // const [Var, FunctionSetVar] = useState(InitialState);
  
  //React 
  useEffect(() => {
    async function getFile() {
      
      const movieName = reviewTitle;
      const reviewFile = await import(`../json/${movieName}.json`);
      const reviewImage = await import(`../images/${movieName}_card.jpg`);

      //React State Updates
      //Default sets the dynamic import to the state
      setReviewData(reviewFile.default);
      setReviewImage(reviewImage.default);

    };

    getFile();
    
  })

  // //Image
  const image1 = reviewImage && ({
    backgroundImage: `url(${reviewImage})`
  });

  return (
    <div className="movie-card pt-3 pt-md-3 px-5 px-md-5 text-left text-white overflow-hidden">
      <div className="movie-card-text my-20 py-20 d-md-flex flex-md-equal">
        <h5 className='line-spacing-title'>{reviewData.movietitle}</h5>
        <h5 className='text-right'>{reviewData.rating}</h5>
      </div>
      <div className='movie-img' style={image1}></div>
    </div>
  );
}

export default ReviewCard;