import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation/DrawerNavigation';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import RootStackScreen from './src/navigation/RootStack/RootStackScreen';
import TabHomeNavigation from './src/navigation/TabNavigation/TabHomeNavigation';
import Hearder from './src/components/Hearders/Hearder';

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <NavigationContainer>
          <View style={styles.container}>
            {/* <DrawerNavigation /> */}
            <Hearder />
            <TabHomeNavigation />
            {/* <RootStackScreen /> */}
          </View>
        </NavigationContainer>
      </React.Fragment>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 180,
  },
  headerLeft: {
    paddingLeft: 20,
  },
});
