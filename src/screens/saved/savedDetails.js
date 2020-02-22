import React, {Component} from 'react';
import {Container} from 'native-base';
import Header from '../../components/Header';
import {AUTHOR_NEWS} from '../../res/constants';
import {connect} from 'react-redux';
import {toggleSavedItem} from '../../actions/actions';
import Details from '../../components/Details';

class savedDetails extends Component {
  render() {
    const {
      backgroundColor,
      font,
      navigation,
      dispatch,
      textColor,
      data,
    } = this.props;
    const show = this.props.navigation.getParam('show');
    let iconColor = textColor;
    data.find(
      item => item.publishedAt === show.publishedAt && (iconColor = 'red'),
    );
    return (
      <Container style={{flex: 1, backgroundColor: backgroundColor}}>
        <Header
          icon={'md-arrow-back'}
          details={true}
          color={textColor}
          onPress={navigation.goBack}
          title={show.source.name}
        />
        <Details
          backgroundColor={backgroundColor}
          item={show}
          font={font}
          iconColor={iconColor}
          navigate={() => navigation.navigate(AUTHOR_NEWS, {item: show})}
          saveItem={() => dispatch(toggleSavedItem(show))}
          details={false}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.saved.data,
  textColor: state.style.color,
  backgroundColor: state.style.backgroundColor,
  font: state.style.fontSize,
  read: state.read.data,
});

export default connect(mapStateToProps)(savedDetails);
