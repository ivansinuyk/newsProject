import React from 'react';
import {Switch, View} from 'react-native';
import TextStyle from './TextStyle';

const ThemeSettings = ({sw, toDay, toNight}) => (
  <View
    style={{
      marginTop: 25,
      marginHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
    }}>
    <TextStyle>Change theme</TextStyle>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
      }}>
      <Switch
        style={{width: '10%'}}
        onValueChange={() => (!sw ? toNight() : toDay())}
        value={sw}
      />
      <TextStyle>Current theme: {!sw ? 'day' : 'night'}</TextStyle>
    </View>
  </View>
);

export default ThemeSettings;
