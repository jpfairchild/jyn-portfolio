import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loader } from '../components/loader';
import '../styles/app.scss';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from "../components/scrollintoview";

//top level pages
const Home = lazy(() => import('./home'));
const Resume = lazy(() => import('./resume'));
const About = lazy(() => import('./about'));

//projects
const Bld = lazy(() => import('./bld'));
const Bantam = lazy(() => import('./bantam'));
const Google = lazy(() => import('./google'));
const Illustrations = lazy(() => import('./illustrations'));

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

                  {/* Top level paths */}
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/resume' component={Resume} />

                  {/* Expose all routes underneath /<whatever> and load your page */}
                  <Route exact path='/bld' component={Bld} />
                  <Route exact path='/bantam' component={Bantam} />
                  <Route exact path='/google' component={Google} />
                  <Route exact path='/illustrations' component={Illustrations} />

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
