import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ActionScreen} from '../../../redux/actions/actions.screen/action.screen';
import {RootState} from '../../../redux/reducers/index.reducer';
import AddMedicine from './AddMedicine';
import Toast from 'react-native-simple-toast';
function AddMedicineAddPrescroption() {
  const listMedicine: Array<any> = useSelector(
    (state: RootState) => state.listMedicine,
  );
  const dispatch = useDispatch();
  function toggleValueAdd(val: any) {
    console.log('val add', val);

    let index = listMedicine.findIndex((values: any) => values.id === val.id);

    if (index >= 0) {
      Toast.showWithGravity('Thuốc đã tồn tại trong đơn', 3000, Toast.TOP);
    } else {
      dispatch(ActionScreen.act_ADD_Medicine(val));
    }
  }
  return (
    <View>
      <AddMedicine toggleValueAdd={toggleValueAdd} />
    </View>
  );
}

export default AddMedicineAddPrescroption;
