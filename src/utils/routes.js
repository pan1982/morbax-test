import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store';
import App from '../App';
import Footer from '../footer';
import MainContainer from '../MainContainer';
import Movie from '../MovieContainer';

// import Header from './App/Header';
// import ScrollToTop from './sections/utils/scrollToTop';

const store = configureStore();

function Routes() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <App />
          <Route exact path="/" render={() => <Redirect to="/films" />} />
          <Route exact path="/films" render={() => <MainContainer type="movie" />} />
          <Route path="/films/:id" component={Movie} />
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default Routes;
