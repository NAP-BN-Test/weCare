import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import CustomSidebarMenu from "../../components/CustomSidebarMenu/CustomSidebarMenu";
// import TabHomeNavigation from "../TabNavigation/TabHomeNavigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomSidebarMenu from '../../components/CustomSidebarMenu/CustomSidebarMenu';
import TabHomeNavigation from '../TabNavigation/TabHomeNavigation';
import FamilyStackScreen from '../StackScreen/FamilyStackScreen';
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import Error404 from "../../screens/Error404/Error404";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const arrItems = [
    {
      key: '1',
      name: 'home',
      nameTab: 'Home',
      nameStack: 'home',
      icon: <Ionicons size={25} name="ios-cube" color="#0074BC" />,
    },

    // {
    //   key: '2',
    //   name: 'family',
    //   nameTab: 'Family',
    //   nameStack: 'family',
    //   icon: <Ionicons size={25} name="family-restroom" color="#0074BC" />,
    // },
  ];

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#0074BC',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={(props: any) => (
        <CustomSidebarMenu arrItems={arrItems} {...props} />
      )}>
      <Drawer.Screen
        name="home"
        component={TabHomeNavigation}
        options={{
          drawerIcon: () => (
            <Ionicons size={25} name="ios-cube" color="#0074BC" />
          ),
        }}
      />
      <Drawer.Screen
        name="family"
        component={FamilyStackScreen}
        options={{
          drawerIcon: () => (
            <Ionicons size={25} name="family-restroom" color="#0074BC" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
