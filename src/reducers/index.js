import {combineReducers} from 'redux';
import newsReducers from './newsReducers';
import savedReducers from './savedReducers';
import readedReducers from './readedReducers';
import styleReducers from './styleReducers';

export default combineReducers({
  newsReducers,
  savedReducers,
  readedReducers,
  styleReducers,
});
