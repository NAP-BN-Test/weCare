import React from 'react';
import {Text, View} from 'react-native';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';

function ListMedicine({navigation}: any) {
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <Text>Danh sách thuốc</Text>
      </View>
    </View>
  );
}

export default ListMedicine;
