import React from 'react';
import '../styles/app.scss';
import { Header } from '../components/header_home';
import { Footer } from '../components/footer';



function Rating() {
  return (
    <div className="container">
      <Header />
      <div className='row justify-content-center review-width mt-40 mt-lg-40 '>
      <table className="table table-bordered">
        <thead className=''>
          <tr>
            <th scope="col">Rating</th>
            <th scope="col">What it means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p className='ptable'>+ + +</p></td>
            <td><p className='ptable-means'>Masterpiece</p></td>
          </tr>
          <tr>
            <td><p className='ptable'>+ +</p></td>
            <td><p className='ptable-means'>Outstanding</p></td>
          </tr>
          <tr>
            <td><p className='ptable'>+</p></td>
            <td><p className='ptable-means'>Solid</p></td>
          </tr>
          <tr>
            <td><p className='ptable'>+ -</p></td>
            <td><p className='ptable-means'>Neutral</p></td>
          </tr>
          <tr>
            <td><p className='ptable'>-</p></td>
            <td><p className='ptable-means'>Skip</p></td>
          </tr>
        </tbody>
      </table>
        
      </div>
      <div className='d-block d-lg-none'>
        <Footer />
      </div>
    </div>
  );
}

export default Rating;
