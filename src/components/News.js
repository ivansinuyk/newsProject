import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Body, Card, CardItem, Right, Left} from 'native-base';
import TextStyle from './TextStyle';
import {w} from '../res/constants/';
import {date} from '../res/scripts/date';

const News = ({toDetails, backgroundColor, font, item}) => {
  return (
    <TouchableOpacity onPress={() => toDetails()}>
      <Card>
        <CardItem header bordered style={{backgroundColor: backgroundColor}}>
          <Body style={{alignItems: 'center'}}>
            <TextStyle font={font + 2}>{item.source.name}</TextStyle>
          </Body>
        </CardItem>
        <CardItem bordered style={{backgroundColor: backgroundColor}}>
          <Left>
            <Body style={{marginRight: 25}}>
              <TextStyle font={font}>{item.title}</TextStyle>
            </Body>
          </Left>
          <Right>
            <Body>
              <Image
                source={{uri: item.urlToImage}}
                style={{height: 125, width: w / 2.7}}
              />
            </Body>
          </Right>
        </CardItem>
        <CardItem footer bordered style={{backgroundColor: backgroundColor}}>
          <TextStyle font={font - 2}>{date(item.publishedAt)}</TextStyle>
          {item.isRead && (
            <Right>
              <TextStyle opacity font={font - 2}>
                Read
              </TextStyle>
            </Right>
          )}
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default News;
