import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Error404 from '../../screens/Error404/Error404';
import Home from '../../screens/Home/Home.screens';
import Menu from '../../screens/Menu/Menu.creens';
import TabHomeNavigation from '../TabNavigation/TabHomeNavigation';
import Detail from '../../screens/Prescription/Detail/Detail.screen';
import Hearder from '../../components/Hearders/Hearder';
import AddMedicine from '../../screens/Prescription/Detail/AddMedicine.screen';
import {Text} from 'react-native';
import AddPrescription from '../../screens/Prescription/AddPrescription.screen';
import ListMedicine from '../../screens/Prescription/Detail/ListMedicine.screen';
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <MainStack.Screen
        options={{headerTitle: (props) => <Hearder {...props} />}}
        name="main"
        component={TabHomeNavigation}
      />
      <MainStack.Screen
        name="detailPrescription"
        options={{
          title: 'Thông tin đơn thuốc',
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
        component={Detail}
      />

      <MainStack.Screen
        name="addMedicine"
        options={{
          title: 'Thêm thuốc',
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
        component={AddMedicine}
      />

      <MainStack.Screen
        name="addPrescription"
        options={{
          title: 'Thêm đơn',
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
        component={AddPrescription}
      />

      <MainStack.Screen
        name="listMedicine"
        options={{
          title: 'Danh sách thuốc',
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
        component={ListMedicine}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
