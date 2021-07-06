import React from 'react';
import {Text, View} from 'react-native';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';

function AddMedicine() {
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <Text>Add</Text>
      </View>
    </View>
  );
}

export default AddMedicine;
