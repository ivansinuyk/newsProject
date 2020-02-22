import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import TextStyle from './TextStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {h} from '../res/constants';

const Error = ({error, onPress, backgroundColor}) => (
  <View
    style={{
      height: h / 2 + 90,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      backroundColor: backgroundColor,
    }}>
    <TextStyle numberOfLines={3}>{error.toString()}</TextStyle>
    <TouchableOpacity style={{marginTop: 10}} onPress={onPress}>
      <Icon name={'reload'} size={35} color={'blue'} />
    </TouchableOpacity>
  </View>
);

export default Error;
