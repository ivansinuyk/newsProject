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
    dispatch({
      type: REFRESH_READ,
      payload: read,
    });
    read.map(el =>
      result.articles.map(item =>
        el.data === item.publishedAt ? (item.isRead = true) : {},
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

export const toggleSavedItem = item => ({
  // Добавляем\удаляем сохраненную новость в одно нажатие
  type: SAVED_NEWS,
  payload: item,
});

export const deleteAllSavedNews = () => ({
  type: DELETE_ALL,
});

export const readItem = item => (dispatch, getState) => {
  const newsData = getState().news.data;
  newsData.map(el => (el.publishedAt === item ? (el.isRead = true) : {}));
  //Если даты совпадают мы меняем значение isRead на true
  dispatch({
    type: READ_ITEM,
    payload: newsData,
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
