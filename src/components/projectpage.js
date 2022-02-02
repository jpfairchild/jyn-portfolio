import React, { useEffect, useState } from 'react';
import { Footer } from '../components/footer';
import '../styles/app.scss';


//Page Function
function Review({ match }) {

  //Show Hide Spoiler Button
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);

  //Set States for Data to be imported

  //json
  const [reviewData, setReviewData] = useState({});
  //image
  const [reviewImage, setReviewImage] = useState(undefined);

  // const [Var, FunctionSetVar] = useState(InitialState);

  //React 
  useEffect(() => {
    async function getFile() {
      
      const article = match.params.article;
      const reviewFile = await import(`../json/${article}.json`);
      const reviewImage = await import(`../images/${article}_review.jpg`);

      //React State Updates
      //Default sets the dynamic import to the state
      setReviewData(reviewFile.default);
      setReviewImage(reviewImage.default);

    };

    getFile();
    
  })

  // //Json -> Variables
  const movie = reviewData.movietitle;
  const rating = reviewData.rating;
  const director = reviewData.director;

  //Takes arrays and gives line breaks to make paragraphs
  //Non Spoiler review
  const nsReview = reviewData.review?.nonSpoiler.map((paragraph, i) => (
    <p className='line-spacing-paragraph' key={'non spoiler review paragraph'+ i} >
      {paragraph} <br />
    </p>
  ));

  //Spoiler review 
  const sReview = reviewData.review?.spoiler.map((paragraph, i) => (
    <p className='line-spacing-paragraph' key={'spoiler review paragraph'+ i} >
      {paragraph} <br />
    </p>
  ));

  // //Image
  const image1 = reviewImage && ({
    backgroundImage: `url(${reviewImage})`
  });

  //Spoiler Review
  const Results = () => (
    <div className='mt-40 mt-lg-60'>
      {sReview}
    </div>
  )


  return (
    <div className="container">

      {/* Header Movie Image */}
      <div className='row mt-10 mt-lg-10 mx-10 mx-lg-10'>

        <div className='col-12 mb-40 mb-lg-80'>
          <div className="review-card pt-lg-20 px-lg-5 text-left text-white overflow-hidden">
            <div className='movie-img' style={image1}></div>
          </div>
        </div>

        <div className='row review-width px-20'>
          <div className='col-12 mb-20 mb-lg-20 full-width'>
            {/* Title & Director */}
            <div className='d-flex flex-wrap'>
              <h1 className='mb-40 mb-lg-40'>{movie}</h1>
              <h1 className='ml-auto'>{rating}</h1>
            </div>
            <h2 className=''>{director}</h2>
          </div>

            {/* Non-Spoiler Review */}
          <div className=''>
            <div className='col-12 review-width'>

              {/* <p> */}
                {nsReview}
              {/* </p> */}
              
              {/* Spoiler Review */}
              <div className='mt-40 mt-lg-60 mb-40 mb-lg-100'>
                <button type="button" className="btn btn-outline-dark btn-custom w-100" onClick={onClick}>SPOILER REVIEW</button>
                { showResults ? <Results /> : null }
              </div>
            </div>

            {/* More Reviews */}
            {/* <div className="col-12 d-flex flex-equal flex-wrap w-100">
              <Link to='./review/br'>
                <div className="movie-card card-group-tall bg-dark mr-md-3 pt-3 px-3 pt-md-3 px-md-5 text-left text-white overflow-hidden">
                  <div className="my-3 py-3 d-md-flex flex-md-equal">
                    <h5 className='line-spacing-title'>BLADE <br /> RUNNER <br /> 2049</h5>
                    <h5 className='text-right'>+ +</h5>
                  </div>
                  <div className=""></div>
                </div>
              </Link>
              
              <Link to='./review/br'>
                <div className="movie-card card-group-tall bg-dark pt-3 px-3 pt-md-3 px-md-5 text-left text-white overflow-hidden">
                  <div className="my-3 py-3 d-md-flex flex-md-equal">
                    <h5 className='line-spacing-title'>MOVIE <br /> NAME</h5>
                    <h5 className='text-right'>+ -</h5>
                  </div>
                  <div className=""></div>
                </div>
              </Link>
            </div> */}

          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Review;