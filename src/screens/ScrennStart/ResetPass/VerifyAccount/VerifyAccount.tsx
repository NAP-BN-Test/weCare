import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import stylesGlobal from '../../../../assets/Css/cssGlobal.css';
const VerifyAccount = ({route,navigation}: any) => {
  const navigate = useNavigation();
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  // console.log(navigation);
  const { numberphone } = route.params;
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <View style={{flexDirection: 'column'}}>
          <View style={stylesGlobal.row_center}>
            <Text style={{fontWeight: 'bold'}}>
              Nhập mã chúng tôi đã gửi đến số{' '}
            </Text>
          </View>
          <View style={stylesGlobal.row_center}>
            <Text style={{fontWeight: 'bold'}}>{numberphone}</Text>
          </View>
          <View
            style={{
              marginVertical: 20,
            }}>
            <View style={stylesGlobal.row_center}>
              <Text>Chúng tôi đã gửi mã gồm 6 chữ số đến số</Text>
            </View>
            <View style={stylesGlobal.row_center}>
              <Text>di động của bạn. Hãy nhập mã đó để đặt lại mật</Text>
            </View>
            <View style={stylesGlobal.row_center}>
              <Text>khẩu.</Text>
            </View>
          </View>
        </View>

        <View style={stylesGlobal.input}>
          <TextInput
            label="Nhập mã"
            // mode="outlined"

            right={<TextInput style={{marginRight: 20}} />}
          />
        </View>

        <View style={stylesGlobal.input}>
          <Button
            // icon="camera"
            mode="contained"
            onPress={() => console.log('Tìm')}>
            Tiếp tục
          </Button>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            // icon="send"
            onPress={() => console.log('Gửi mã')}>
            Gửi lại SMS
          </Button>
        </View>
      </View>
    </View>
  );
};

export default VerifyAccount;
