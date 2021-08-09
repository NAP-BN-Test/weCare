import React, {useState} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import {Card, Searchbar, Chip, Avatar} from 'react-native-paper';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/index.reducer';
import Profile from '../Profile/Profile';
import Toast from 'react-native-simple-toast';
import SearchDropDown from '../../components/SearchDropDown/SearchDropDown';
import {useNavigation} from '@react-navigation/native';
import {ListItem, Icon} from 'react-native-elements';
import {Button} from 'react-native-elements/dist/buttons/Button';

function Family({navigation}: any) {
  const [dataSource] = useState([
    {
      id: '1',
      name: 'Dũng',
      numberphone: '0333968599',
      address: 'Phù Khê - Từ Sơn',
      avatar: 'https://www.petcity.vn/media/news/920_cat5_500x462.jpg',
    },

    {
      id: '2',
      name: 'Thảo',
      numberphone: '0123456999',
      address: 'Tam Sơn - Từ Sơn',
      avatar:
        'https://cdn.dribbble.com/users/2199928/screenshots/11532918/shot-cropped-1590177932366.png?compress=1&resize=400x300',
    },

    {
      id: '3',
      name: 'Hưng',
      numberphone: '0355082888',
      address: 'Hương Mạc - Từ Sơn',
      avatar:
        'https://i.pinimg.com/236x/de/c0/74/dec074af64e3c11227d92913f19b51c3.jpg',
    },

    {
      id: '4',
      name: 'Tùng',
      numberphone: '0355082877',
      address: 'Phù Chẩn - Từ Sơn',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIeYl6yCxRZijR5324jESroDuyH0vIqlKHw&usqp=CAU',
    },

    {
      id: '5',
      name: 'Cao',
      numberphone: '0355055555',
      address: 'Yên Phong - Bắc Ninh',
      avatar:
        'https://icdn.dantri.com.vn/thumb_w/640/2020/07/20/che-do-lam-dep-1595200073627.jpeg',
    },
  ]);
  const navigate = useNavigation();
  const Auth: any = useSelector((state: RootState) => state.Auth);
  const [searchQuery, setSearchQuery] = useState('');
  const [filtered, setFiltered] = useState(dataSource as any);
  const [searching, setSearching] = useState(false);
  const [selectedItems, setselectedItems] = useState([] as any);
  const dispatch = useDispatch();

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

    let index = selectedItems.findIndex((values: any) => values.id === item.id);

    if (index >= 0) {
      Toast.showWithGravity(
        'Thành viên này đã trong danh sách ',
        3000,
        Toast.TOP,
      );
    } else {
      Toast.showWithGravity(
        'Đã thêm ' + item.name + ' vào danh sách',
        500,
        Toast.TOP,
      );
      setselectedItems((oldArray: any) => [...oldArray, item]);
    }
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
            {/* <View style={{flexDirection: 'column'}}>
              <View style={[stylesGlobal.row_center, {marginVertical: 10}]}>
                <Text style={{fontWeight: 'bold'}}>
                  Thêm thành viên{' '}
                </Text>
              </View>
            </View> */}

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '100%'}}>
                <Searchbar
                  placeholder="Nhập số điện thoại..."
                  onChangeText={onSearch}
                  value={searchQuery}
                  keyboardType="numeric"
                />
              </View>
            </View>

            {searching && (
              <SearchDropDown
                onPressSearchDropDown={onPressSearchDropDown}
                dataSource={filtered}
                textImage="avatar"
              />
            )}

            <View style={{flexDirection: 'column'}}>
              <View style={[stylesGlobal.row_center, {marginVertical: 10}]}>
                <Text style={{fontWeight: 'bold'}}>Danh sách thành viên</Text>
              </View>
            </View>

            {selectedItems.length > 0 ? (
              selectedItems.map((items: any, index: any) => (
                <ListItem.Swipeable
                  bottomDivider
                  leftContent={
                    <Button
                      title="Info"
                      icon={{name: 'info', color: 'white'}}
                      buttonStyle={{
                        minHeight: '100%',
                        backgroundColor: 'orange',
                      }}
                      onPress={() =>
                        navigate.navigate('profilefamily', {items})
                      }
                    />
                  }
                  rightContent={
                    <Button
                      title="Delete"
                      icon={{name: 'delete', color: 'white'}}
                      buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                      onPress={() => deleteItems(items)}
                    />
                  }>
                  <Avatar.Image
                    size={32}
                    source={{
                      uri: items.avatar,
                    }}
                  />
                  <ListItem.Content>
                    <ListItem.Title>
                      {' '}
                      {items.name + ' - ' + items.numberphone}
                    </ListItem.Title>
                  </ListItem.Content>
                  {/* <ListItem.Chevron /> */}
                </ListItem.Swipeable>
              ))
            ) : (
              <View>
                <Chip
                  style={{backgroundColor: '#fff'}}
                  mode="outlined"
                  // onClose={() => console.log('đóng')}
                >
                  Chưa có thành viên nào!
                </Chip>
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Family;
