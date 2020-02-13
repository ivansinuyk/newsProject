import {
  GET_NEWS,
  SAVED_NEWS,
  LOADING,
  ERROR,
  READED_NEWS,
  DELETE_ALL,
  REFRESH_READED,
  CHANGE_TO_NIGHT,
  CHANGE_TO_DAY,
  CHANGE_FONT_SIZE,
} from './actionTypes';
import {API} from '../res/constants';

export const getData = category => async (dispatch, getState) => {
  getState().newsReducers.data = [];
  dispatch({
    type: LOADING,
  });
  try {
    const api_url = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us${category}&pageSize=50&apiKey=${API}`,
    );
    const result = await api_url.json();
    const readed = getState().readedReducers.filter(
      item => item.date + 280000000 > Date.now(),
    );
    dispatch({
      type: REFRESH_READED,
      payload: readed,
    });
    readed.map(el =>
      result.articles.map(item =>
        el.data === item.publishedAt ? (item.isReaded = true) : {},
      ),
    );
    dispatch({
      type: GET_NEWS,
      payload: result.articles,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const savedItem = item => ({
  type: SAVED_NEWS,
  payload: item,
});

export const deleteAllSavedNews = () => ({
  type: DELETE_ALL,
});

export const readedItem = item => (dispatch, getState) => {
  getState().newsReducers.data.map(el =>
    el.publishedAt === item ? (el.isReaded = true) : {},
  );
  dispatch({
    type: READED_NEWS,
    payload: item,
  });
};

export const changeToNight = () => ({
  type: CHANGE_TO_NIGHT,
});

export const changeToDay = () => ({
  type: CHANGE_TO_DAY,
});

export const changeFontSize = value => ({
  type: CHANGE_FONT_SIZE,
  payload: value,
});
