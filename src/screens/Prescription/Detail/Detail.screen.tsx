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
  return (
    <View style={[stylesGlobal.container]}>
      <View
        style={[
          stylesGlobal.container,
          {paddingHorizontal: 10, paddingVertical: 10},
        ]}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{marginBottom: 10}}
        />

        <ScrollView>
          <SwipeListView
            previewRowKey={'0'}
            // useFlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={arrayNote}
            renderItem={(data, rowMap) => (
              <View style={stylesPrescription.rowFront} key={data.item.id}>
                <TouchableOpacity
                  onPress={() => {
                    // navigate.navigate('addMedicine');
                  }}>
                  <Card style={stylesPrescription.card_content}>
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
                            <Text style={{fontWeight: 'bold'}}>Thành phần</Text>
                            : {data.item.Ingredient}{' '}
                          </Text>
                          <Text>
                            <Text style={{fontWeight: 'bold'}}>Công dụng</Text>:{' '}
                            {data.item.func}{' '}
                          </Text>
                          <Text>
                            <Text style={{fontWeight: 'bold'}}>Cách dùng</Text>:{' '}
                            {data.item.usage}{' '}
                          </Text>
                        </View>
                      </View>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
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
                  onPress={() => deleteRow(rowMap, data.item.id)}>
                  <MaterialIcons name="delete" size={28} color="red" />
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
            navigate.navigate('addMedicine');
          }}
        />
      </View>
    </View>
  );
}

export default Detail;
