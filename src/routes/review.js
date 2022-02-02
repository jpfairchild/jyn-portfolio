import React from 'react';
import { Footer } from '../components/footer';
import '../styles/app.scss';
import BladeReview from '../images/bladerunner2049_review.jpg';
import Data from '../json/bladerunner2049.json'
import JsonReviews from '../json/_reviews.json'
import Path from 'path';



//log Data
console.log(JsonReviews);
console.log(Object.keys(Path));
console.log(Data);
console.log(Object.keys(Data));
console.log(window.location.pathname);

//Json -> Variables
const movie = Data.movietitle;
const rating = Data.rating;
const director = Data.director;

//Takes arrays and gives line breaks to make paragraphs
//Non Spoiler review
const nsReview = Data.review.nonSpoiler.map((paragraph, i) => (
  <p className='line-spacing-paragraph' key={'non spoiler review paragraph'+ i} >
    {paragraph} <br />
  </p>
));

//Spoiler review 
const sReview = Data.review.spoiler.map((paragraph, i) => (
  <p className='line-spacing-paragraph' key={'spoiler review paragraph'+ i} >
    {paragraph} <br />
  </p>
));

//logs both to console
console.log(nsReview)
console.log(sReview)

//Image
const image1 = {
  backgroundImage: `url(${BladeReview})`
};

//Spoiler Review
const Results = () => (
  <div className='mt-40 mt-lg-60'>
    {sReview}
  </div>
)

//Page Function
function Review() {

  //Show Hide Spoiler Button
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  return (
    <div className="container">

      {/* Header Movie Image */}
      <div className='row mt-20 mt-lg-20 review-width'>

        <div className='col-12 mb-40 mb-lg-40'>
          <div className="review-card pt-3 px-3 pt-md-3 px-md-5 text-left text-white overflow-hidden">
            <div className='movie-img' style={image1}></div>
          </div>
        </div>

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
      <Footer />
    </div>
  );
}

export default Review;