import PropType from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Commands from './actions/films/commands';
import Main from './Main';

function MainContainer(props) {
  const {
    movies, getMovies, helper,
  } = props;
  const hasResultsProperty = Object.prototype.hasOwnProperty.call(movies, 'results');

  useEffect(() => {
    getMovies(helper.genres, helper.sortBy, helper.page);
  }, []);

  return (
    <div>

      {hasResultsProperty && <Main movies={movies} getMovies={getMovies} />}
    </div>
  );
}

MainContainer.propTypes = {
  movies: PropType.object.isRequired,
  getMovies: PropType.func.isRequired,
  helper: PropType.object.isRequired,
};

const mapState = (state) => {
  const { movies, error, helper } = state;
  return { movies, error, helper };
};

const mapDispatchToProps = dispatch => ({
  getMovies: (genres, sortBy, page) => { dispatch(Commands.getFilms(genres, sortBy, page)); },
});

export default connect(mapState, mapDispatchToProps)(MainContainer);
