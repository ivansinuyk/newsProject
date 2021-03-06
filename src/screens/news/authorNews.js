import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {AUTHOR_DETAILS, NEWS_LIST} from '../../res/constants';
import News from '../../components/News';
import {Container} from 'native-base';

class AuthorNews extends Component {
  render() {
    const {backgroundColor, textColor, navigation, data, font} = this.props;
    const item = navigation.getParam('item');
    return (
      <View style={{flex: 1, backgroundColor: backgroundColor}}>
        <Header
          icon={'md-arrow-back'}
          onPress={() => navigation.navigate(NEWS_LIST)}
          title={item.source.name}
          color={textColor}
          details={true}
        />
        <Container style={{backgroundColor: backgroundColor}}>
          <FlatList
            data={data.filter(el => el.source.name === item.source.name)}
            renderItem={el => (
              <News
                item={el.item}
                font={font}
                color={textColor}
                backgroundColor={backgroundColor}
                toDetails={() =>
                  navigation.navigate(AUTHOR_DETAILS, {
                    show: el.item,
                    details: true,
                  })
                }
              />
            )}
            keyExtractor={el => Date.parse(el.publishedAt).toString()}
          />
        </Container>
      </View>
    );
  }
}

const mapState = state => ({
  data: state.news.data,
  textColor: state.style.color,
  backgroundColor: state.style.backgroundColor,
  font: state.style.fontSize,
  change: state.read.data,
});

export default connect(mapState)(AuthorNews);
