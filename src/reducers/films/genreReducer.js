import { GET_GENRES } from '../../actions/films/messages';

const genreReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GENRES:
      return action.payload.genres;
    default: return state;
  }
};

export default genreReducer;
