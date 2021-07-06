import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Error404 from '../../screens/Error404/Error404';
import Home from '../../screens/Home/Home.screens';
import Menu from '../../screens/Menu/Menu.creens';
import Hearder from '../../components/Hearders/Hearder';
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      
      <HomeStack.Screen name="home" component={Home} />
      {/* <HomeStack.Screen name="menu" component={Menu} /> */}
      {/* <HomeStack.Screen name="search" component={Error404} />
      <HomeStack.Screen name="user" component={Error404} /> */}
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
