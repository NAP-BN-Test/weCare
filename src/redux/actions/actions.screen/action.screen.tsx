import * as constants from '../../constants';
import {Action} from '../index.action';
function act_ADDMedicine(value: any) {
  return {
    type: constants.ADDMEDICINE,
    value: value,
  };
}

function act_EDITMedicine(value: any) {
  return {
    type: constants.EDITMEDICINE,
    value: value,
  };
}

function act_New_List_Medicine(value: any) {
  return {
    type: constants.NEWLISTMEDICINE,
    value: value,
  };
}

function act_Delete_Item_Medicine(value: any) {
  return {
    type: constants.DELET_ITEM_MEDICINE,
    value: value,
  };
}

function act_ADDNEWLIST_Medicine(list: any) {
  return (dispatch: any) => {
    dispatch(act_New_List_Medicine(list));
  };
}

function act_ADD_Medicine(value: any) {
  return (dispatch: any) => {
    dispatch(act_ADDMedicine(value));
    dispatch(Action.act_alert_success('Thêm thành công vào danh sách'));
  };
}

function act_EDIT_Medicine(value: any) {
  return (dispatch: any) => {
    dispatch(act_EDITMedicine(value));
    dispatch(Action.act_alert_success('Sửa thành công'));
  };
}

function act_Delete_Item_listMedicine(items: any) {
  return (dispatch: any) => {
    dispatch(act_Delete_Item_Medicine(items));
    dispatch(Action.act_alert_success('Xóa thành công'));
  };
}

export const ActionScreen = {
  act_EDIT_Medicine,
  act_ADD_Medicine,
  act_Delete_Item_listMedicine,
  act_ADDNEWLIST_Medicine,
};
