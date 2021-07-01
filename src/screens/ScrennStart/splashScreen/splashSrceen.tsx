import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

const SplashSrceen = ({navigation}: any) => {
  const navigate = useNavigation();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      
      <Text style={{fontWeight: 'bold', fontSize: 22}}>WellCome</Text>
      <Text
        style={{fontWeight: 'bold', fontSize: 22}}
        onPress={() => navigate.navigate('login')}>
        Đăng nhập
      </Text>
      <Text
        style={{fontWeight: 'bold', fontSize: 22}}
        onPress={() => navigate.navigate('registration')}>
        Đăng ký
      </Text>
    </View>
  );
};

export default SplashSrceen;
