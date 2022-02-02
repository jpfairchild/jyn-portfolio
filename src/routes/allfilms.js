import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.scss';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import TableRow from '../components/tablerow';
import reviewOrder from "../json/_reviewOrder.json";




const completeTable = () => (
  reviewOrder.mostRecent.map((review, index) => (
    <tr key={'review' + index} className='table-number-link'>
      <th scope="row"><Link to={'./review/' + review}>{index + 1}</Link></th>
        <TableRow reviewTitle={review} />
    </tr>
  )
));


function allFilms() {

  return (

    <div className="container">
      <Header />
      <div className='row justify-content-center mt-40 mt-lg-40 '>
      <table className="table table-hover table-bordered">
        <thead className='table-col-width'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Film</th>
            <th scope="col">Director</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {completeTable(reviewOrder)}
        </tbody>
      </table>
        
      </div>
      <div className='d-block d-lg-none'>
        <Footer />
      </div>
    </div>
  );
}

export default allFilms;
