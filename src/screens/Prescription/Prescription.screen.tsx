import React, {useState} from 'react';
import {View, RefreshControl, TouchableOpacity} from 'react-native';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import {ScrollView} from 'react-native-gesture-handler';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Card, Searchbar, Title} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BtnPlus from '../../components/Btn/BtnPlusCompent';
import stylesPrescription from './Prescription.css';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
function Prescription({navigation}: any) {
  const navigate = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: any) => setSearchQuery(query);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const [arrayNote, setarrayNote] = useState([
    {
      id: '1',
      date: '01/02/2021',
      title: 'Đơn số 1',
    },

    {
      id: '2',
      date: '01/02/2021',
      title: 'Đơn số 2',
    },

    {
      id: '3',
      date: '01/02/2021',
      title: 'Đơn số 3',
    },

    {
      id: '4',
      date: '01/02/2021',
      title: 'Đơn số 4',
    },

    {
      id: '5',
      date: '01/02/2021',
      title: 'Đơn số 5',
    },

    {
      id: '6',
      date: '01/02/2021',
      title: 'Đơn số 6',
    },

    {
      id: '7',
      date: '01/02/2021',
      title: 'Đơn số 7',
    },

    {
      id: '8',
      date: '01/02/2021',
      title: 'Đơn số 8',
    },
  ]);
  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const deleteRow = (rowMap: any, rowKey: any) => {
    closeRow(rowMap, rowKey);
    const newData = [...arrayNote];
    const prevIndex = arrayNote.findIndex((item) => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setarrayNote(newData);
  };
  return (
    <View style={[stylesGlobal.container]}>
      <View
        style={[
          stylesGlobal.container,
          {paddingHorizontal: 10, paddingVertical: 10},
        ]}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{marginBottom: 10}}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SwipeListView
            previewRowKey={'0'}
            // useFlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={arrayNote}
            renderItem={(data, rowMap) => (
              <View style={stylesPrescription.rowFront} key={data.item.id}>
                {/* <TouchableOpacity
                  onPress={() => {
                    navigate.navigate('detailPrescription');
                  }}> */}
                <Card
                  style={stylesPrescription.card_content}
                  onPress={() => {
                    navigate.navigate('detailPrescription');
                  }}>
                  <Card.Content>
                    <View style={stylesGlobal.space_between}>
                      <Title>{data.item.title}</Title>
                      <Title>{data.item.date}</Title>
                    </View>
                  </Card.Content>
                </Card>
                {/* </TouchableOpacity> */}
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={stylesPrescription.rowBack} key={data.item.id}>
                <TouchableOpacity
                  style={[
                    stylesPrescription.backLeftBtnLeft,
                    stylesPrescription.backLeftBtn,
                    stylesPrescription.card_content,
                  ]}
                  onPress={() => deleteRow(rowMap, data.item.id)}>
                  <MaterialIcons name="delete" size={28} color="red" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    stylesPrescription.backRightBtn,
                    stylesPrescription.backRightBtnRight,
                    stylesPrescription.card_content,
                  ]}
                  onPress={() => deleteRow(rowMap, data.item.id)}>
                  <MaterialIcons name="delete" size={28} color="red" />
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
          <View style={{width: '100%', height: 60}}></View>
        </ScrollView>
        <BtnPlus
          icon="plus"
          actions={[]}
          onPress={() => {
            navigate.navigate('addPrescription');
          }}
        />
      </View>
    </View>
  );
}

export default Prescription;
