import React, {useState} from 'react';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const Registration = ({navigation}: any) => {
  const navigate = useNavigation();
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [secureTextEntryCF, setsecureTextEntryCF] = useState(true);
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Avatar.Icon
            size={100}
            icon="android"
            style={{alignItems: 'center'}}
          />
        </View>
        <View style={stylesGlobal.input}>
          <TextInput
            label="Số điện thoại"
            // mode="outlined"

            right={<TextInput style={{marginRight: 20}} />}
          />
        </View>

        <View style={stylesGlobal.input}>
          <TextInput
            label="Mật khẩu"
            // mode="outlined"
            right={
              <TextInput.Icon
                style={{marginRight: 20}}
                name={() => (
                  <Ionicons
                    name={secureTextEntry === false ? 'eye' : 'eye-off'}
                    size={18}
                    color="#6000ec"
                  />
                )}
                onPress={() => {
                  setsecureTextEntry(secureTextEntry === true ? false : true);
                }}
              />
            }
            secureTextEntry={secureTextEntry}
          />
        </View>

        <View style={stylesGlobal.input}>
          <TextInput
            label="Nhập lại mật khẩu"
            // mode="outlined"
            right={
              <TextInput.Icon
                style={{marginRight: 20}}
                name={() => (
                  <Ionicons
                    name={secureTextEntry === false ? 'eye' : 'eye-off'}
                    size={18}
                    color="#6000ec"
                  />
                )}
                onPress={() => {
                  setsecureTextEntry(secureTextEntry === true ? false : true);
                }}
              />
            }
            secureTextEntry={secureTextEntry}
          />
        </View>
        <View style={stylesGlobal.input}>
          <Button
            // icon="camera"
            mode="contained"
            onPress={() => console.log('Đăng nhập')}>
            Đăng ký
          </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button onPress={() => navigate.navigate('login')}>Đăng nhập</Button>
        </View>
      </View>
    </View>
  );
};

export default Registration;
