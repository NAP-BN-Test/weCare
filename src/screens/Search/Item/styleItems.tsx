import {StyleSheet} from 'react-native';

const stylesItem = StyleSheet.create({
  card_content: {
    marginBottom: 10,
  },

  rowFront: {},
  rowBack: {flex: 1},

  //

  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    // tra
    // width: 75,
  },

  backRightBtnLeft: {
    backgroundColor: 'white',
    right: 75,
  },

  backRightBtnRight: {
    backgroundColor: 'white',
    right: 0,
    width: 75,
  },

  backLeftBtnLeft: {
    backgroundColor: 'white',
    left: 0,
    width: 75,
  },

  backLeftBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    // tra
    // width: 75,
  },
});
export default stylesItem;
