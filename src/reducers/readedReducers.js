import {READED_NEWS, REFRESH_READED} from '../actions/actionTypes';

const readedReducers = (state = [], action) => {
  switch (action.type) {
    case READED_NEWS:
      return [...state, {date: Date.now(), data: action.payload}];
    case REFRESH_READED:
      return action.payload;
    default:
      return state;
  }
};

export default readedReducers;
