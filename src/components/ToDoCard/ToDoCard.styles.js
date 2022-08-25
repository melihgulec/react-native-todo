import {StyleSheet} from 'react-native';
import Borders from '../../constants/Borders';
import Colors from '../../constants/Colors';
import BoxModel from '../../constants/BoxModel';

export default StyleSheet.create({
  container: {
    borderRadius: Borders.softRadius,
    backgroundColor: Colors.green,
    padding: BoxModel.normalPadding,
  },
  text: {
    color: Colors.white,
  },
  finishedText: {
    textDecorationLine: 'line-through',
    color: Colors.gray,
  },
  finishedBackground: {
    backgroundColor: Colors.darkAqua,
  },
});
