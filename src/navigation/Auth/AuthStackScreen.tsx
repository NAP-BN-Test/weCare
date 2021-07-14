import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/ScrennStart/Login/login';
import Registration from '../../screens/ScrennStart/Registration/Registration';
import {StyleSheet, Text, View} from 'react-native';
import ResetPass from '../../screens/ScrennStart/ResetPass/Resetpassword';
import VerifyAccount from '../../screens/ScrennStart/ResetPass/VerifyAccount/VerifyAccount';
import LoginFireBase from '../../screens/ScrennStart/FireBase';
import VerifyAccountFireBase from '../../screens/ScrennStart/FireBase/confirm';
const AuthStack = createStackNavigator();

const AuthStackScreen = ({navigation}: any) => {
  return (
    <AuthStack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      {/* <AuthStack.Screen
        options={{headerShown: false}}
        name="splashSrceen"
        component={SplashSrceen}
      /> */}
      <AuthStack.Screen
        options={{
          // title: 'Đăng nhập',
          headerShown: false,
        }}
        name="login"
        component={Login}
      />
      <AuthStack.Screen
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

      <AuthStack.Screen
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

      <AuthStack.Screen
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

      <AuthStack.Screen
        options={{
          title: 'Đăng nhập bằng số điện thoại',
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
        name="FireBaseOTP"
        component={LoginFireBase}
      />

      <AuthStack.Screen
        options={{
          title: 'Xác nhận số điện thoaị',
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
        name="ConfirmOTP"
        component={VerifyAccountFireBase}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
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
