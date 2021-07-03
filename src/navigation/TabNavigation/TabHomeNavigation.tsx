import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../StackScreen/HomeStackScreen';
import FamilyStackScreen from '../StackScreen/FamilyStackScreen';

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
            case 'Family':
              iconName = focused ? 'family-restroom' : 'family-restroom';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search';
              break;
            case 'User':
              iconName = focused ? 'person' : 'person';
              break;

            case 'Menu':
              iconName = focused ? 'menu' : 'menu';
              break;

            default:
              break;
          }
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#aaa',
        style: {
          height: 50,
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Family" component={FamilyStackScreen} />
      <Tab.Screen name="Search" component={HomeStackScreen} />
      <Tab.Screen name="User" component={HomeStackScreen} />
      <Tab.Screen name="Menu" component={HomeStackScreen} />
    </Tab.Navigator>
  );
};

export default TabHomeNavigation;
