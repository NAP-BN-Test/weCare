import React, {useState} from 'react';
import {
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Title} from 'react-native-paper';
import {SwipeListView} from 'react-native-swipe-list-view';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import stylesItem from './styleItems';
import { useNavigation } from '@react-navigation/native';
function ItemSearch({navigation}: any) {
  const navigate = useNavigation();
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
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 10}}>
      <SwipeListView
        previewRowKey={'0'}
        // useFlatList
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
        data={arrayNote}
        renderItem={(data, rowMap) => (
          <View style={stylesItem.rowFront} key={data.item.id}>
            {/* <TouchableOpacity
                onPress={() => {
                  // navigate.navigate('addMedicine');
                }}> */}
            <Card
              style={stylesItem.card_content}
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
                      <Text style={{fontWeight: 'bold'}}>Thành phần</Text>:{' '}
                      {data.item.Ingredient}{' '}
                    </Text>
                    <Text>
                      <Text style={{fontWeight: 'bold'}}>Công dụng</Text>:{' '}
                      {data.item.func}{' '}
                    </Text>
                    <Text>
                      <Text style={{fontWeight: 'bold'}}>Cách dùng</Text>:{' '}
                      {data.item.usage}{' '}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          // navigate.navigate('addMedicine');
                        }}>
                        <Button
                          mode="text"
                          onPress={() =>
                            navigate.navigate('AddMedicineSearch', {item: data.item})
                          }>
                          Thêm vào đơn
                        </Button>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Card.Content>
            </Card>
            {/* </TouchableOpacity> */}
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <View style={stylesItem.rowBack} key={data.item.id}>
            <TouchableOpacity
              style={[
                stylesItem.backLeftBtnLeft,
                stylesItem.backLeftBtn,
                stylesItem.card_content,
              ]}
              //   onPress={() => deleteRow(rowMap, data.item.id)}
            >
              <MaterialIcons name="info" size={28} color="orange" />
              <Text>Chi tiết</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                stylesItem.backRightBtn,
                stylesItem.backRightBtnRight,
                stylesItem.card_content,
              ]}
              //   onPress={() => deleteRow(rowMap, data.item.id)}
            >
              <MaterialIcons name="info" size={28} color="orange" />
              <Text>Chi tiết</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
      <View style={{width: '100%', height: 60}}></View>
    </ScrollView>
  );
}

export default ItemSearch;
