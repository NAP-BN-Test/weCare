import React, {useState} from 'react';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Action} from '../../../redux/actions/index.action';
import { useDispatch } from 'react-redux';
const ResetPass = ({navigation}: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [numberphone, setnumberphone] = useState('');
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text>Nhập số điện thoại của bạn</Text>
        </View>

        <View style={stylesGlobal.input}>
          <TextInput
            label="Số điện thoại"
            // mode="outlined"
            value={numberphone}
            onChangeText={(text) => setnumberphone(text)}
            right={<TextInput style={{marginRight: 20}} />}
          />
        </View>

        <View style={stylesGlobal.input}>
          <Button
            // icon="camera"
            mode="contained"
            onPress={() => {
              if (numberphone.length > 1) {
                navigate.navigate('VerifyAccount', {
                  numberphone: numberphone,
                });
              }else{
                dispatch(Action.act_alert_error('Chưa nhập số!'));
              }
            }}>
            Tìm tài khoản của bạn
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ResetPass;
