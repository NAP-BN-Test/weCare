import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Error404 from '../../screens/Error404/Error404';
import Login from '../../screens/ScrennStart/Login/login';
import SplashSrceen from '../../screens/ScrennStart/splashScreen/splashSrceen';
import Registration from '../../screens/ScrennStart/Registration/Registration';
import {StyleSheet, Text, View} from 'react-native';
import ResetPass from '../../screens/ScrennStart/ResetPass/Resetpassword';
import VerifyAccount from '../../screens/ScrennStart/ResetPass/VerifyAccount/VerifyAccount';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/index.reducer';
import TabHomeNavigation from '../TabNavigation/TabHomeNavigation';
import Hearder from '../../components/Hearders/Hearder';
import AuthStackScreen from '../Auth/AuthStackScreen';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}: any) => {
  const Auth: any = useSelector((state: RootState) => state.Auth);
  console.log('Auth', Auth);

  return Auth.accesstoken != '' ? (
    <View style={styles.container}>
      <Hearder />
      <TabHomeNavigation />
    </View>
  ) : (
    <AuthStackScreen />
  );
};

export default RootStackScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 180,
  },
  headerLeft: {
    paddingLeft: 20,
  },
});
