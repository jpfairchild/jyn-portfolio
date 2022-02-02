import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.scss';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ReviewCard } from '../components/reviewcard';
import reviewOrder from "../json/_reviewOrder.json";


function Home() {


  return (

    <div className="container">
      <Header />

      <div className='row'>
        <div className="d-md-flex flex-md-equal w-100">

        <Link to={'./review/' + reviewOrder.mostRecent[0]}>
          <ReviewCard reviewTitle={reviewOrder.mostRecent[0]}/>
        </Link>

        </div>
      </div>

      {/* 2 Recent Reviews */}
      <div className='row'>
        <div className="col-12 w-100 d-md-flex flex-md-equal justify-content-center">

          <Link to={'./review/' + reviewOrder.mostRecent[1]}>
            <ReviewCard className='col-6' reviewTitle={reviewOrder.mostRecent[1]}/>
          </Link>
          
          <Link to={'./review/' + reviewOrder.mostRecent[2]}>
            <ReviewCard className='col-6' reviewTitle={reviewOrder.mostRecent[2]}/>
          </Link>

        </div>
      </div>

      <div className='row'>
        <div className="d-md-flex flex-md-equal w-100">

          <Link to={{pathname:'./review/' + reviewOrder.mostRecent[3]}}>
            <ReviewCard reviewTitle={reviewOrder.mostRecent[3]}/>
          </Link>

          {/* <Link to={'./review/' + reviewOrder.mostRecent[4]}>
            <ReviewCard reviewTitle={reviewOrder.mostRecent[4]}/>
          </Link>

          <Link to={'./review/' + reviewOrder.mostRecent[0]}>
            <ReviewCard reviewTitle={reviewOrder.mostRecent[0]}/>
          </Link> */}

        </div>
      </div>


      {/* long boi + all */}
      <div className='row justify-content-center pt-50 pt-lg-50'>
        <div className='col-lg-6 pt-5 pt-md-5'>
          <p className='line-spacing-paragraph'>
            Let's be real, a whole lot of shit movies come out.
            Time is short. Most aren't worth your time. This website chronicles
            the movies that are definitely worth your time.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
