import {GET_USER_INFO, LOGOUT} from '../constants/index';

const initState: any = {
  userinfo: '',
  accesstoken: '',
  permisson: '',
};

const rdc_Auth = (state = initState, action: any) => {
  switch (action.type) {
    case GET_USER_INFO:
      return action.value;
    case LOGOUT:
      return action.value;
    default:
      return state;
  }
};

export default rdc_Auth;
