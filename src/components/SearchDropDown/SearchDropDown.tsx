import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

export default function SearchDropDown(props: any) {
  const {dataSource} = props;
  return (
    <ScrollView>
      <View style={styles.container}>
        {dataSource.length
          ? dataSource.map((item: any) => {
              return (
                <TouchableOpacity
                  onPress={() => props.onPressSearchDropDown(item)}
                  key={item.id}>
                  <View style={[styles.subContainer]}>
                    <View style={styles.itemView}>
                      <Image
                        style={{height: 50, width: 50}}
                        source={{
                          uri: item.img,
                        }}
                      />
                      <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })
          : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 165,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // zIndex: 9999999,
  },
  subContainer: {
    backgroundColor: '#fff',
    paddingTop: 10,
    // marginHorizontal: 10,
    // borderTopLeftRadius: 4,
    // borderTopRightRadius: 4,
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
  },
  itemView: {
    // marginHorizontal: '10%',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 30,
    width: '90%',
    marginBottom: 10,
    paddingHorizontal: 10,
    // justifyContent: 'space-between',
    borderRadius: 4,
  },
  itemText: {
    color: 'black',
    paddingHorizontal: 10,
    fontSize: 20,
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
