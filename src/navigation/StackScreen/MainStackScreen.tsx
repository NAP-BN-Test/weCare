import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Error404 from '../../screens/Error404/Error404';
import Home from '../../screens/Home/Home.screens';
import Menu from '../../screens/Menu/Menu.creens';
import TabHomeNavigation from '../TabNavigation/TabHomeNavigation';
import Detail from '../../screens/Prescription/Detail/Detail.screen';
import Hearder from '../../components/Hearders/Hearder';
import {Text} from 'react-native';
import AddPrescription from '../../screens/Prescription/AddPrescription.screen';
import ListMedicine from '../../screens/Prescription/Detail/ListMedicine.screen';
import Profile from '../../screens/Profile/Profile';
import ProfileFamily from '../../screens/Profile/ProfileFamily/ProfileFamily';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/index.reducer';
import Form from '../../screens/Profile/FormProfile/form';
import ProfilePersonal from '../../screens/Profile/ProfilePersonal/ProfilePersonal';
import DetailFamily from '../../screens/Prescription/DetailFamily/DetailFamily.screen';
import AddMedicineSearch from '../../screens/Search/AddMedicine/AddMedicineSearch';
import AddMedicineEditPrescroption from '../../screens/Prescription/Detail/AddMedicineEditPrescroption.screen';
import AddMedicineAddPrescroption from '../../screens/Prescription/Detail/AddMedicineAddPrescroption.screen';
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  const Auth: any = useSelector((state: RootState) => state.Auth);
  return (
    <MainStack.Navigator
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      {Auth.userinfo.name.length > 0 ? null : (
        <MainStack.Screen
          name="formProfile"
          options={{
            title: 'Thêm thông tin cá nhân',
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
          component={ProfilePersonal}
        />
      )}

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
        name="detailPrescriptionFamily"
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
        component={DetailFamily}
      />

      <MainStack.Screen
        name="addMedicineEditPrescroption"
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
        component={AddMedicineEditPrescroption}
      />

      <MainStack.Screen
        name="addMedicineAddPrescroption"
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
        component={AddMedicineAddPrescroption}
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

      <MainStack.Screen
        name="profile"
        options={{
          title: 'Thông tin cá nhân',
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
        component={Profile}
      />

      <MainStack.Screen
        name="profilefamily"
        options={{
          title: 'Thông tin thành viên',
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
        component={ProfileFamily}
      />

      <MainStack.Screen
        name="UpdateProfile"
        options={{
          title: 'Cập nhật thông tin cá nhân',
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
        component={ProfilePersonal}
      />

      <MainStack.Screen
        name="AddMedicineSearch"
        options={{
          title: 'Thêm thuốc vào đơn',
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
        component={AddMedicineSearch}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
