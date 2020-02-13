import React, {Component} from 'react';
import {Container, Content, Picker} from 'native-base';
import {
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  View
} from 'react-native';
import {connect} from 'react-redux';
import {getData} from '../../actions/actions';
import {h, NEWS_DETAILS, w} from '../../res/constants';
import Header from '../../components/Header';
import News from '../../components/News';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextStyle from '../../components/TextStyle';

class newsList extends Component {
  state = {
    category: '',
  };
  UNSAFE_componentWillMount() {
    this.props.getData(this.state.category);
  }
  render() {
    return (
      <Container style={{backgroundColor: this.props.backgroundColor, flex: 1}}>
        <Header
          onPress={this.props.navigation.toggleDrawer}
          title={'News'}
          details={true}
          color={this.props.textColor}
        />
        {this.props.loading && (
          <ActivityIndicator
            style={{height: h / 2 + 90, justifyContent: 'center'}}
            size={'large'}
            color={'#0000ff'}
          />
        )}
        {this.props.error && (
          <View
            style={{
              height: h / 2 + 90,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
              backroundColor: this.props.backgroundColor,
            }}>
            <TextStyle numberOfLines={3}>
              {this.props.error.toString()}
            </TextStyle>
            <TouchableOpacity
              style={{marginTop: 10}}
              onPress={() => this.props.getData(this.state.category)}>
              <Icon name={'reload'} size={35} color={'blue'} />
            </TouchableOpacity>
          </View>
        )}
        {this.props.data[0] && (
          <Content
            padder
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => this.props.getData(this.state.category)}
              />
            }>
            <Picker
              style={{
                height: 50,
                width: w,
                backgroundColor: this.props.backgroundColor,
                color: this.props.textColor,
              }}
              selectedValue={this.state.category}
              onValueChange={category => {
                this.props.getData(category);
                this.setState({category: category});
              }}>
              <Picker.Item label="All categories" value="" />
              <Picker.Item label="Business" value="&category=business" />
              <Picker.Item
                label="Entertainment"
                value="&category=entertainment"
              />
              <Picker.Item label="General" value="&category=general" />
              <Picker.Item label="Health" value="&category=health" />
              <Picker.Item label="Science" value="&category=science" />
              <Picker.Item label="Sports" value="&category=sports" />
              <Picker.Item label="Technology" value="&category=technology" />
            </Picker>
            {this.props.data.map((item, index) => {
              return (
                <News
                  item={item}
                  key={index}
                  font={this.props.font}
                  color={this.props.textColor}
                  backgroundColor={this.props.backgroundColor}
                  toDetails={() =>
                    this.props.navigation.navigate(NEWS_DETAILS, {
                      show: item,
                      details: true,
                    })
                  }
                />
              );
            })}
          </Content>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.newsReducers.data,
  loading: state.newsReducers.loading,
  error: state.newsReducers.error,
  change: state.readedReducers,
  backgroundColor: state.styleReducers.backgroundColor,
  textColor: state.styleReducers.color,
  font: state.styleReducers.fontSize,
});

const mapDispatchToProps = dispatch => ({
  getData: category => dispatch(getData(category)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(newsList);
