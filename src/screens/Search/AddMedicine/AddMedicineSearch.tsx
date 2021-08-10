import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reducers/index.reducer';
import {ListItem, Avatar} from 'react-native-elements';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import TouchableScale from 'react-native-touchable-scale';
import TimePickerPage from '../../../components/TimePicker/TimePicker';
function AddMedicineSearch({route, navigation}: any) {
  console.log('route', route);
  const [arrayNote, setarrayNote] = useState([
    {
      id: '1',
      date: '01/02/2021',
      title: 'Đơn số 1',
    },

    {
      id: '2',
      date: '01/02/2021',
      title: 'Đơn số 2',
    },

    {
      id: '3',
      date: '01/02/2021',
      title: 'Đơn số 3',
    },

    {
      id: '4',
      date: '01/02/2021',
      title: 'Đơn số 4',
    },
  ]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingHorizontal: 20}}>
        <View style={styles.Itemfooter}>
          <View style={{width: '30%'}}>
            <Text style={{fontWeight: 'bold'}}>Tên thuốc:</Text>
          </View>

          <View style={{width: '70%'}}>
            <Text style={{color: 'gray'}}>{route.params.item.name}</Text>
          </View>
        </View>

        <View style={styles.Itemfooter}>
          <View style={{width: '30%'}}>
            <Text style={{fontWeight: 'bold'}}>Ảnh:</Text>
          </View>

          <View style={{width: '70%'}}>
            <Image
              style={{height: 60, width: 60}}
              source={{
                uri: route.params.item.img,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={[{marginVertical: 10, paddingHorizontal: 20}]}>
          <Text style={{fontWeight: 'bold'}}>Chọn đơn thuốc: </Text>
        </View>
      </View>
      <TimePickerPage />
      <View>
        {arrayNote.map((l, i) => (
          <ListItem key={i} bottomDivider Component={TouchableScale}>
            <ListItem.Content onPress={() => {}}>
              <ListItem.Title>{l.title}</ListItem.Title>
              <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
}

export default AddMedicineSearch;
const styles = StyleSheet.create({
  Itemfooter: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
});
