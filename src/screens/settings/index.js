import React, {Component} from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {
  deleteAllSavedNews,
  changeToDay,
  changeToNight,
  changeFontSize,
} from '../../actions/actions';
import ThemeSettings from '../../components/ThemeSettings';
import FontSettings from '../../components/FontSettings';
import DeleteSettings from '../../components/DeleteSaved';

class Setting extends Component {
  state = {
    font: this.props.fontSize,
  };
  render() {
    const {
      backgroundColor,
      textColor,
      sw,
      fontSize,
      saved,
      changeToDay,
      changeToNight,
      changeFontSize,
      deleteAllSavedNews,
    } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: backgroundColor}}>
        <Header title={'Settings'} color={textColor} details={true} />
        <View>
          <ThemeSettings
            sw={sw}
            toNight={() => changeToNight()}
            toDay={() => changeToDay()}
          />
          <FontSettings
            textColor={textColor}
            fontSize={fontSize}
            onValueChange={val => this.setState({font: val})}
            onSlidingComplete={value => changeFontSize(value)}
            font={this.state.font}
          />
          <DeleteSettings onPress={() => deleteAllSavedNews()} saved={saved} />
        </View>
      </View>
    );
  }
}

const actionCreators = {
  deleteAllSavedNews,
  changeFontSize,
  changeToDay,
  changeToNight,
};

const mapState = state => ({
  saved: state.saved.data,
  sw: state.style.switch,
  textColor: state.style.color,
  backgroundColor: state.style.backgroundColor,
  fontSize: state.style.fontSize,
});

export default connect(
  mapState,
  actionCreators,
)(Setting);
