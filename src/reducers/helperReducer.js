import getMessageObject from '../utils/actions';

const SET_SORT = 'SET_SORT';

export default (state = { sortBy: '' }, action) => {
  switch (action.type) {
    case SET_SORT: return { ...state, sortBy: action.payload };
    default: return state;
  }
};

export const changeSortBy = sortBy => (dispatch) => { dispatch(getMessageObject(SET_SORT, sortBy)); };
