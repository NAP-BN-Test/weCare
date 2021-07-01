import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../StackScreen/HomeStackScreen';

const Tab = createBottomTabNavigator();

const TabHomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused, color}: any) => {
          let iconName = 'ios-help';
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;

            default:
              break;
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#AAAAAA',
        style: {
          backgroundColor: '#0074BC',
        },
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
    </Tab.Navigator>
  );
};

export default TabHomeNavigation;
