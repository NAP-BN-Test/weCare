import {combineReducers} from 'redux';
import rdc_alert from './alert.reducer';
import rdc_Auth from './authUser.reducer';
import rdc_listMedicine from './ReducersScreen/listMedicine.reducer';
// import rdc_register_server from './registerserver.reducer';
// import rdc_login from './login.reducer';
// import rdc_alert from './alert.reducer';
// import rdc_hientruong from './hientruong.reducer';
// import rdc_container from './container.reducer';
// import rdc_parking from './parking.reducer';
// import rdc_hientruong_checked from './hientruongchecked';

export const rootReducer = combineReducers({
  //Action
  alerts: rdc_alert,
  Auth: rdc_Auth,

  //Screen
  listMedicine: rdc_listMedicine,
});

export type RootState = ReturnType<typeof rootReducer>;
