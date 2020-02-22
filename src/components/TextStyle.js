import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';

const TextStyle = ({textColor, font, opacity, children}) => (
  <Text
    style={{
      color: textColor,
      fontSize: font,
      opacity: opacity && 0.5,
    }}>
    {children}
  </Text>
);

const mapStateToProps = state => ({
  textColor: state.style.color,
});

export default connect(mapStateToProps)(TextStyle);
