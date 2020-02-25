import React, {Component} from 'react';
import {Container} from 'native-base';
import Header from '../../components/Header';
import {AUTHOR_NEWS} from '../../res/constants';
import {connect} from 'react-redux';
import {readItem, toggleSavedItem} from '../../actions/actions';
import Details from '../../components/Details';

class authorDetails extends Component {
  componentDidMount() {
    this.props.readItem(this.props.navigation.getParam('show').publishedAt);
  }
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
    const details = this.props.navigation.getParam('details');
    const iconColor = data.map(item =>
      item.publishedAt === show.publishedAt ? 'red' : textColor,
    );
    return (
      <Container style={{flex: 1, backgroundColor: backgroundColor}}>
        <Header
          icon={'md-arrow-back'}
          details={details}
          color={textColor}
          onPress={navigation.goBack}
          back={() => navigation.navigate(AUTHOR_NEWS, {item: show})}
          title={show.source.name}
        />
        <Details
          backgroundColor={backgroundColor}
          item={show}
          font={font}
          iconColor={iconColor[0]}
          saveItem={() => toggleSavedItem(show)}
        />
      </Container>
    );
  }
}

const actionCreators = {
  readItem,
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
)(authorDetails);
