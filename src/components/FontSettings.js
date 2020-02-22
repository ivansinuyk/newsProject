import React from 'react';
import {Text, View} from 'react-native';
import TextStyle from './TextStyle';
import Slider from '@react-native-community/slider';
import {w} from '../res/constants';

const FontSettings = ({
  onValueChange,
  onSlidingComplete,
  font,
  fontSize,
  textColor,
}) => (
  <View
    style={{
      marginTop: 25,
      marginHorizontal: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
    }}>
    <TextStyle>Change font size of news</TextStyle>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
      }}>
      <Slider
        style={{width: w - w / 4, height: 40}}
        value={fontSize}
        minimumValue={12}
        maximumValue={20}
        step={1}
        onValueChange={onValueChange}
        onSlidingComplete={onSlidingComplete}
        minimumTrackTintColor="red"
        maximumTrackTintColor="green"
      />
      <Text
        style={{
          color: textColor,
          fontSize: font,
        }}>
        Check
      </Text>
    </View>
  </View>
);

export default FontSettings;
