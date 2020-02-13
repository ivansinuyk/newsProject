import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

const TextStyle = props => (
  <Text
    style={{
      color: props.textColor,
      fontSize: props.font,
      opacity: props.opacity && 0.5,
    }}>
    {props.children}
  </Text>
);

const mapStateToProps = state => ({
  textColor: state.styleReducers.color,
});

export default connect(mapStateToProps)(TextStyle);
