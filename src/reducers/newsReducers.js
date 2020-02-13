import {GET_NEWS, LOADING, ERROR} from '../actions/actionTypes';

const initialState = {
  data: [],
  loading: true,
  error: false,
  category: '',
};

const newsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {data: action.payload, loading: false, error: false};
    case LOADING:
      return {...state, loading: true, error: false};
    case ERROR:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default newsReducers;
