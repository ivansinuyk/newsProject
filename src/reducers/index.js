import {combineReducers} from 'redux';
import news from './news';
import saved from './saved';
import read from './read';
import style from './style';

export default combineReducers({
  news,
  saved,
  read,
  style,
});
