import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from '../StackScreen/HomeStackScreen';
import FamilyStackScreen from '../StackScreen/FamilyStackScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/index.reducer';
import MenuStackScreen from '../StackScreen/MenuStackScreen';

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
            case 'Prescription':
              iconName = focused ? 'content-paste' : 'content-paste';
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
      <Tab.Screen name="Prescription" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={HomeStackScreen} />
      <Tab.Screen name="Family" component={FamilyStackScreen} />
      {/* <Tab.Screen name="User" component={HomeStackScreen} /> */}
      <Tab.Screen name="Menu" component={MenuStackScreen} />
    </Tab.Navigator>
  );
};

export default TabHomeNavigation;
