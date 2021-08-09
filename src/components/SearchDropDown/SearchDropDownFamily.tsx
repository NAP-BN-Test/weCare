import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SearchDropDownFamily(props: any) {
  const {dataSource} = props;
  return (
    <ScrollView>
      <View style={styles.container}>
        {dataSource.length
          ? dataSource.map((item: any) => {
              return (
                <View style={[styles.subContainer]} key={item.id}>
                  <View style={styles.itemView}>
                    {item.avatar ? (
                      <Image
                        style={{height: 30, width: 30}}
                        source={{
                          uri: item.avatar,
                        }}
                      />
                    ) : null}

                    <Text style={[styles.itemText, {fontSize: 18}]}>
                      {item.name}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => props.onPressSearchDropDown(item)}>
                    <MaterialIcons name="person-add" size={28} color="cadetblue" />
                  </TouchableOpacity>
                </View>
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
    flexDirection: 'row',
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
