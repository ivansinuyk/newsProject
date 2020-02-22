import React, {Component} from 'react';
import {Container} from 'native-base';
import Header from '../../components/Header';
import {AUTHOR_NEWS} from '../../res/constants';
import {connect} from 'react-redux';
import {readItem, toggleSavedItem} from '../../actions/actions';
import Details from '../../components/Details';

class authorDetails extends Component {
  componentDidMount() {
    this.props.dispatch(
      readItem(this.props.navigation.getParam('show').publishedAt),
    );
  }
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
    const details = this.props.navigation.getParam('details');
    let iconColor = textColor;
    data.find(
      item => item.publishedAt === show.publishedAt && (iconColor = 'red'),
    );
    return (
      <Container style={{flex: 1, backgroundColor: this.props.backgroundColor}}>
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
          iconColor={iconColor}
          saveItem={() => dispatch(toggleSavedItem(show))}
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

export default connect(mapStateToProps)(authorDetails);
