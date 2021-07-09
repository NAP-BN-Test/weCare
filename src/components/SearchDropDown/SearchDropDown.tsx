import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';

export default function SearchDropDown(props: any) {
  const {dataSource} = props;
  return (
    <View style={styles.container}>
      <ScrollView>
        {dataSource.length
          ? dataSource.map((item: any) => {
              return (
                <TouchableOpacity
                  onPress={() => props.onPressSearchDropDown(item)}>
                  <View style={[styles.subContainer]}>
                    <View style={styles.itemView}>
                      <Text style={styles.itemText}>{item}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 165,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999999,
  },
  subContainer: {
    backgroundColor: '#fff',
    paddingTop: 10,
    marginHorizontal: 10,
    // borderTopLeftRadius: 4,
    // borderTopRightRadius: 4,
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  itemView: {
    // marginHorizontal: '10%',
    backgroundColor: 'white',
    height: 30,
    width: '90%',
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 4,
  },
  itemText: {
    color: 'black',
    paddingHorizontal: 10,
  },
  noResultView: {
    alignSelf: 'center',
    // margin: 20,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  noResultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
