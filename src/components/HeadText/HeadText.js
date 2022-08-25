import React from 'react';
import {Text} from 'react-native';
import styles from './HeadText.styles';

const HeadText = props => {
  return <Text style={styles.title}>{props.text}</Text>;
};

export default HeadText;
