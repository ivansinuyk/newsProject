import React from 'react';
import {Content, Body, Card, CardItem, Left} from 'native-base';
import {Text, Image} from 'react-native';
import TextStyle from './TextStyle';
import {date} from '../res/scripts/date';
import {h, w} from '../res/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Details = ({
  font,
  backgroundColor,
  item,
  iconColor,
  saveItem,
  navigate,
  details,
}) => {
  let imageShow = item.urlToImage ? item.urlToImage.includes('http') : false;
  return (
    <Content padder>
      <Card transparent>
        <CardItem style={{backgroundColor: backgroundColor}}>
          <Body>
            <TextStyle font={font + 2}>{item.title}</TextStyle>
          </Body>
        </CardItem>
        <CardItem style={{backgroundColor: backgroundColor}}>
          {imageShow && (
            <Image
              style={{
                height: h / 3,
                width: w - w / 6.5,
                resizeMode: 'contain',
                borderRadius: 1,
              }}
              source={{uri: item.urlToImage}}
            />
          )}
        </CardItem>
        <CardItem style={{backgroundColor: backgroundColor}}>
          <TextStyle font={font}>
            {item.description && item.description.replace(/&nbsp;/g, ' ')}
          </TextStyle>
        </CardItem>
        <CardItem style={{backgroundColor: backgroundColor}}>
          <Left>
            <Body>
              <TextStyle font={font - 2}>
                Author: {!item.author ? 'Unknown' : item.author}
              </TextStyle>
            </Body>
            <Body>
              <TextStyle font={font - 2}>{date(item.publishedAt)}</TextStyle>
            </Body>
          </Left>
        </CardItem>
        {details === true && (
          <CardItem
            style={{
              backgroundColor: backgroundColor,
            }}
            button
            onPress={navigate}>
            <Body>
              <Text style={{color: 'blue'}}>More news of this author...</Text>
            </Body>
          </CardItem>
        )}
        <CardItem
          button
          style={{backgroundColor: backgroundColor}}
          onPress={saveItem}>
          <Body>
            <Icon size={35} name={'favorite'} color={iconColor} />
          </Body>
        </CardItem>
      </Card>
    </Content>
  );
};

export default Details;
