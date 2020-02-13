import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Body, Card, CardItem, Right, Left} from 'native-base';
import TextStyle from './TextStyle';
import {w} from '../res/constants/';
import { date } from '../res/scripts/date';

const News = props => {
  return (
    <TouchableOpacity onPress={() => props.toDetails()}>
      <Card>
        <CardItem
          header
          bordered
          style={{backgroundColor: props.backgroundColor}}>
          <Body style={{alignItems: 'center'}}>
            <TextStyle font={props.font + 2}>{props.item.source.name}</TextStyle>
          </Body>
        </CardItem>
        <CardItem bordered style={{backgroundColor: props.backgroundColor}}>
          <Left>
            <Body style={{marginRight: 25}}>
              <TextStyle font={props.font}>{props.item.title}</TextStyle>
            </Body>
          </Left>
          <Right>
            <Body>
              <Image
                source={{uri: props.item.urlToImage}}
                style={{height: 125, width: w / 2.7}}
              />
            </Body>
          </Right>
        </CardItem>
        <CardItem
          footer
          bordered
          style={{backgroundColor: props.backgroundColor}}>
          <TextStyle font={props.font - 2}>{date(props.item.publishedAt)}</TextStyle>
          {props.item.isReaded && (
            <Right>
              <TextStyle opacity font={props.font - 2}>Readed</TextStyle>
            </Right>
          )}
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default News;
