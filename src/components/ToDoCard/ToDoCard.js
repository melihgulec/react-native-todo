import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Texts from '../../constants/Texts';
import styles from './ToDoCard.styles';

const ToDoCard = ({todo, todos, setTodos}) => {
  const handlePress = () => {
    const item = todos.find(item => todo.id === item.id);
    item.isFinished = !item.isFinished;
    setTodos([...todos]);
  };

  const handleLongPress = () => {
    Alert.alert(Texts.toDoDeleteTitle, Texts.toDoDeleteDescription, [
      {text: 'Evet', onPress: deleteToDo},
      {text: 'Hayır', style: 'cancel'},
    ]);
  };

  const deleteToDo = () => {
    const deletedList = todos.filter(item => item.id !== todo.id);
    setTodos(deletedList);
  };

  return (
    <TouchableOpacity onPress={handlePress} onLongPress={handleLongPress}>
      <View
        style={[
          styles.container,
          todo.isFinished && styles.finishedBackground,
        ]}>
        <Text style={[styles.text, todo.isFinished && styles.finishedText]}>
          {todo.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ToDoCard;
