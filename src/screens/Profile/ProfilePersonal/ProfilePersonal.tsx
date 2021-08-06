import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Card, Icon, ListItem} from 'react-native-elements';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {ScrollView} from 'react-native-gesture-handler';
import {Chip} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from '../../../components/ImagePicker/ImagePicker';
import {Action} from '../../../redux/actions/index.action';
import {RootState} from '../../../redux/reducers/index.reducer';

function ProfilePersonal({navigation}: any) {
  const Auth: any = useSelector((state: RootState) => state.Auth);
  console.log(Auth);

  const dispatch = useDispatch();
  const sheetRef = useRef(null as any);
  const [localFile, setLocalFile] = useState(null as any);
  const onFileSelected = (image: any) => {
    closeSheet();
    setLocalFile(image);
    console.log(image);

    let user = {
      userinfo: {
        ...Auth.userinfo,
        avatar: image.path,
      },
      accesstoken: '12345678',
      permisson: 'admin',
    };

    console.log(user);

    dispatch(Action.get_user_info(user));
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const navigate = useNavigation();
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
    
  ]);
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <ImageBackground
              style={styles.headerBackgroundImage}
              blurRadius={10}
              source={{
                uri:
                  'https://img.freepik.com/free-photo/black-texture_1205-327.jpg?size=626&ext=jpg',
              }}>
              <View style={styles.headerColumn}>
                <TouchableOpacity onPress={openSheet}>
                  <Image
                    style={styles.userImage}
                    source={{
                      uri:
                        Auth.userinfo?.avatar?.length > 0
                          ? Auth.userinfo.avatar
                          : 'https://thinkingschool.vn/wp-content/uploads/avatars/753/753-bpfull.jpg',
                    }}
                  />
                </TouchableOpacity>

                <Text style={styles.userNameText}>{Auth.userinfo.name}</Text>
                <View style={styles.userAddressRow}>
                  <View>
                    <Icon
                      name="place"
                      underlayColor="transparent"
                      iconStyle={styles.placeIcon}
                      //   onPress={this.onPressPlace}
                    />
                  </View>
                  <View style={styles.userCityRow}>
                    <Text style={styles.userCityText}>
                      {Auth.userinfo.address}
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </Card>

        <View
          style={{
            paddingTop: 20,
            paddingBottom: 12,
            backgroundColor: '#F4F5F4',
          }}>
          <Text
            style={{
              fontSize: 16,
              marginLeft: 20,
              color: 'gray',
              fontWeight: '500',
            }}>
            Các đơn thuốc đang sử dụng
          </Text>
        </View>

        {arrayNote.length > 0 ? (
          arrayNote.map((items: any, index: any) => (
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
                    navigate.navigate('detailPrescription', {items})
                  }
                />
              }
              rightContent={
                <Button
                  title="Nhắc"
                  icon={{name: 'notifications', color: 'white'}}
                  buttonStyle={{
                    minHeight: '100%',
                    backgroundColor: 'orange',
                  }}
                />
              }>
              {/* <Avatar.Image
                  size={32}
                  source={{
                    uri: items.avatar,
                  }}
                /> */}
              <ListItem.Content>
                <ListItem.Title>
                  {' '}
                  {items.title + ' - ' + items.date}
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
              Chưa có đơn thuốc nào!
            </Chip>
          </View>
        )}
        <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
      </View>
    </ScrollView>
  );
}

export default ProfilePersonal;
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },

  placeIcon: {
    color: 'white',
    fontSize: 26,
  },

  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },

  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },

  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
