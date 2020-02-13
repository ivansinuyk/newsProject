import React, {Component} from 'react';
import {Container, Content, Body, Card, CardItem, Left} from 'native-base';
import {Image, StyleSheet, Text} from 'react-native';
import Header from '../../components/Header';
import {w, h, AUTHOR_NEWS, NEWS_DETAILS} from '../../res/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {savedItem, readedItem} from '../../actions/actions';
import TextStyle from '../../components/TextStyle';
import { date } from '../../res/scripts/date';

class Details extends Component {
  readItem() {
    !this.props.navigation.state.params.show.isReaded &&
      this.props.readNews(this.props.navigation.state.params.show.publishedAt);
  }
  UNSAFE_componentWillMount() {
    this.readItem();
  }
  componentDidUpdate() {
    this.readItem();
  }
  render() {
    const {image, icon} = styles;
    const {show, details} = this.props.navigation.state.params;
    let color = this.props.textColor;
    this.props.data.forEach(
      item => item.publishedAt === show.publishedAt && (color = 'red'),
    );
    let imageShow = show.urlToImage ? show.urlToImage.includes('http') : false;
    return (
      <Container style={{flex: 1, backgroundColor: this.props.backgroundColor}}>
        <Header
          icon={'md-arrow-back'}
          details={details}
          color={this.props.textColor}
          onPress={this.props.navigation.goBack}
          back={() => this.props.navigation.navigate(AUTHOR_NEWS, {item: show})}
          title={show.source.name}
        />
        <Content padder>
          <Card transparent>
            <CardItem style={{backgroundColor: this.props.backgroundColor}}>
              <Body>
                <TextStyle font={this.props.font + 2}>{show.title}</TextStyle>
              </Body>
            </CardItem>
            <CardItem style={{backgroundColor: this.props.backgroundColor}}>
              {imageShow && (
                <Image style={image} source={{uri: show.urlToImage}} />
              )}
            </CardItem>
            <CardItem style={{backgroundColor: this.props.backgroundColor}}>
              <TextStyle font={this.props.font}>
                {show.description && show.description.replace(/&nbsp;/g, ' ')}
              </TextStyle>
            </CardItem>
            <CardItem style={{backgroundColor: this.props.backgroundColor}}>
              <Left>
                <Body>
                  <TextStyle font={this.props.font - 2}>Author: {!show.author ? 'Unknown' : show.author}</TextStyle>
                </Body>
                <Body>
                  <TextStyle font={this.props.font - 2}>
                    {date(show.publishedAt)}
                  </TextStyle>
                </Body>
              </Left>
            </CardItem>
            {details === true && (
              <CardItem
                style={{
                  backgroundColor: this.props.backgroundColor,
                }}
                button
                onPress={() =>
                  this.props.navigation.navigate(AUTHOR_NEWS, {item: show})
                }>
                <Body>
                  <Text style={{color: 'blue'}}>
                    More news of this author...
                  </Text>
                </Body>
              </CardItem>
            )}
            <CardItem
              button
              style={[icon, {backgroundColor: this.props.backgroundColor}]}
              onPress={() => this.props.savedNews(show)}>
              <Body>
                <Icon size={35} name={'favorite'} color={color} />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  savedNews: item => dispatch(savedItem(item)),
  readNews: item => dispatch(readedItem(item)),
});

const mapStateToProps = state => ({
  data: state.savedReducers,
  textColor: state.styleReducers.color,
  backgroundColor: state.styleReducers.backgroundColor,
  font: state.styleReducers.fontSize,
});

const styles = StyleSheet.create({
  image: {
    height: h / 3,
    width: w - w / 6.5,
    resizeMode: 'contain',
    borderRadius: 1,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
