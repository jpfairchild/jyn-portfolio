import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.scss';


export function TableRow({ reviewTitle }) {

  //Set States for Data to be imported

  //json
  const [reviewData, setReviewData] = useState({});

  // const [Var, FunctionSetVar] = useState(InitialState);

  //React 
  useEffect(() => {
    async function getFile() {
      
      const movieName = reviewTitle;
      const reviewFile = await import(`../json/${movieName}.json`);

      //React State Updates
      //Default sets the dynamic import to the state
      setReviewData(reviewFile.default);
    };

    getFile();
    
  })

  // //Json -> Variables
  const movie = reviewData.movietitle;
  const director = reviewData.director;
  const rating = reviewData.rating;

 return (
   <>
      <td><Link to={'./review/' + reviewTitle}>{movie}</Link></td>
      <td><Link to={'./review/' + reviewTitle}>{director}</Link></td>
      <td className='ptable-means'><Link to={'./review/' + reviewTitle}>{rating}</Link></td>
  </>
 );
}

export default TableRow;