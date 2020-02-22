import React from 'react';
import {Picker} from 'native-base';
import {w} from '../res/constants';

const Error = ({selectedValue, onValueChange, backgroundColor, textColor}) => (
  <Picker
    style={{
      height: 50,
      width: w,
      backgroundColor: backgroundColor,
      color: textColor,
    }}
    selectedValue={selectedValue}
    onValueChange={onValueChange}>
    <Picker.Item label="All categories" value="" />
    <Picker.Item label="Business" value="&category=business" />
    <Picker.Item label="Entertainment" value="&category=entertainment" />
    <Picker.Item label="General" value="&category=general" />
    <Picker.Item label="Health" value="&category=health" />
    <Picker.Item label="Science" value="&category=science" />
    <Picker.Item label="Sports" value="&category=sports" />
    <Picker.Item label="Technology" value="&category=technology" />
  </Picker>
);

export default Error;
