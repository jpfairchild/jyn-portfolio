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
const Bld = lazy(() => import('./project/bld'));
const Bantam = lazy(() => import('./project/bantam'));
const Google = lazy(() => import('./project/google'));
const Illustrations = lazy(() => import('./project/illustrations'));

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

                  {/* Expose all routes underneath /review/<whatever> and load your reviewpage component for that */}
                  <Route exact path='/project/bld' component={Bld} />
                  <Route exact path='/project/bantam' component={Bantam} />
                  <Route exact path='/project/google' component={Google} />
                  <Route exact path='/project/illustrations' component={Illustrations} />

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
