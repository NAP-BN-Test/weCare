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
const BtnPlus = ({onPress, actions, color, backgroundColor, icon}: any) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: any) => setSearchQuery(query);
  const [open, setopen] = useState(false);

  const onStateChange = ({open}: any) => setopen(open);
  return (
    <Provider>
      <Portal>
        <FAB.Group
          color={color}
          // theme={open ? {colors: {accent: 'transparent'}} : undefined}
          fabStyle={backgroundColor}
          open={false}
          visible={true}
          icon={icon}
          actions={actions}
          onStateChange={onStateChange}
          onPress={onPress}
        />
      </Portal>
    </Provider>
  );
};
export default BtnPlus;