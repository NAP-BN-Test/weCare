import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import {Surface} from 'react-native-paper';
function Hearder() {
  return (
    <Surface style={styles.surface}>
      <View style={stylesGlobal.space_between}>
        <Text style={{color: '#0074BC', fontWeight: 'bold', fontSize: 32}}>
          WeCare
        </Text>
      </View>
    </Surface>
  );
}

export default Hearder;
const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    elevation: 5,
  },
});