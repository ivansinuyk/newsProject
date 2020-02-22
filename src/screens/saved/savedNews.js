import React, {Component} from 'react';
import {Container, Content} from 'native-base';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import News from '../../components/News';
import {SAVED_DETAILS} from '../../res/constants';
import NoSaved from '../../components/NoSaved';

class Saved extends Component {
  render() {
    const {backgroundColor, textColor, data, font, navigation} = this.props;
    return (
      <Container style={{flex: 1, backgroundColor: backgroundColor}}>
        <Header title={'Saved news'} details={true} color={textColor} />
        {!data[0] ? (
          <NoSaved backgroundColor={backgroundColor} textColor={textColor} />
        ) : (
          <Content padder>
            {data.map((item, index) => {
              return (
                <News
                  item={item}
                  key={index}
                  color={textColor}
                  backgroundColor={backgroundColor}
                  font={font}
                  toDetails={() =>
                    navigation.navigate(SAVED_DETAILS, {
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
  data: state.saved.data,
  backgroundColor: state.style.backgroundColor,
  textColor: state.style.color,
  font: state.style.fontSize,
});

export default connect(mapStateToProps)(Saved);
