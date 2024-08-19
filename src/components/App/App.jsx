import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewActive from '../ReviewActive/ReviewActive';
import PageFive from '../PageFive/PageFive';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFeedback();
  }, [])

  // HAVE GET FUNCTION
  const fetchFeedback = () => {
    axios({
      method: 'GET',
      url: '/api/feedback'
    }) .then((response) => {
      const data = response.data;

      setData(data);

      dispatch({
        type: 'GET_FEEDBACK',
        payload: {data}
      }) 

    }) .catch((err) => {
      console.log('Client error in GET:', err);
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

    <Router>
      <Route exact path='/'>
        <Feeling />
      </Route>
      <Route exact path='/understanding'>
        <Understanding />
      </Route>
      <Route exact path='/support'>
        <Support />
      </Route>
      <Route exact path='/comments'>
        <Comments />
      </Route>
      <Route exact path='/review-active'>
        <ReviewActive />
      </Route>
      <Route exact path='/page-five'>
        <PageFive />
      </Route>
      <Route exact path='/admin'>
        <Admin fetchFeedback={fetchFeedback} data={data} />
      </Route>
    </Router>

    </div>
  );
}

export default App;


// ============== LOTS of libraries for converting time to user's specific timezone ===============
  // npm install date-fns
  // import {parseISO, format} from 'date-fns';

  // { things.map((thing) => (
  //   <p key={thing.id}>{thing.name} was created at {thing.inserted_at}</p>
  // ))
  // }

  // console.log('ISO string:', '2023-05-20T18:30:15.000Z');
  // console.log(parseISO('2023-05-20T18:30:15.000Z'));
  // const parsed = parseISO('2023-05-20T18:30:15.000Z');
  // let time = format(parsed, 'MMMM "hello" dd - yyyy');
  // time = format(parsed, "MMMM dd, yyyy 'at' h:m a");

// =============== NOTES ===============
  // This is always a two step process:
  //   1. Parse the ISO string you get from your databse.
  //     * This gives us a Date object AND localizes
  //     * the time to our device
  //   2. Format the Date object into the string representation
  //   you desire.
  //     * In this case: 'May 20th, 2023 at 6:30PM'
// =============== END OF NOTES ===============


// =============== In src, have a 'helpers' folder then have a js file for parsing time ===============

  // function convertISOtoDateTime(isoTimestamp) {
     // PARSE IT!
  //   const parsed = parseISO(isoTimestamp)
    // FORMAT IT!
  //   const formatted = format(parsed, "MMMM dd, yyyy 'at' h:m a");

  //   return formatted;
  // }

  // export default convertISOtoDateTime

// =============== In App() ===============

  // import convertISOtoDateTime from '../../helpers/'js file name'
  // const parsed = parseISO(isoTimestamp).format(parseISO(isoTimestamp), "MMMM dd, yyyy 'at' h:m a")




