import React from 'react';
import {TextInput} from 'react-native';
import Colors from '../../constants/Colors';
import Texts from '../../constants/Texts';
import styles from './TodoInput.styles';

const TodoInput = props => {
  return (
    <TextInput
      style={styles.input}
      placeholder={Texts.placeholder}
      placeholderTextColor={Colors.white}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

export default TodoInput;
