import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {w} from '../res/constants';

const Header = ({title, onPress, icon, color, details, back}) => (
  <SafeAreaView style={styles.safe}>
<StatusBar barStyle={color === 'white' ? 'light-content' : 'dark-content'}/>
    {icon && (
      <TouchableOpacity
        style={styles.icon}
        onPress={() => (details ? onPress() : back())}>
        <Icon color={color} name={icon} size={50} />
      </TouchableOpacity>
    )}
    <View style={[styles.title, {width: icon ? w-w/6 : w}, !icon && {alignItems: 'center'}]}>
      <Text
        style={[styles.text, {color: color}]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title}
      </Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safe: {
    flexDirection: 'row',
    height: 60,
    width: w,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 35,
    fontFamily: 'serif',
  },
  icon: {
    margin: 5,
  },
  title: {
    justifyContent: 'center',
  },
});

export default Header;
