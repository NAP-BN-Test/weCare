import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Overlay} from 'react-native-elements/dist/overlay/Overlay';
import {ListItem} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import TimePickerPage from '../TimePicker/TimePicker';
import BaseIcon from '../IconBase/IconBase';
import Chevron from '../../screens/Profile/ProfilePersonal/Chevron';
import {Button, Colors, IconButton} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
function AddEditTime({label, onchangeValue, value, iconButton}: any) {
  const [arrTime, setarrTime] = useState([] as any);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [arrRank, setarrRank] = useState([
    {name: 'Thứ 2', stt: false, name2: 'Th2'},
    {name: 'Thứ 3', stt: false, name2: 'Th3'},
    {name: 'Thứ 4', stt: false, name2: 'Th4'},
    {name: 'Thứ 5', stt: false, name2: 'Th5'},
    {name: 'Thứ 6', stt: false, name2: 'Th6'},
    {name: 'Thứ 7', stt: false, name2: 'Th7'},
    {name: 'Chủ nhật', stt: false, name2: 'CN'},
  ]);

  useEffect(() => {
    if (value?.time != undefined) {
      setarrTime(value.time);
    }

    if (value?.frequency != undefined) {
      setarrRank(value.frequency);
    }
  }, [value]);

  function deleteTime(i: any) {
    const newData = [...arrTime];
    newData.splice(i, 1);
    setarrTime(newData);
  }

  function setFieldValueTime(value: any) {
    console.log('value', value);
    setarrTime((oldArray: any) => [...oldArray, value]);
  }
  return (
    <View>
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

              <TouchableOpacity onPress={() => deleteTime(i)}>
                {/* <Button>Xóa</Button> */}
                <BaseIcon
                  onPress={() => deleteTime(i)}
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
                onPress={() => {
                  onchangeValue({arrRank, arrTime});
                  setVisible(!visible);
                }}>
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
        {arrRank?.map((item, i) => (
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
                // const prevIndex = arrRank.findIndex(
                //   (items: any) => items.name2 === item.name2,
                // );
                newData[i].stt = !item.stt;
                setarrRank(newData);
              }}
              value={item.stt}
            />
          </ListItem>
        ))}

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '45%', padding: 10}}>
            <Button
              mode="contained"
              // disabled={!isFormValid(isValid, touched)}
              onPress={async () => {
                let count = 0;
                await arrRank.map((items) => {
                  if (items.stt === false) {
                    return count++;
                  }
                });

                if (count > 0) {
                  setarrRank([
                    {name: 'Thứ 2', stt: true, name2: 'Th2'},
                    {name: 'Thứ 3', stt: true, name2: 'Th3'},
                    {name: 'Thứ 4', stt: true, name2: 'Th4'},
                    {name: 'Thứ 5', stt: true, name2: 'Th5'},
                    {name: 'Thứ 6', stt: true, name2: 'Th6'},
                    {name: 'Thứ 7', stt: true, name2: 'Th7'},
                    {name: 'Chủ nhật', stt: true, name2: 'CN'},
                  ]);
                } else {
                  setarrRank([
                    {name: 'Thứ 2', stt: false, name2: 'Th2'},
                    {name: 'Thứ 3', stt: false, name2: 'Th3'},
                    {name: 'Thứ 4', stt: false, name2: 'Th4'},
                    {name: 'Thứ 5', stt: false, name2: 'Th5'},
                    {name: 'Thứ 6', stt: false, name2: 'Th6'},
                    {name: 'Thứ 7', stt: false, name2: 'Th7'},
                    {name: 'Chủ nhật', stt: false, name2: 'CN'},
                  ]);
                }

                setVisible2(!visible2);
              }}>
              All
            </Button>
          </View>

          <View style={{width: '45%', padding: 10}}>
            <Button
              mode="contained"
              // disabled={!isFormValid(isValid, touched)}
              onPress={() => setVisible2(!visible2)}>
              Đóng
            </Button>
          </View>
        </View>
      </Overlay>
      {iconButton?.length > 0 ? (
        <MaterialIcons
          name={iconButton}
          size={28}
          color="red"
          onPress={() => setVisible(!visible)}
        />
      ) : (
        <Button onPress={() => setVisible(!visible)}>{label}</Button>
      )}
    </View>
  );
}

export default AddEditTime;
