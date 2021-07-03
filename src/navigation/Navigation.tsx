import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation/DrawerNavigation';
import TabHomeNavigation from './TabNavigation/TabHomeNavigation';

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabHomeNavigation />
      {/* <DrawerNavigation /> */}
    </NavigationContainer>
  );
};

export default Navigation;
