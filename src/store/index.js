import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import ReduxThunk from 'redux-thunk';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: 'news',
  // Do not persist current news from getData
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));

let persistor = persistStore(store);

export {store, persistor};
