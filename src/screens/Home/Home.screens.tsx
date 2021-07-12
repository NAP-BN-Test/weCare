import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import {
  Card,
  Title,
  Searchbar,
  FAB,
  Portal,
  Provider,
} from 'react-native-paper';
import {SwipeListView} from 'react-native-swipe-list-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {number} from 'yup/lib/locale';
import BtnPlus from '../../components/Btn/BtnPlusCompent';
import BtnPluss from '../../components/Btn/btnPlusCompents';
const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const onChangeSearch = (query: any) => setSearchQuery(query);
  const [open, setopen] = useState(false);

  const onStateChange = ({open}: any) => setopen(open);

  const [arrayNote, setarrayNote] = useState([
    {
      id: '1',
      title: 'Uống thuốc panadol',
      time: '08:00',
      number: 'Đơn số 1',
    },

    {
      id: '2',
      title: 'Uống thuốc Albendazole',
      time: '18:30',
      number: 'Đơn số 2',
    },

    {
      id: '3',
      title: 'Uống thuốc Dexamethasone',
      time: '20:30',
      number: 'Đơn số 2',
    },

    {
      id: '4',
      title: 'Uống thuốc Dexamethasone',
      time: '20:30',
      number: 'Đơn số 3',
    },

    {
      id: '5',
      title: 'Uống thuốc Dexamethasone',
      time: '20:30',
      number: 'Đơn số 1',
    },

    {
      id: '6',
      title: 'Uống thuốc Dexamethasone',
      time: '20:30',
      number: 'Đơn số 1',
    },

    {
      id: '7',
      title: 'Uống thuốc Dexamethasone',
      time: '20:30',
      number: 'Đơn số 1',
    },

    {
      id: '8',
      title: 'Uống thuốc Dexamethasone',
      time: '20:30',
      number: 'Đơn số 2',
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
    <View
      style={[
        stylesGlobal.container,

        // {paddingBottom: 300}
      ]}>
      {/* <Hearder /> */}
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
              <View style={styles.rowFront} key={data.item.id}>
                {/* <TouchableOpacity> */}
                <Card style={styles.card_content}>
                  <Card.Content>
                    <View style={stylesGlobal.space_between}>
                      <Title>{data.item.title}</Title>
                      <Title>{data.item.time}</Title>
                    </View>
                    <Text>{data.item.number}</Text>
                  </Card.Content>
                </Card>
                {/* </TouchableOpacity> */}
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack} key={data.item.id}>
                <TouchableOpacity
                  style={[
                    styles.backLeftBtnLeft,
                    styles.backLeftBtn,
                    styles.card_content,
                  ]}
                  onPress={() => deleteRow(rowMap, data.item.id)}>
                  <MaterialIcons name="delete" size={28} color="red" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.backRightBtn,
                    styles.backRightBtnRight,
                    styles.card_content,
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

        <BtnPluss
          icon="plus"
          actions={[
            {
              icon: 'plus',
              label: 'Add',
              onPress: () => console.log('Pressed add'),
            },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
              small: false,
            },
          ]}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  card_content: {
    marginBottom: 10,
  },

  rowFront: {},
  rowBack: {flex: 1},

  //

  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    // tra
    // width: 75,
  },

  backRightBtnLeft: {
    backgroundColor: 'white',
    right: 75,
  },

  backRightBtnRight: {
    backgroundColor: 'white',
    right: 0,
    width: 75,
  },

  backLeftBtnLeft: {
    backgroundColor: 'white',
    left: 0,
    width: 75,
  },

  backLeftBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    // tra
    // width: 75,
  },
});
