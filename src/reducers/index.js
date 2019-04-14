import { combineReducers } from 'redux';
import filmsReducer from './films/filmsReducer';
import errorReducer from './errorReducer';
import movieReducer from './films/movieReducer';
import helperReducer from './helperReducer';

const rootReducer = combineReducers({
  movies: filmsReducer,
  error: errorReducer,
  movie: movieReducer,
  helper: helperReducer,
});

export default rootReducer;
