import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Error404 from '../../screens/Error404/Error404';
import Login from '../../screens/ScrennStart/Login/login';
import SplashSrceen from '../../screens/ScrennStart/splashScreen/splashSrceen';
import Registration from '../../screens/ScrennStart/Registration/Registration';
import {StyleSheet, Text} from 'react-native';
import ResetPass from '../../screens/ScrennStart/ResetPass/Resetpassword';
import VerifyAccount from '../../screens/ScrennStart/ResetPass/VerifyAccount/VerifyAccount';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}: any) => {
  return (
    <RootStack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      {/* <RootStack.Screen
        options={{headerShown: false}}
        name="splashSrceen"
        component={SplashSrceen}
      /> */}
      <RootStack.Screen
        options={{
          // title: 'Đăng nhập',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#6000ec',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
        }}
        name="login"
        component={Login}
      />
      <RootStack.Screen
        options={{
          title: 'Đăng ký',
          headerStyle: {
            backgroundColor: '#6000ec',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          // headerRight: ()=> <Text>abc</Text>
          // headerTransparent: true,
        }}
        name="registration"
        component={Registration}
      />

      <RootStack.Screen
        options={{
          title: 'Tìm tài khoản của bạn',
          headerStyle: {
            backgroundColor: '#6000ec',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          // headerRight: ()=> <Text>abc</Text>
          // headerTransparent: true,
        }}
        name="ResetPass"
        component={ResetPass}
      />

      <RootStack.Screen
        options={{
          title: 'Xác nhận tài khoản của bạn',
          headerStyle: {
            backgroundColor: '#6000ec',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          // headerRight: ()=> <Text>abc</Text>
          // headerTransparent: true,
        }}
        name="VerifyAccount"
        component={VerifyAccount}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
