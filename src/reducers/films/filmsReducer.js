import { GET_FILMS, GET_FILM_BY_ID, SHOW_ERROR } from '../../actions/films/messages';

const filmsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FILMS:
      return action.payload;
    default: return state;
  }
};

export default filmsReducer;
