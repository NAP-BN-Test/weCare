import React from 'react';
import {Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';

function AddMedicine({navigation}: any) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: any) => setSearchQuery(query);
  return (
    <View style={stylesGlobal.container}>
      <View
        style={[
          stylesGlobal.container,
          {paddingHorizontal: 10, paddingVertical: 10},
        ]}>
        <Searchbar
          placeholder="Nhập tên thuốc..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{marginBottom: 10}}
        />
      </View>
    </View>
  );
}

export default AddMedicine;
