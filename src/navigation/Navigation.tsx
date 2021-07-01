import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./DrawerNavigation/DrawerNavigation";

const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
