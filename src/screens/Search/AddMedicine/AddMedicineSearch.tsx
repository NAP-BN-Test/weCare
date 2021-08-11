import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ListItem} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import TimePickerPage from '../../../components/TimePicker/TimePicker';
import {Overlay} from 'react-native-elements/dist/overlay/Overlay';
import {Button} from 'react-native-paper';
import BaseIcon from '../../../components/IconBase/IconBase';
import moment from 'moment';
import Chevron from '../../Profile/ProfilePersonal/Chevron';
function AddMedicineSearch({route, navigation}: any) {
  // console.log('route', route);
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
  const [arrTime, setarrTime] = useState([] as any);
  const [arrRank, setarrRank] = useState([
    {name: 'Thứ 2', stt: false, name2: 'Th2'},
    {name: 'Thứ 3', stt: false, name2: 'Th3'},
    {name: 'Thứ 4', stt: false, name2: 'Th4'},
    {name: 'Thứ 5', stt: false, name2: 'Th5'},
    {name: 'Thứ 6', stt: false, name2: 'Th6'},
    {name: 'Thứ 7', stt: false, name2: 'Th7'},
    {name: 'Chủ nhật', stt: false, name2: 'CN'},
  ]);
  console.log('arrTime', arrTime);

  function EditValueTime(value: any) {
    console.log('value edit', value);
    const newData = arrTime;
    console.log('newData trên', newData);
    const prevIndex = arrTime.findIndex((item: any) => item.key === value.key);
    console.log('Vị trí', prevIndex);
    newData[prevIndex].hours = value.hours;
    newData[prevIndex].key = value.key;
    newData[prevIndex].minutes = value.minutes;
    console.log('newData dưới', newData);

    setarrTime(newData);
  }

  function setFieldValueTime(value: any) {
    console.log('value', value);
    setarrTime((oldArray: any) => [
      ...oldArray,
      {
        ...value,
        key: moment(new Date()).format('YYMMDDHHmmss').toString(),
      },
    ]);
  }
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const toggleOverlay = (id: any) => {
    setVisible(!visible);
    console.log(id);
  };

  function deleteTime(key: any) {
    const newData = [...arrTime];
    const prevIndex = arrTime.findIndex((item: any) => item.key === key);
    newData.splice(prevIndex, 1);
    setarrTime(newData);
  }
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

      <View>
        {arrayNote.map((l, i) => (
          <ListItem
            key={i}
            bottomDivider
            Component={TouchableScale}
            onPress={() => toggleOverlay(l.id)}>
            <ListItem.Content>
              <ListItem.Title>{l.title}</ListItem.Title>
              <ListItem.Subtitle>{l.date}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>

      <Overlay
        // ModalComponent={Modal}
        animationType="slide"
        fullScreen
        isVisible={visible}
        // onBackdropPress={toggleOverlay}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <TimePickerPage
            label="Thêm giờ uống"
            setFieldValue={setFieldValueTime}
          />
          {arrTime?.map((item: any, i: any) => (
            <ListItem
              key={i}
              bottomDivider
              Component={TouchableScale}
              // onPress={() => toggleOverlay(l.id)}
            >
              <ListItem.Content>
                <ListItem.Title>
                  {item.hours} giờ {item.minutes} phút
                </ListItem.Title>
              </ListItem.Content>
              {/* <TouchableOpacity>
                <TimePickerPage
                  label="Sửa"
                  keyItem={item.key}
                  setFieldValue={EditValueTime}
                  value={{hours: item.hours, minutes: item.minutes}}
                  // onPress={() => setkeyTime(item.key)}
                />
              </TouchableOpacity> */}

              <TouchableOpacity onPress={() => deleteTime(item.key)}>
                {/* <Button>Xóa</Button> */}
                <BaseIcon
                  containerStyle={{backgroundColor: '#FAD291'}}
                  icon={{
                    type: 'font-awesome',
                    name: 'close',
                  }}
                />
              </TouchableOpacity>
            </ListItem>
          ))}

          <ListItem
            key={5}
            bottomDivider
            Component={TouchableScale}
            onPress={() => setVisible2(!visible2)}>
            <ListItem.Content>
              <ListItem.Title>Tần suất</ListItem.Title>
            </ListItem.Content>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {arrRank.map((item: any) =>
                item.stt === true ? <Text>{item.name2} </Text> : null,
              )}
              <View style={{marginLeft: 15}}>
                <Chevron />
              </View>
            </View>
          </ListItem>

          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View style={{width: '50%', padding: 10}}>
              <Button
                mode="contained"
                // disabled={!isFormValid(isValid, touched)}
                onPress={() => setVisible(!visible)}>
                Lưu
              </Button>
            </View>

            <View style={{width: '50%', padding: 10}}>
              <Button
                mode="contained"
                // disabled={!isFormValid(isValid, touched)}
                onPress={() => setVisible(!visible)}>
                Đóng
              </Button>
            </View>
          </View>
        </ScrollView>
      </Overlay>

      <Overlay
        // ModalComponent={Modal}
        animationType="slide"
        isVisible={visible2}
        // onBackdropPress={toggleOverlay}
      >
        {arrRank?.map((item) => (
          <ListItem key={1} bottomDivider>
            {/* <BaseIcon
              containerStyle={{backgroundColor: '#FAD291'}}
              icon={{
                type: 'material',
                name: 'notifications',
              }}
            /> */}
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            {/* <ListItem.Chevron /> */}
            <Switch
              onValueChange={() => {
                const newData = [...arrRank];
                const prevIndex = arrRank.findIndex(
                  (items: any) => items.name2 === item.name2,
                );
                newData[prevIndex].stt = !item.stt;
                setarrRank(newData);
              }}
              value={item.stt}
            />
          </ListItem>
        ))}

        <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '30%', padding: 10}}>
            <Button
              mode="contained"
              // disabled={!isFormValid(isValid, touched)}
              onPress={() => setarrRank([
                {name: 'Thứ 2', stt: true, name2: 'Th2'},
                {name: 'Thứ 3', stt: true, name2: 'Th3'},
                {name: 'Thứ 4', stt: true, name2: 'Th4'},
                {name: 'Thứ 5', stt: true, name2: 'Th5'},
                {name: 'Thứ 6', stt: true, name2: 'Th6'},
                {name: 'Thứ 7', stt: true, name2: 'Th7'},
                {name: 'Chủ nhật', stt: true, name2: 'CN'},
              ])}>
              All
            </Button>
          </View>
          <View style={{width: '30%', padding: 10}}>
            <Button
              mode="contained"
              // disabled={!isFormValid(isValid, touched)}
              onPress={() => setVisible2(!visible2)}>
              OK
            </Button>
          </View>

          <View style={{width: '30%', padding: 10}}>
            <Button
              mode="contained"
              // disabled={!isFormValid(isValid, touched)}
              onPress={() => setVisible2(!visible2)}>
              Hủy
            </Button>
          </View>
        </View>
      </Overlay>
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
