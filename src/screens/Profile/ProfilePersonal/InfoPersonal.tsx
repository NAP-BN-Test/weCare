import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
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
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Chip} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import ImagePicker from '../../../components/ImagePicker/ImagePicker';
import {Action} from '../../../redux/actions/index.action';
import {RootState} from '../../../redux/reducers/index.reducer';
import Form from '../FormProfile/form';

function InfoPersonal({navigation}: any) {
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
                        localFile?.path.length > 0
                          ? localFile.path
                          : Auth.userinfo?.avatar?.length > 0
                          ? Auth.userinfo.avatar
                          : 'https://thinkingschool.vn/wp-content/uploads/avatars/753/753-bpfull.jpg',
                    }}
                  />
                </TouchableOpacity>

                {Auth.userinfo.name.length > 0 ? (
                  <>
                    <Text style={styles.userNameText}>
                      {Auth.userinfo.name}
                    </Text>
                    {/* <View style={styles.userAddressRow}>
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
                    </View> */}
                  </>
                ) : null}
              </View>
            </ImageBackground>
          </View>
        </Card>

        <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
      </View>

      <View style={{paddingHorizontal: 20}}>
        <View style={styles.Itemfooter}>
          <View style={{width: '30%'}}>
            <Text style={{fontWeight: 'bold'}}>Tên WeCare:</Text>
          </View>

          <View style={{width: '70%'}}>
            <Text style={{color: 'gray'}}>{Auth.userinfo.name}</Text>
          </View>
        </View>

        <View style={styles.Itemfooter}>
          <View style={{width: '30%'}}>
            <Text style={{fontWeight: 'bold'}}>Giới tính:</Text>
          </View>

          <View style={{width: '70%'}}>
            <Text style={{color: 'gray'}}>{Auth.userinfo.gender}</Text>
          </View>
        </View>

        <View style={styles.Itemfooter}>
          <View style={{width: '30%'}}>
            <Text style={{fontWeight: 'bold'}}>Ngày sinh:</Text>
          </View>

          <View style={{width: '70%'}}>
            <Text style={{color: 'gray'}}>
              {moment(Auth.userinfo.date).format('DD-MM-YYYY')}
            </Text>
          </View>
        </View>

        <View style={styles.Itemfooter}>
          <View style={{width: '30%'}}>
            <Text style={{fontWeight: 'bold'}}>Địa chỉ:</Text>
          </View>

          <View style={{width: '70%'}}>
            <Text style={{color: 'gray'}}>{Auth.userinfo.address}</Text>
          </View>
        </View>

        <View style={styles.Itemfooter}>
          <View style={{width: '30%'}}>
            <Text style={{fontWeight: 'bold'}}>Số điện thoại:</Text>
          </View>

          <View style={{width: '70%'}}>
            <Text style={{color: 'gray'}}>{Auth.userinfo.numberphone}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
          <Button
            mode="contained"
            onPress={() => navigate.navigate('UpdateProfile')}>
            Đổi thông tin
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

export default InfoPersonal;
const styles = StyleSheet.create({
  Itemfooter: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
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
