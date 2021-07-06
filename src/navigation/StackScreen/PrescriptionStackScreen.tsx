import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Error404 from '../../screens/Error404/Error404';
import Home from '../../screens/Home/Home.screens';
import Menu from '../../screens/Menu/Menu.creens';
import Prescription from '../../screens/Prescription/Prescription.screen';
import Detail from '../../screens/Prescription/Detail/Detail.screen';

const PrescriptionStack = createStackNavigator();

const PrescriptionStackScreen = () => {
  return (
    <PrescriptionStack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <PrescriptionStack.Screen
        options={{
          // title: 'Đăng nhập',
          headerShown: false,
        }}
        name="prescription"
        component={Prescription}
      />
      
    </PrescriptionStack.Navigator>
  );
};

export default PrescriptionStackScreen;
