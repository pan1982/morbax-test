import { combineReducers } from 'redux';
import filmsReducer from './films/filmsReducer';
import errorReducer from './errorReducer';
import movieReducer from './films/movieReducer';
import genreReducer from './films/genreReducer';
import helperReducer from './helperReducer';

const rootReducer = combineReducers({
  movies: filmsReducer,
  error: errorReducer,
  movie: movieReducer,
  helper: helperReducer,
  genres: genreReducer,
});

export default rootReducer;
