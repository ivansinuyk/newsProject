import {createStackNavigator} from 'react-navigation-stack';
import savedNews from './savedNews';
import savedDetails from './savedDetails';
import {SAVED_NEWS, SAVED_DETAILS} from '../../res/constants';

export default createStackNavigator(
  {
    [SAVED_NEWS]: savedNews,
    [SAVED_DETAILS]: savedDetails,
  },
  {
    initialRouteName: SAVED_NEWS,
    headerMode: 'none',
  },
);
