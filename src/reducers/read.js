import {READ_NEWS, REFRESH_READ} from '../actions/actionTypes';

const initialState = {
  data: [],
};

const read = (state = initialState, action) => {
  switch (action.type) {
    case READ_NEWS:
      return action.payload;
    case REFRESH_READ:
      return {data: action.payload};
    default:
      return state;
  }
};

export default read;
