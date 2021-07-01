import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View, Text, SafeAreaView} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const CustomSidebarMenu = ({arrItems, navigation, ...props}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <View style={styles.sideMenuProfileIcon}>
        {/* <Image
          source={require('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F849210073475324120%2F&psig=AOvVaw3SyD7wXUv1wKixj_mMstNi&ust=1625124261821000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKCZuejpvvECFQAAAAAdAAAAABAD')}
        /> */}
        <View style={{paddingTop: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>E - Service</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          paddingTop: 30,
          borderColor: 'gray',
        }}></View>
      <DrawerContentScrollView {...props}>
        {arrItems.map((route: any) => (
          <DrawerItem
            key={route.key}
            label={route.name}
            onPress={() =>
              navigation.navigate(route.nameTab, {
                screen: route.nameStack,
                params: {isReload: true},
              })
            }
            icon={() => route.icon}
          />
        ))}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    paddingLeft: 10,
    paddingTop: 30,
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
