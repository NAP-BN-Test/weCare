import React, {useState} from 'react';
import {RefreshControl, Text, TouchableOpacity, View} from 'react-native';
import {Button, Card, Searchbar, Title} from 'react-native-paper';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers/index.reducer';
import * as Yup from 'yup';
import {Formik} from 'formik';
import FormField from '../../components/FormField/FormFieldComponent';
import DateSingle from '../../components/Date/DatetimeSinger';
import {Action} from '../../redux/actions/index.action';
import Form from './FormProfile/form';
import ProfilePersonal from './ProfilePersonal/ProfilePersonal';
function Profile({navigation}: any) {
  const Auth: any = useSelector((state: RootState) => state.Auth);
  return (
    <View style={[stylesGlobal.container]}>
      {Auth.userinfo.name.length > 0 ? (
        <ProfilePersonal />
      ) : (
        <View style={stylesGlobal.footer}>
          <Form />
        </View>
      )}
    </View>
  );
}

export default Profile;
