import {h} from '../res/constants';
import TextStyle from './TextStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container} from 'native-base';
import React from 'react';

const NoSaved = ({backgroundColor, textColor}) => (
  <Container
    style={{
      marginHorizontal: 15,
      height: h / 1.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor,
    }}>
    <TextStyle>You don`t have any saved news</TextStyle>
    <TextStyle>
      For saving news, please, choose whatever you want and click on this icon{' '}
      <Icon
        size={18}
        name={'favorite-border'}
        color={textColor === 'black' ? 'black' : 'white'}
      />
      . After that it turns to{' '}
      <Icon size={18} name={'favorite'} color={'red'} />. If you want to remove
      news from saved, you just need to click again on this icon.
    </TextStyle>
  </Container>
);

export default NoSaved;
