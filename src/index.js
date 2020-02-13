import React, {Component} from 'react';
import Main from './screens';
import {store, persistor} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './components/Loading';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
