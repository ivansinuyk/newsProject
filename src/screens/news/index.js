import {createStackNavigator} from 'react-navigation-stack';
import newsList from './newsList';
import newsDetails from './newsDetails';
import authorNews from './authorNews';
import authorDetails from './authorDetails';
import {
  NEWS_LIST,
  NEWS_DETAILS,
  AUTHOR_NEWS,
  AUTHOR_DETAILS,
} from '../../res/constants';

export default createStackNavigator(
  {
    [NEWS_LIST]: newsList,
    [NEWS_DETAILS]: newsDetails,
    [AUTHOR_NEWS]: authorNews,
    [AUTHOR_DETAILS]: authorDetails,
  },
  {
    initialRouteName: NEWS_LIST,
    headerMode: 'none',
  },
);
