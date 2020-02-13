import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import TextStyle from '../../components/TextStyle';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import News from '../../components/News';
import {NEWS_DETAILS, h} from '../../res/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Saved extends Component {
  render() {
    return (
      <Container style={{flex: 1, backgroundColor: this.props.backgroundColor}}>
        <Header
          onPress={this.props.navigation.toggleDrawer}
          title={'Saved news'}
          details={true}
          color={this.props.textColor}
        />
        {!this.props.data[0] ? (
          <Container
            style={{
              marginHorizontal: 15,
              height: h / 1.5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: this.props.backgroundColor,
            }}>
            <TextStyle>You don`t have any saved news</TextStyle>
            <TextStyle>
              For saving news, please, choose whatever you want and click on
              this icon{' '}
              <Icon
                size={18}
                name={'favorite-border'}
                color={this.props.textColor === 'black' ? 'black' : 'white'}
              />
              . After that it turns to{' '}
              <Icon size={18} name={'favorite'} color={'red'} />. If you want to
              remove news from saved, you just need to click again on this icon.
            </TextStyle>
          </Container>
        ) : (
          <Content padder>
            {this.props.data.map((item, index) => {
              return (
                <News
                  item={item}
                  key={index}
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
  data: state.savedReducers,
  backgroundColor: state.styleReducers.backgroundColor,
  textColor: state.styleReducers.color,
});

export default connect(mapStateToProps)(Saved);
