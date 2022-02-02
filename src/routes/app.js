import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loader } from '../components/loader';
import '../styles/app.scss';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from "../components/scrollintoview";

//top level pages
const Home = lazy(() => import('./home'));
const allFilms = lazy(() => import('./allfilms'));
const Rating = lazy(() => import('./rating'));
const About = lazy(() => import('./about'));

//reviews
const Review = lazy(() => import('../components/reviewpage'));

//routes
function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Route
          render={({ location }) => (
            <AnimatePresence>
              <Suspense fallback={<Loader />} key='suspense'>
                <Switch key={location.pathname}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/allfilms' component={allFilms} />
                  <Route exact path='/rating' component={Rating} />
                  <Route exact path='/about' component={About} />
                  {/* Expose all routes underneath /review/<whatever> and load your reviewpage component for that */}
                  <Route path='/review/:article' component={Review} />
                </Switch>
                
              </Suspense>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
