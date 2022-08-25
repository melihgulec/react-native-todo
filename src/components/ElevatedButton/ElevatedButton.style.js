import {StyleSheet} from 'react-native';
import Borders from '../../constants/Borders';
import BoxModel from '../../constants/BoxModel';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  button: {
    borderRadius: Borders.fullRadius,
    backgroundColor: Colors.yellow,
    color: Colors.white,
    padding: BoxModel.normalPadding,
  },
  title: {
    color: Colors.white,
    textAlign: 'center',
  },
  disabledStyle: {
    backgroundColor: Colors.darkAqua,
  }
});
