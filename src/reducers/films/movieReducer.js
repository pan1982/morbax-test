import { GET_FILM_BY_ID } from '../../actions/films/messages';

const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FILM_BY_ID:
      return action.payload;
    default: return state;
  }
};

export default movieReducer;
