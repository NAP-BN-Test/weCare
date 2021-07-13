import {
  DELET_ITEM_MEDICINE,
  ADDMEDICINE,
  NEWLISTMEDICINE,
} from '../../constants';

const initState: Array<any> = [];

function rdc_listMedicine(state = initState, action: any) {
  switch (action.type) {
    case ADDMEDICINE:
      if (state[0]?.id > 0) {
        let arrNew = state;
        action.value.map((items: any) => {
          const index = state.findIndex(
            (values: any) => values.id === items.id,
          );
          if (index < 0) {
            arrNew.push(items);
          }
        });

        console.log('arrNew', arrNew);
        return arrNew;
        // return [...state, ...action.value];
        // return [...new Set([...state, ...action.value])];
      } else {
        return action.value;
      }

    case DELET_ITEM_MEDICINE:
      console.log(
        (state = state.filter((item: any) => item.id !== action.value.id)),
      );

      return (state = state.filter((item: any) => item.id !== action.value.id));

    case NEWLISTMEDICINE:
      return action.value;
    default:
      return state;
  }
}

export default rdc_listMedicine;
