import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Error404 from '../../screens/Error404/Error404';

const FamilyStack = createStackNavigator();

const FamilyStackScreen = () => {
  return (
    <FamilyStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FamilyStack.Screen name="family" component={Error404} />
    </FamilyStack.Navigator>
  );
};

export default FamilyStackScreen;
