import {BottomTabBar} from 'react-navigation-tabs';
import React from 'react';
import {connect} from 'react-redux';

const TabBarComponent = props => {
  return (
    <BottomTabBar
      {...props}
      inactiveTintColor={props.color}
      style={{backgroundColor: props.backgroundColor}}
    />
  );
};

const mapStateToProps = state => ({
  backgroundColor: state.styleReducers.backgroundColor,
  color: state.styleReducers.color,
});

export default connect(mapStateToProps)(TabBarComponent);
