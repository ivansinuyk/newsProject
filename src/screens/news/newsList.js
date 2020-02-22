import React, {Component} from 'react';
import {Container} from 'native-base';
import {ActivityIndicator, RefreshControl, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getData} from '../../actions/actions';
import {h, NEWS_DETAILS} from '../../res/constants';
import Header from '../../components/Header';
import News from '../../components/News';
import Category from '../../components/Category';
import Error from '../../components/Error';

class newsList extends Component {
  state = {
    category: '',
  };
  UNSAFE_componentWillMount() {
    this.props.dispatch(getData(this.state.category));
    // state.category меняется в зависимости от выбраной категории в Picker компоненте и отправляется запрос в newsAPI с другим ключом
    // например getData('') - изначально все новости и getData('&category=sports') - категория спорт
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
      dispatch,
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
            onPress={() => dispatch(getData(this.state.category))}
          />
        )}
        {data[0] && (
          <Container style={{backgroundColor: backgroundColor}}>
            <Category
              backgroundColor={backgroundColor}
              selectedValue={this.state.category}
              textColor={textColor}
              onValueChange={category => {
                dispatch(getData(category));
                this.setState({category: category});
              }}
            />
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={false}
                  onRefresh={() => dispatch(getData(this.state.category))}
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
              keyExtractor={item =>
                (
                  Date.parse(item.publishedAt) + Math.floor(Math.random() * 100)
                ).toString()
              }
            />
          </Container>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.news.data,
  loading: state.news.loading,
  error: state.news.error,
  change: state.read.data,
  backgroundColor: state.style.backgroundColor,
  textColor: state.style.color,
  font: state.style.fontSize,
});

export default connect(mapStateToProps)(newsList);
