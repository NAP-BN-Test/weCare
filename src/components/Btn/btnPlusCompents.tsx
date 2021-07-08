import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {
  Card,
  Title,
  Searchbar,
  FAB,
  Portal,
  Provider,
} from 'react-native-paper';
const BtnPluss = ({onPress, actions, color, backgroundColor, icon}: any) => {
  const [open, setopen] = useState(false);

  const onStateChange = ({open}: any) => setopen(open);
  return (
    <Provider>
      <Portal>
        <FAB.Group
          color={color}
          // theme={open ? {colors: {accent: 'transparent'}} : undefined}
          fabStyle={backgroundColor}
          open={open}
          visible={true}
          icon={open ? 'minus' : 'plus'}
          actions={actions}
          onStateChange={onStateChange}
          onPress={onPress}
        />
      </Portal>
    </Provider>
  );
};
export default BtnPluss;
