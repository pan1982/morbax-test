import axios from 'axios';
import { GET_FILMS, GET_FILM_BY_ID, SHOW_ERROR } from './messages';
import getMessageObject from '../../utils/actions';

const url = 'https://api.themoviedb.org/3';

const Commands = {
  getFilms: (genres = '35', sortBy = 'popularity.desc', page = 1) => (dispatch) => {
    axios.get(`${url}/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}}${genres && `&with_genres=${genres}`}`)
      .then((response) => {
        dispatch(getMessageObject(GET_FILMS, response.data));
      }).catch((error) => {
        dispatch(getMessageObject(SHOW_ERROR, error.message));
      });
  },

  getFilmById: filmId => (dispatch) => {
    axios.get(`${url}/movie/${filmId}?api_key=5874acfd11651a28c55771624f7021f4&language=en-US`)
      .then((response) => {
        dispatch(getMessageObject(GET_FILM_BY_ID, response.data));
      }).catch((error) => {
        dispatch(getMessageObject(SHOW_ERROR, error.message));
      });
  },

  searchFilms: query => (dispatch) => {
    axios.get(`${url}/search/multi?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&query=${query}&page=1&include_adult=false`)
      .then((response) => {
        dispatch(getMessageObject(GET_FILM_BY_ID, response.data));
      }).catch((error) => {
        dispatch(getMessageObject(SHOW_ERROR, error.message));
      });
  },

  getOrderById: orderId => (dispatch) => {
    axios.get(`/api/v1/order/${orderId}`)
      .then(response => dispatch(getMessageObject(GET_FILMS, response.data)));
  },


};

export default Commands;
