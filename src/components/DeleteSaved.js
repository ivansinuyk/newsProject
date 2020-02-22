import TextStyle from './TextStyle';
import {TouchableOpacity, View} from 'react-native';
import {w} from '../res/constants';
import React from 'react';

const DeleteSettings = ({onPress, saved}) => (
  <View>
    <TextStyle>Saved news</TextStyle>
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: w / 2,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 20,
        borderRadius: 15,
      }}>
      <TextStyle>
        Tab here to delete {saved.length ? saved.length : 'Empty'}
      </TextStyle>
    </TouchableOpacity>
  </View>
);

export default DeleteSettings;
