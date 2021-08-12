import React, {useState} from 'react';
import {RefreshControl, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Card, Searchbar, Title} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import stylesPrescription from '../Prescription.css';
import BtnPlus from '../../../components/Btn/BtnPlusCompent';
import AddEditTime from '../../../components/ManageTime/AddTime';
const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
function Detail({navigation}: any) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const onChangeSearch = (query: any) => setSearchQuery(query);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [arrayNote, setarrayNote] = useState([
    {
      id: '1',
      name: 'Panadol',
      Ingredient: '500 mg Paracetamol, 65 mg Caffeine.',
      usage:
        'Người lớn (kể cả người cao tuổi) và trẻ em từ 12 tuổi trở lên: uống 1 hoặc 2 viên mỗi 4 đến 6 giờ nếu cần.',
      func: ' Đau đầu, đau nửa đầu, đau lưng, đau răng...',
      img:
        'https://i-cf65ch.gskstatic.com/content/dam/cf-consumer-healthcare/panadol/vi_vn/vietnamproduct/panadol_regular_pack_shot_blue/product_detail/Desktop-455x455.png?auto=format',
      time: [
        {hours: 4, minutes: 23},
        {hours: 4, minutes: 45},
      ],
      frequency: [
        {name: 'Thứ 2', stt: true, name2: 'Th2'},
        {name: 'Thứ 3', stt: true, name2: 'Th3'},
        {name: 'Thứ 4', stt: true, name2: 'Th4'},
        {name: 'Thứ 5', stt: true, name2: 'Th5'},
        {name: 'Thứ 6', stt: true, name2: 'Th6'},
        {name: 'Thứ 7', stt: true, name2: 'Th7'},
        {name: 'Chủ nhật', stt: true, name2: 'CN'},
      ],
    },

    {
      id: '2',
      name: 'Albendazole',
      Ingredient:
        'Tá dược: Lactose monohydrat, tinh bột ngô, microcrystallin cellulose, natri lauryl sulfat, povidon K30, croscarmellose natri, aspartam, magnesi stearat, bột mùi trái cây, hypromellose, macrogol 6000, talc, titan dioxyd.',
      usage:
        'Uống thuốc này chung với thức ăn, thường là 1-2 lần mỗi ngày hoặc theo chỉ dẫn của bác sĩ. ',
      func: 'Albendazole có tác dụng điều trị nhiễm sán dây',
      img:
        'https://truongcaodangduocsaigon.net/wp-content/uploads/2020/08/duoc-si-truong-duoc-sai-gon-chia-se-ve-thuoc-albendazole.jpg',
      time: [{hours: 5, minutes: 23}],
      frequency: [
        {name: 'Thứ 2', stt: true, name2: 'Th2'},
        {name: 'Thứ 3', stt: false, name2: 'Th3'},
        {name: 'Thứ 4', stt: false, name2: 'Th4'},
        {name: 'Thứ 5', stt: true, name2: 'Th5'},
        {name: 'Thứ 6', stt: false, name2: 'Th6'},
        {name: 'Thứ 7', stt: false, name2: 'Th7'},
        {name: 'Chủ nhật', stt: true, name2: 'CN'},
      ],
    },

    {
      id: '3',
      name: 'Dexamethasone',
      Ingredient:
        'Codudexon 0,5; Cor-F; Daewon Dexamethasone Inj; Dectancyl; Dehatacil; Dexa; Dexacare; Dexalife; Dexa-NIC; Dexapos; Dexone; Dexone-S; Dexpension…',
      usage:
        'Liều dùng cần thay đổi tùy theo từng người bệnh, mức độ viêm, diện viêm rộng hay hẹp, vị trí viêm và đáp ứng của người bệnh.',
      func:
        'Chống viêm, chống dị ứng và ức chế miễn dịch. Tác dụng đến cân bằng điện giải thì rất ít. ',
      img:
        'https://5.imimg.com/data5/VL/DS/BM/GLADMIN-259611/decmax-dexamethasone-tablet.jpg',
      time: [
        {hours: 6, minutes: 23},
        {hours: 9, minutes: 45},
        {hours: 4, minutes: 45},
      ],
      frequency: [
        {name: 'Thứ 2', stt: false, name2: 'Th2'},
        {name: 'Thứ 3', stt: false, name2: 'Th3'},
        {name: 'Thứ 4', stt: true, name2: 'Th4'},
        {name: 'Thứ 5', stt: true, name2: 'Th5'},
        {name: 'Thứ 6', stt: false, name2: 'Th6'},
        {name: 'Thứ 7', stt: true, name2: 'Th7'},
        {name: 'Chủ nhật', stt: false, name2: 'CN'},
      ],
    },
  ]);
  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const deleteRow = (rowMap: any, rowKey: any) => {
    closeRow(rowMap, rowKey);
    const newData = [...arrayNote];
    const prevIndex = arrayNote.findIndex((item) => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setarrayNote(newData);
  };

  function onchangeValue(val: any) {}
  return (
    <View style={[stylesGlobal.container]}>
      <View
        style={[
          stylesGlobal.container,
          {paddingHorizontal: 10, paddingVertical: 10},
        ]}>
        {/* <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{marginBottom: 10}}
        /> */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <SwipeListView
            previewRowKey={'0'}
            // useFlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={arrayNote}
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
                          {data.item.time?.map((val) => (
                            <Text>
                              {val.hours}:{val.minutes}
                              {' | '}
                            </Text>
                          ))}
                        </Text>

                        <Text>
                          <Text style={{fontWeight: 'bold'}}>Tần suất: </Text>
                          {data.item.frequency?.map((val) =>
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
                    label="Thêm vào đơn"
                    onchangeValue={(value: any) => console.log(value)}
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
                  onPress={() => deleteRow(rowMap, data.item.id)}>
                  <MaterialIcons name="delete" size={28} color="red" />
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
          <View style={{width: '100%', height: 60}}></View>
        </ScrollView>
        <BtnPlus
          icon="plus"
          actions={[]}
          onPress={() => {
            navigate.navigate('addMedicineEditPrescroption');
          }}
        />
      </View>
    </View>
  );
}

export default Detail;
