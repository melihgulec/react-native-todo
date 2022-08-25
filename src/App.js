import React, {useEffect, useState} from 'react';

import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import HeadText from './components/HeadText/HeadText';
import Texts from './constants/Texts';
import BoxModel from './constants/BoxModel';
import Colors from './constants/Colors';
import Borders from './constants/Borders';
import TodoInput from './components/TodoInput/TodoInput';
import ElevatedButton from './components/ElevatedButton/ElevatedButton';
import ToDoCard from './components/ToDoCard/ToDoCard';
import Divider from './components/Divider/Divider';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [todoCount, setTodoCount] = useState(0);

  const renderTodo = ({item}) => (
    <ToDoCard todo={item} todos={todos} setTodos={setTodos} />
  );

  const handleText = text => setTodo(text);

  const saveTodo = () => {
    setTodos([...todos, {id: Date.now(), name: todo, isFinished: false}]);
    setTodo('');
  };

  useEffect(() => {
    const filteredTodos = todos.filter(todo => todo.isFinished === false);
    setTodoCount(filteredTodos.length);
  }, [todos]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headContainer}>
        <HeadText text={Texts.toDoTitle} />
        <HeadText text={todoCount} />
      </View>
      <View style={styles.content}>
        <FlatList
          keyExtractor={data => data.id}
          data={todos}
          renderItem={renderTodo}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TodoInput onChangeText={handleText} value={todo} />
        <ElevatedButton
          title={Texts.save}
          onPress={saveTodo}
          disabled={todo.length > 0 ? false : true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: BoxModel.pagePadding,
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    padding: BoxModel.normalPadding,
    height: 135,
    backgroundColor: Colors.secondaryColor,
    borderRadius: Borders.fullRadius,
  },
  content: {
    flex: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
});

export default App;
