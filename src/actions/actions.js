import {
  GET_NEWS,
  SAVED_NEWS,
  LOADING,
  ERROR,
  READ_NEWS,
  DELETE_ALL,
  REFRESH_READ,
  CHANGE_TO_NIGHT,
  CHANGE_TO_DAY,
  CHANGE_FONT_SIZE,
  CLEAR_NEWS,
  READ_ITEM,
} from './actionTypes';
import {API} from '../res/constants';

export const getData = category => async (dispatch, getState) => {
  dispatch({
    type: CLEAR_NEWS,
  });
  dispatch({
    type: LOADING,
  });
  try {
    const api_url = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us${category}&pageSize=50&apiKey=${API}`,
    );
    const result = await api_url.json();

    const read = getState().read.data.filter(
      item => item.date + 280000000 > Date.now(),
    );
    // Filtring all read news older than 3 days

    dispatch({
      type: REFRESH_READ,
      payload: read,
    });

    const newArticles = result.articles.map(article => ({
      ...article,
      isRead: read.some(i => i.data === article.publishedAt),
      // Replacing receive data with already read persisted news
    }));

    dispatch({
      type: GET_NEWS,
      payload: newArticles,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const toggleSavedItem = item => ({
  // Add/delete news to saved in one toggling
  type: SAVED_NEWS,
  payload: item,
});

export const deleteAllSavedNews = () => ({
  type: DELETE_ALL,
});

export const readItem = item => (dispatch, getState) => {
  dispatch({
    type: READ_ITEM,
    payload: item,
  });
  const data = {
    data: [...getState().read.data, {date: Date.now(), data: item}],
  };
  dispatch({
    type: READ_NEWS,
    payload: data,
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
