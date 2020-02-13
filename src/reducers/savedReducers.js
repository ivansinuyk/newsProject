import {SAVED_NEWS, DELETE_ALL} from '../actions/actionTypes';

const savedReducers = (state = [], action) => {
  switch (action.type) {
    case SAVED_NEWS:
      const before = state.length;
      const arr = state.filter(
        item => item.publishedAt !== action.payload.publishedAt,
      );
      return before === arr.length ? [action.payload, ...state] : arr;
    case DELETE_ALL:
      return [];
    default:
      return state;
  }
};

export default savedReducers;
