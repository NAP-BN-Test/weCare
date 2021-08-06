import React, {useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View, ScrollView} from 'react-native';
import {Button, Searchbar, TextInput, Chip} from 'react-native-paper';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import ImagePicker from '../../../components/ImagePicker/ImagePicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import SearchDropDown from '../../../components/SearchDropDown/SearchDropDown';
import Toast from 'react-native-simple-toast';
import {Avatar} from 'react-native-paper';
import {ActionScreen} from '../../../redux/actions/actions.screen/action.screen';
import {useDispatch} from 'react-redux';
// import {RNCamera} from 'react-native-camera';
function AddMedicine({navigation}: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const [selectedItems, setselectedItems] = useState([] as any);
  console.log('selectedItems', selectedItems);

  const [dataSource] = useState([
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

  const [filtered, setFiltered] = useState(dataSource as any);
  const [searching, setSearching] = useState(false);
  // const onChangeSearch = (query: any) => setSearchQuery(query);
  const [camRef, setCamRef] = useState(null as any);
  const sheetRef = useRef(null as any);
  const [localFile, setLocalFile] = useState(null as any);
  const onFileSelected = (image: any) => {
    closeSheet();
    setLocalFile(image);
    console.log(image);
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
      setSearching(false);
    }
  };

  const onSearch = (text: string) => {
    setSearchQuery(text);
    if (text) {
      setSearching(true);
      // const temp = text.toLowerCase();
      // const temp = text;

      // const tempList = dataSource.filter((item) => {
      //   if (item.match(temp)) return item;
      // });
      setFiltered(dataSource);
    } else {
      setSearching(false);
      setFiltered([]);
    }
  };

  const onPressSearchDropDown = (item: any) => {
    console.log('item', item);

    // let arrayOld = selectedItems;
    // arrayOld.push(item);
    // console.log('arrayOld', arrayOld);

    // setselectedItems(arrayOld);
    // setselectedItems([item]);
    let index = selectedItems.findIndex((values: any) => values.id === item.id);

    if (index >= 0) {
      Toast.showWithGravity('Thuốc đã tồn tại trong đơn', 3000, Toast.TOP);
    } else {
      Toast.showWithGravity(
        'Đã thêm thuốc ' + item.name + ' vào danh sách',
        500,
        Toast.TOP,
      );
      setselectedItems((oldArray: any) => [...oldArray, item]);
    }
  };

  const onSelectedItemsChange = (value: any) => {
    // setselectedItems(value);
  };

  const deleteItems = (items: any) => {
    setselectedItems(selectedItems.filter((item: any) => item.id !== items.id));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={stylesGlobal.container}>
        <View
          style={[
            stylesGlobal.container,
            {paddingHorizontal: 10, paddingVertical: 10},
          ]}>
          <View>
            <View style={{flexDirection: 'column'}}>
              <View style={[stylesGlobal.row_center, {marginVertical: 10}]}>
                <Text style={{fontWeight: 'bold'}}>
                  Nhập tên thuốc hoặc chụp ảnh thuốc{' '}
                </Text>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '90%'}}>
                <Searchbar
                  placeholder="Nhập tên thuốc..."
                  onChangeText={onSearch}
                  value={searchQuery}
                />
              </View>
              <View
                style={{
                  width: '10%',
                  flex: 1,
                  justifyContent: 'center',
                  height: 50,
                  marginLeft: 4,
                }}>
                <TouchableOpacity onPress={openSheet}>
                  <Ionicons name={'camera'} size={32} color="#6000ec" />
                </TouchableOpacity>
              </View>
            </View>

            {searching && (
              <SearchDropDown
                onPressSearchDropDown={onPressSearchDropDown}
                dataSource={filtered}
                
              />
            )}

            <View style={{flexDirection: 'column'}}>
              <View style={[stylesGlobal.row_center, {marginVertical: 10}]}>
                <Text style={{fontWeight: 'bold'}}>
                  Danh sách thuốc đã chọn
                </Text>
              </View>
            </View>

            {selectedItems.length > 0 ? (
              selectedItems.map((items: any, index: any) => (
                <View key={items.id} style={{marginBottom: 5}}>
                  <Chip
                    avatar={
                      <Image
                        style={{height: 50, width: 50}}
                        source={{
                          uri: items.img,
                        }}
                      />
                    }
                    style={{backgroundColor: '#fff', height: 50}}
                    mode="outlined"
                    onClose={() => deleteItems(items)}>
                    {items.name}
                  </Chip>
                </View>
              ))
            ) : (
              <View>
                <Chip
                  style={{backgroundColor: '#fff'}}
                  mode="outlined"
                  // onClose={() => console.log('đóng')}
                >
                  Chưa chọn thuốc nào!
                </Chip>
              </View>
            )}

            <Button
              mode="contained"
              style={{marginTop: 10}}
              // disabled={!isFormValid(isValid, touched)}
              onPress={() => {
                navigation.goBack();
                dispatch(ActionScreen.act_ADD_Medicine(selectedItems));
              }}>
              Thêm
            </Button>
          </View>

          <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
        </View>
      </View>
    </ScrollView>
  );
}

export default AddMedicine;
