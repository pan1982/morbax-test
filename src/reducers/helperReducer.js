import getMessageObject from '../utils/actions';

const SET_SORT = 'SET_SORT';
const SET_GENRE = 'SET_GENRE';

export default (state = { sortBy: 'popularity.desc', genre: null }, action) => {
  switch (action.type) {
    case SET_SORT: return { ...state, sortBy: action.payload };
    case SET_GENRE: return { ...state, genre: action.payload };
    default: return state;
  }
};

export const changeSortBy = sortBy => (dispatch) => { dispatch(getMessageObject(SET_SORT, sortBy)); };
export const changeGenre = genre => (dispatch) => { dispatch(getMessageObject(SET_GENRE, genre)); };
