import React, {Component} from 'react';
import {View, TouchableOpacity, Switch, Text, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Slider from '@react-native-community/slider';
import {connect} from 'react-redux';
import {
  deleteAllSavedNews,
  changeToDay,
  changeToNight,
  changeFontSize,
} from '../../actions/actions';
import TextStyle from '../../components/TextStyle';
import {w} from '../../res/constants';

class Setting extends Component {
  state = {
    font: this.props.fontSize,
  };
  render() {
    const {items} = styles;
    return (
      <View style={{flex: 1, backgroundColor: this.props.backgroundColor}}>
        <Header
          onPress={this.props.navigation.toggleDrawer}
          title={'Settings'}
          color={this.props.textColor}
          details={true}
        />
        <View>
          <View style={items}>
            <TextStyle>Change theme</TextStyle>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <Switch
                style={{width: '10%'}}
                onValueChange={() =>
                  !this.props.switch
                    ? this.props.changeToNight()
                    : this.props.changeToDay()
                }
                value={this.props.switch}
              />
              <TextStyle>
                Current theme: {!this.props.switch ? 'day' : 'night'}
              </TextStyle>
            </View>
          </View>
          <View style={items}>
            <TextStyle>Change font size of news</TextStyle>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <Slider
                style={{width: w - w / 4, height: 40}}
                value={this.props.fontSize}
                minimumValue={12}
                maximumValue={20}
                step={2}
                onValueChange={val => this.setState({font: val})}
                onSlidingComplete={value => this.props.changeFontSize(value)}
                minimumTrackTintColor="red"
                maximumTrackTintColor="green"
              />
              <Text
                style={{
                  color: this.props.textColor,
                  fontSize: this.state.font,
                }}>
                Check
              </Text>
            </View>
          </View>
          <View style={items}>
            <TextStyle>Saved news</TextStyle>
            <TouchableOpacity
              onPress={() => this.props.deleteAll()}
              style={{
                width: w / 2,
                borderColor: 'gray',
                borderWidth: 1,
                margin: 20,
                borderRadius: 15,
              }}>
              <TextStyle>
                Tab here to delete{' '}
                {this.props.deleteSaved.length
                  ? this.props.deleteSaved.length
                  : 'Empty'}
              </TextStyle>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  items: {
    marginTop: 25,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

const mapStateToProps = state => ({
  deleteSaved: state.savedReducers,
  switch: state.styleReducers.switch,
  textColor: state.styleReducers.color,
  backgroundColor: state.styleReducers.backgroundColor,
  fontSize: state.styleReducers.fontSize,
});

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAllSavedNews()),
  changeToDay: () => dispatch(changeToDay()),
  changeToNight: () => dispatch(changeToNight()),
  changeFontSize: value => dispatch(changeFontSize(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setting);
