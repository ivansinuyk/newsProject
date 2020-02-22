import {SAVED_NEWS, DELETE_ALL} from '../actions/actionTypes';

const initialState = {
  data: [],
};

const saved = (state = initialState, action) => {
  switch (action.type) {
    case SAVED_NEWS:
      const before = state.data.length;
      const arr = state.data.filter(
        item => item.publishedAt !== action.payload.publishedAt,
      );
      const push =
        before === arr.length ? [action.payload, ...state.data] : arr;
      // Если кол-во сохраненных новостей в стейте ровняется кол-ву новостей в отфильтрованом массиве,
      // значит этой новости нету в сохраненных и мы ее пушим в масив, а если больше значит возвращаем отфилтрованный масив без нее
      return {data: push};
    case DELETE_ALL:
      return {data: []};
    default:
      return state;
  }
};

export default saved;
