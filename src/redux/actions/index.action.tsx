import {useNavigation} from '@react-navigation/native';
import * as constants from '../constants';
import auth from '@react-native-firebase/auth';
import PushNotification from 'react-native-push-notification';
function act_alert_success(messages: string) {
  return {
    type: constants.ALERT_SUCCESS,
    message: messages,
  };
}
function act_alert_error(messages: string) {
  return {
    type: constants.ALERT_ERROR,
    message: messages,
  };
}

function get_user_info(user: any) {
  return {type: constants.GET_USER_INFO, value: user};
}

function logout(user: any) {
  return {type: constants.LOGOUT, value: user};
}
// Action
function act_login(numberphone: any, password: any) {
  let tk = {
    numberphone: '0123456789',
    password: '123456',
  };
  let body = {
    numberphone: numberphone,
    password: password,
  };
  console.log('body đăng nhập', body);

  return (dispatch: any) => {
    if (body.numberphone === tk.numberphone && body.password === tk.password) {
      console.log('Đăng nhập thành công');
      PushNotification.createChannel(
        {
          channelId: 'task-channel', // (required)
          channelName: 'Task Channel', // (required)
          soundName: 'my_sound.mp3', // (optional) See `soundName` parameter of `localNotification` function
        
        },
        (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
      );
      let user: any = {
        userinfo: {
          name: '',
          date: '',
          address: '',
          numberphone: '0123456789',
          gender: 'Nam',
          avatar: '',
        },
        accesstoken: '12345678',
        permisson: 'admin',
      };
      dispatch(get_user_info(user));
    } else {
      console.log('Đăng nhập không thành công');
      dispatch(act_alert_error('Tài khoản hoặc mật khẩu không chính xác'));
    }
    // Services.login(body).then(async (res) => {
    //   if (res.status === 200) {
    //     dispatch(act_alert_success('Đăng nhập thành công'));
    //     let user: User = {
    //       userinfo: res.data.userinfo,
    //       accesstoken: res.data.accesstoken,
    //       permisson: res.data.permisson,
    //     };
    //     dispatch(get_user_info(user));
    //     Actions.main();
    //   } else {
    //     dispatch(act_alert_error('Đăng nhập không thành công'));
    //   }
    // });
  };
}

function act_logout() {
  auth().signOut();
  return (dispatch: any) => {
    let user: any = {
      userinfo: '',
      accesstoken: '',
      permisson: '',
    };
    dispatch(logout(user));
  };
}

export const Action = {
  act_alert_error,
  act_alert_success,
  act_login,
  get_user_info,
  act_logout,
};
