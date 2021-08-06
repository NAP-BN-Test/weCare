import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Error404 from '../../screens/Error404/Error404';
import Profile from '../../screens/Profile/Profile';
import Family from '../../screens/Family/Family';

const FamilyStack = createStackNavigator();

const FamilyStackScreen = () => {
  return (
    <FamilyStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FamilyStack.Screen name="family" component={Family} />
    </FamilyStack.Navigator>
  );
};

export default FamilyStackScreen;
