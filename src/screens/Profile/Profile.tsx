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
import InfoPersonal from './ProfilePersonal/InfoPersonal';
function Profile({navigation}: any) {
  return (
    <View style={[stylesGlobal.container]}>
      {/* <ProfilePersonal /> */}
      <InfoPersonal />
    </View>
  );
}

export default Profile;
