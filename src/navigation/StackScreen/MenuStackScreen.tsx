import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Error404 from '../../screens/Error404/Error404';
import Home from '../../screens/Home/Home.screens';
import Menu from '../../screens/Menu/Menu.creens';

const MenuStack = createStackNavigator();

const MenuStackScreen = () => {
  return (
    <MenuStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MenuStack.Screen name="menu" component={Menu} />
    </MenuStack.Navigator>
  );
};

export default MenuStackScreen;
