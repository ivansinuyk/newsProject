import {
  GET_NEWS,
  LOADING,
  ERROR,
  CLEAR_NEWS,
  READ_ITEM,
} from '../actions/actionTypes';

const initialState = {
  data: [],
  loading: true,
  error: false,
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {data: action.payload, loading: false, error: false};
    case LOADING:
      return {...state, loading: true, error: false};
    case ERROR:
      return {...state, loading: false, error: action.payload};
    case CLEAR_NEWS:
      return {...state, data: []};
    case READ_ITEM:
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export default news;
