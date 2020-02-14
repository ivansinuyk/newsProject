import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {NEWS_DETAILS, NEWS_LIST} from '../../res/constants';
import News from '../../components/News';

class AuthorNews extends Component {
  render() {
    const {item} = this.props.navigation.state.params;
    return (
      <View style={{flex: 1, backgroundColor: this.props.backgroundColor}}>
        <Header
          icon={'md-arrow-back'}
          onPress={() => this.props.navigation.navigate(NEWS_LIST)}
          title={item.source.name}
          color={this.props.textColor}
          details={true}
        />
        <ScrollView>
          {this.props.data.map((el, index) => {
            if (el.source.name === item.source.name) {
              return (
                <News
                  color={this.props.textColor}
                  backgroundColor={this.props.backgroundColor}
                  font={this.props.font}
                  item={el}
                  key={index}
                  toDetails={() =>
                    this.props.navigation.navigate(NEWS_DETAILS, {
                      show: item,
                      details: false,
                    })
                  }
                />
              );
            }
          })}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.newsReducers.data,
  textColor: state.styleReducers.color,
  backgroundColor: state.styleReducers.backgroundColor,
  font: state.styleReducers.fontSize,
});

export default connect(mapStateToProps)(AuthorNews);
