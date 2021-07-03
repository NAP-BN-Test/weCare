import React from 'react';
import {Text, View} from 'react-native';
import stylesGlobal from '../../assets/Css/cssGlobal.css';

function Hearder() {
  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        elevation: 0.2,
        // borderRadius: 10,
        // marginTop: 20,
      }}>
      <View
        style={[
          // stylesGlobal.action,
          {
            paddingVertical: 10,
            paddingHorizontal: 10,
          },
        ]}>
        <View style={stylesGlobal.space_between}>
          <Text style={{color: '#0074BC', fontWeight: 'bold', fontSize: 32}}>
            WeCare
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Hearder;
