import React from 'react';
import {Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import {RootState} from '../../../redux/reducers/index.reducer';
import {Chip} from 'react-native-paper';
import {ActionScreen} from '../../../redux/actions/actions.screen/action.screen';
function ListMedicine({navigation}: any) {
  const listMedicine: any = useSelector(
    (state: RootState) => state.listMedicine,
  );

  const dispatch = useDispatch();

  console.log('listMedicine', listMedicine);
  const deleteItems = (items: any) => {
    dispatch(ActionScreen.act_Delete_Item_listMedicine(items));
  };
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        {listMedicine.length >= 1 ? (
          listMedicine.map((items: any, index: any) => (
            <View key={index} style={{marginBottom: 5}}>
              <Chip
                avatar={
                  <Image
                    style={{height: 50, width: 50}}
                    source={{
                      uri: items.img,
                    }}
                  />
                }
                style={{backgroundColor: '#fff', height: 50}}
                mode="outlined"
                onClose={() => deleteItems(items)}>
                {items.name}
              </Chip>
            </View>
          ))
        ) : (
          <View>
            <Chip
              style={{backgroundColor: '#fff'}}
              mode="outlined"
              // onClose={() => console.log('đóng')}
            >
              Chưa có thuốc nào!
            </Chip>
          </View>
        )}
      </View>
    </View>
  );
}

export default ListMedicine;
