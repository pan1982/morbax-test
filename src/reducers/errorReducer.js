import { SHOW_ERROR } from '../actions/films/messages';

const errorReducer = (state = '', action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return action.payload;
    default: return state;
  }
};

export default errorReducer;
