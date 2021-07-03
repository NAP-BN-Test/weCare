import {StyleSheet} from 'react-native';

const stylesGlobal = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  footer: {
    flex: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  modalView: {
    backgroundColor: 'white',
    padding: 20,
    // borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '100%',
    width: '100%',
  },

  input: {
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  action: {
    // flexDirection: 'row',
    // marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
  },

  space_between: {flexDirection: 'row', justifyContent: 'space-between'},
  row_center: {flexDirection: 'row', justifyContent: 'center'},

});
export default stylesGlobal;
