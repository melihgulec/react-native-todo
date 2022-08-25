import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Texts from '../../constants/Texts';
import styles from './ElevatedButton.style';

const ElevatedButton = props => {
  return (
    <TouchableOpacity
      style={[styles.button, props.disabled && styles.disabledStyle]}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ElevatedButton;
