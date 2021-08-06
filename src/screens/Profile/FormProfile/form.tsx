import React from 'react';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import * as Yup from 'yup';
import {Formik} from 'formik';
import { useDispatch } from 'react-redux';
import { Action } from '../../../redux/actions/index.action';
import FormField from '../../../components/FormField/FormFieldComponent';
import DateSingle from '../../../components/Date/DatetimeSinger';
import { Button } from 'react-native-paper';
function Form({navigate}: any) {
  const dispatch = useDispatch();
  const Validation = Yup.object().shape({
    name: Yup.string().min(6, 'Tên quá ngắn').required('Nhập tên của bạn'),
    address: Yup.string().required('Nhập địa chỉ của bạn'),
  });
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={stylesGlobal.row_center}>
        <Text style={{fontWeight: 'bold', marginBottom: 20}}>
          Vui lòng cập nhật thông tin cá nhân
        </Text>
      </View>

      <Formik
        initialValues={{
          name: '',
          date: new Date(),
          address: '',
          numberphone: '0123456789',
          avatar: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          let user = {
            userinfo: values,
            accesstoken: '12345678',
            permisson: 'admin',
          };
          dispatch(Action.get_user_info(user));
        }}
        validationSchema={Validation}
        validateOnMount={true}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          setFieldValue,
        }) => (
          <View>
            <View style={stylesGlobal.input}>
              <FormField
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                label="name"
                title="Tên của bạn"
                touched={touched}
                errors={errors}
              />
            </View>

            <View style={stylesGlobal.input}>
              <FormField
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                label="address"
                title="Địa chỉ"
                touched={touched}
                errors={errors}
              />
            </View>

            <View style={stylesGlobal.input}>
              <DateSingle
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
                label="date"
                title="Ngày kê đơn"
                values={values}
                errors={errors}
              />
            </View>

            <View style={stylesGlobal.input}>
              <Button
                // icon="camera"
                mode="contained"
                // disabled={!isFormValid(isValid, touched)}
                onPress={handleSubmit}>
                Cập nhật
              </Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Form;
