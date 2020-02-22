import {
  CHANGE_TO_DAY,
  CHANGE_TO_NIGHT,
  CHANGE_FONT_SIZE,
} from '../actions/actionTypes';

const initialState = {
  switch: false,
  color: 'black',
  backgroundColor: 'white',
  fontSize: 12,
};

const style = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TO_DAY:
      return {
        ...state,
        color: 'black',
        backgroundColor: 'white',
        switch: false,
      };
    case CHANGE_TO_NIGHT:
      return {...state, color: 'white', backgroundColor: 'black', switch: true};
    case CHANGE_FONT_SIZE:
      return {...state, fontSize: action.payload};
    default:
      return state;
  }
};

export default style;
