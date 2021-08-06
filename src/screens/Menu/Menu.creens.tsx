import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  ScrollView,
  Switch,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import BaseIcon from '../../components/IconBase/IconBase';
import ImagePicker from '../../components/ImagePicker/ImagePicker';
import {Action} from '../../redux/actions/index.action';
import {RootState} from '../../redux/reducers/index.reducer';
import ListItemMenu from './ListItemMenu';
function Menu({route, navigation}: any) {
  const Auth: any = useSelector((state: RootState) => state.Auth);
  const navigate = useNavigation();
  const dispatch = useDispatch();
  console.log(Auth);
  
  return (
    <ScrollView style={styles.scroll}>
      <TouchableOpacity onPress={() => navigate.navigate('profile')}>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="large"
              source={{
                uri:
                  Auth.userinfo.avatar.length > 0
                    ? Auth.userinfo.avatar
                    : 'https://thinkingschool.vn/wp-content/uploads/avatars/753/753-bpfull.jpg',
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 16}}>
              {Auth.userinfo.name.length > 0
                ? Auth.userinfo.name
                : 'Cập nhật thông tin'}
            </Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}>
              {Auth.userinfo.numberphone}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <ListItemMenu />

      <View style={[stylesGlobal.input, {paddingHorizontal: 20}]}>
        <Button
          mode="contained"
          // disabled={!isFormValid(isValid, touched)}
          color="#adbac7"
          onPress={() => {
            dispatch(Action.act_logout());
          }}>
          Đăng xuất
        </Button>
      </View>

      
    </ScrollView>
  );
}

export default Menu;
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
});
