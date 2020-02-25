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
      toggleSavedItem,
      textColor,
      data,
    } = this.props;
    const show = this.props.navigation.getParam('show');
    const iconColor = data.map(item =>
      item.publishedAt === show.publishedAt ? 'red' : textColor,
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
          iconColor={iconColor[0]}
          navigate={() => navigation.navigate(AUTHOR_NEWS, {item: show})}
          saveItem={() => toggleSavedItem(show)}
          details={false}
        />
      </Container>
    );
  }
}

const actionCreators = {
  toggleSavedItem,
};

const mapState = state => ({
  data: state.saved.data,
  textColor: state.style.color,
  backgroundColor: state.style.backgroundColor,
  font: state.style.fontSize,
  read: state.read.data,
});

export default connect(
  mapState,
  actionCreators,
)(savedDetails);
