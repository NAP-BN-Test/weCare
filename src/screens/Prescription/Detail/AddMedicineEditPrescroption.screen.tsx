import React from 'react';
import {View} from 'react-native';
import AddMedicine from './AddMedicine';

function AddMedicineEditPrescroption() {
  function toggleValueAdd(val: any) {
    console.log('val edit', val);
  }
  return (
    <View>
      <AddMedicine toggleValueAdd={toggleValueAdd} />
    </View>
  );
}

export default AddMedicineEditPrescroption;
