import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import News from './news';
import Saved from './saved';
import Setting from './settings';
import {NEWS, SAVED, SETTINGS} from '../res/constants';
import SettingIcon from 'react-native-vector-icons/Ionicons';
import NewsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SavedIcon from 'react-native-vector-icons/Fontisto';
import React from 'react';
import TabBar from '../components/TabBar';

const TabNavigator = createBottomTabNavigator(
  {
    [NEWS]: {
      screen: News,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <NewsIcon
            name={'newspaper'}
            color={tintColor}
            size={focused ? 35 : 25}
          />
        ),
      },
    },
    [SAVED]: {
      screen: Saved,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <SavedIcon
            name={'favorite'}
            color={tintColor}
            size={focused ? 35 : 25}
          />
        ),
      },
    },
    [SETTINGS]: {
      screen: Setting,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <SettingIcon
            name={'ios-settings'}
            color={tintColor}
            size={focused ? 35 : 25}
          />
        ),
      },
    },
  },
  {
    initialRouteName: NEWS,
    tabBarOptions: {
      showLabel: false,
    },
    tabBarComponent: props => <TabBar {...props} />,
  },
);

export default createAppContainer(TabNavigator);
