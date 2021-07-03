import React from 'react';
import {Text, View} from 'react-native';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import Hearder from '../../components/Hearders/Hearder';

function Home() {
  return (
    <View
      style={[
        stylesGlobal.container,
        // {paddingBottom: 300}
      ]}>
      <Hearder/>
      <View style={[stylesGlobal.container, {paddingHorizontal: 10}]}></View>
    </View>
  );
}

export default Home;
