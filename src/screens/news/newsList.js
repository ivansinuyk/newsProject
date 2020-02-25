import React, {Component} from 'react';
import {Container} from 'native-base';
import {ActivityIndicator, RefreshControl, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getData, setValue} from '../../actions/actions';
import {h, NEWS_DETAILS} from '../../res/constants';
import Header from '../../components/Header';
import News from '../../components/News';
import Category from '../../components/Category';
import Error from '../../components/Error';

class newsList extends Component {
  state = {
    category: '',
  };

  componentDidMount() {
    this.props.getData(this.state.category);
    // state.category changed when you pick some category in Picker component and sended in NEWSAPI query with another key
    // for example: getData('') - always at start app and parse all news and getData('&category=sports') when you pick category sport
  }

  render() {
    const {
      backgroundColor,
      textColor,
      error,
      data,
      font,
      navigation,
      loading,
      getData,
    } = this.props;
    return (
      <Container style={{backgroundColor: backgroundColor, flex: 1}}>
        <Header title={'News'} details={true} color={textColor} />
        {loading && (
          <ActivityIndicator
            style={{height: h / 2 + 90, justifyContent: 'center'}}
            size={'large'}
            color={'#0000ff'}
          />
        )}
        {error && (
          <Error
            backgroundColor={backgroundColor}
            error={error}
            onPress={() => getData(this.state.category)}
          />
        )}
        {data[0] && (
          <Container style={{backgroundColor: backgroundColor}}>
            <Category
              backgroundColor={backgroundColor}
              selectedValue={this.state.category}
              textColor={textColor}
              onValueChange={category => {
                getData(category);
                this.setState({category: category});
              }}
            />
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={false}
                  onRefresh={() => getData(this.state.category)}
                />
              }
              data={data}
              renderItem={({item}) => (
                <News
                  item={item}
                  font={font}
                  color={textColor}
                  backgroundColor={backgroundColor}
                  toDetails={() =>
                    navigation.navigate(NEWS_DETAILS, {
                      show: item,
                      details: true,
                    })
                  }
                />
              )}
              keyExtractor={el => Date.parse(el.publishedAt).toString()}
            />
          </Container>
        )}
      </Container>
    );
  }
}

const actionCreators = {
  getData,
};

const mapState = state => ({
  text: state.news.text,
  data: state.news.data,
  loading: state.news.loading,
  error: state.news.error,
  change: state.read.data,
  backgroundColor: state.style.backgroundColor,
  textColor: state.style.color,
  font: state.style.fontSize,
});

export default connect(
  mapState,
  actionCreators,
)(newsList);
