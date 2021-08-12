import {
  DELET_ITEM_MEDICINE,
  ADDMEDICINE,
  NEWLISTMEDICINE,
  EDITMEDICINE,
} from '../../constants';

const initState: Array<any> = [];

function rdc_listMedicine(state = initState, action: any) {
  switch (action.type) {
    case ADDMEDICINE:
      let arrNew = state;
      arrNew.push(action.value);
      return arrNew;

    case EDITMEDICINE:
      const newData = [...state];
      console.log('newData', newData);
      console.log('action.value', action.value);

      const prevIndex = state.findIndex(
        (items: any) => items.id === action.value.id,
      );
      console.log('prevIndex', prevIndex);

      newData[prevIndex].time = action.value.time;
      newData[prevIndex].frequency = action.value.frequency;
      // setarrRank(newData);
      return newData;

    case DELET_ITEM_MEDICINE:
      return (state = state.filter((item: any) => item.id !== action.value.id));

    case NEWLISTMEDICINE:
      return action.value;
    default:
      return state;
  }
}

export default rdc_listMedicine;
