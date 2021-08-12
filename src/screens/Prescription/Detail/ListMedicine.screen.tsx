import React from 'react';
import {
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import {RootState} from '../../../redux/reducers/index.reducer';
import {Card, Chip, Title} from 'react-native-paper';
import {ActionScreen} from '../../../redux/actions/actions.screen/action.screen';
import {ScrollView} from 'react-native-gesture-handler';
import {SwipeListView} from 'react-native-swipe-list-view';
import stylesPrescription from '../Prescription.css';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddEditTime from '../../../components/ManageTime/AddTime';
function ListMedicine({navigation}: any) {
  const listMedicine: Array<any> = useSelector(
    (state: RootState) => state.listMedicine,
  );

  const dispatch = useDispatch();

  console.log('listMedicine', listMedicine);
  const deleteItems = (items: any) => {
    dispatch(ActionScreen.act_Delete_Item_listMedicine(items));
  };

  return (
    <View style={stylesGlobal.container}>
      <View
        style={[
          stylesGlobal.container,
          {paddingHorizontal: 10, paddingVertical: 10},
        ]}>
        {listMedicine.length >= 1 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <SwipeListView
              previewRowKey={'0'}
              // useFlatList
              // refreshControl={
              //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              // }
              data={listMedicine}
              renderItem={(data, rowMap) => (
                <View style={stylesPrescription.rowFront} key={data.item.id}>
                  {/* <TouchableOpacity
                 onPress={() => {
                   // navigate.navigate('addMedicine');
                 }}> */}
                  <Card
                    style={stylesPrescription.card_content}
                    onPress={() => {
                      console.log('Thông tin thuốc');

                      // navigate.navigate('addMedicine');
                    }}>
                    <Card.Content>
                      <View style={stylesGlobal.space_between}>
                        <View
                          style={{
                            width: '20%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{height: 50, width: 50}}
                            source={{
                              uri: data.item.img,
                            }}
                          />
                        </View>
                        <View style={{width: '80%'}}>
                          <Title>{data.item.name}</Title>

                          <Text>
                            <Text style={{fontWeight: 'bold'}}>
                              Thời gian uống:{' '}
                            </Text>
                            {data.item.time?.map((val: any) => (
                              <Text>
                                {val.hours}:{val.minutes}
                                {' | '}
                              </Text>
                            ))}
                          </Text>

                          <Text>
                            <Text style={{fontWeight: 'bold'}}>Tần suất: </Text>
                            {data.item.frequency?.map((val: any) =>
                              val.stt ? <Text>{val.name2}, </Text> : null,
                            )}
                          </Text>
                        </View>
                      </View>
                    </Card.Content>
                  </Card>
                  {/* </TouchableOpacity> */}
                </View>
              )}
              renderHiddenItem={(data, rowMap) => (
                <View style={stylesPrescription.rowBack} key={data.item.id}>
                  <TouchableOpacity
                    style={[
                      stylesPrescription.backLeftBtnLeft,
                      stylesPrescription.backLeftBtn,
                      stylesPrescription.card_content,
                    ]}
                    // onPress={() => deleteRow(rowMap, data.item.id)}
                  >
                    <AddEditTime
                      // label="Thêm vào đơn"
                      onchangeValue={(val: any) => {
                        let items = {
                          time: val.arrTime,
                          frequency: val.arrRank,
                          id: data.item.id,
                        };
                        console.log('items', items);

                        dispatch(ActionScreen.act_EDIT_Medicine(items));
                      }}
                      value={{
                        time: data.item.time,
                        frequency: data.item.frequency,
                      }}
                      iconButton="build"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      stylesPrescription.backRightBtn,
                      stylesPrescription.backRightBtnRight,
                      stylesPrescription.card_content,
                    ]}
                    onPress={() => deleteItems(data.item)}>
                    <MaterialIcons name="delete" size={28} color="red" />
                  </TouchableOpacity>
                </View>
              )}
              leftOpenValue={75}
              rightOpenValue={-75}
            />
            <View style={{width: '100%', height: 60}}></View>
          </ScrollView>
        ) : (
          <View>
            <Chip
              style={{backgroundColor: '#fff'}}
              mode="outlined"
              // onClose={() => console.log('đóng')}
            >
              Chưa có thuốc nào!
            </Chip>
          </View>
        )}
      </View>
    </View>
  );
}

export default ListMedicine;
