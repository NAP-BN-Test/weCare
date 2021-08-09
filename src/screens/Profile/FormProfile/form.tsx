import React, {useState} from 'react';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {Action} from '../../../redux/actions/index.action';
import FormField from '../../../components/FormField/FormFieldComponent';
import DateSingle from '../../../components/Date/DatetimeSinger';
import {Button} from 'react-native-paper';
import {RootState} from '../../../redux/reducers/index.reducer';
import {RadioButton} from 'react-native-paper';
function Form({navigate, handleSubmit}: any) {
  const dispatch = useDispatch();
  const Validation = Yup.object().shape({
    name: Yup.string().min(6, 'Tên quá ngắn').required('Nhập tên của bạn'),
    address: Yup.string().required('Nhập địa chỉ của bạn'),
  });

  const Auth: any = useSelector((state: RootState) => state.Auth);
  console.log(Auth);
  const [value, setValue] = useState('first');
  return (
    <View style={[stylesGlobal.container]}>
      <View style={stylesGlobal.footer}>
        <View style={{flexDirection: 'column'}}>
          {Auth.userinfo.name.length < 0 ? (
            <View style={stylesGlobal.row_center}>
              <Text style={{fontWeight: 'bold', marginBottom: 20}}>
                Vui lòng cập nhật thông tin cá nhân
              </Text>
            </View>
          ) : null}

          <Formik
            initialValues={{
              name: Auth.userinfo.name,
              date: Auth.userinfo.date ? Auth.userinfo.date : new Date(),
              address: Auth.userinfo.address,
              gender: Auth.userinfo.gender,
              numberphone: '0123456789',
              avatar: '',
            }}
            onSubmit={(values) => {
              console.log(values);
              handleSubmit(values);
              // let user = {
              //   userinfo: values,
              //   accesstoken: '12345678',
              //   permisson: 'admin',
              // };
              // dispatch(Action.get_user_info(user));
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
                    title="Ngày sinh"
                    values={values}
                    errors={errors}
                  />
                </View>

                <RadioButton.Group
                  onValueChange={handleChange('gender')}
                  value={values.gender}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="Nam" />
                      <Text>Nam</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <RadioButton value="Nữ" />
                      <Text>Nữ</Text>
                    </View>
                  </View>
                </RadioButton.Group>

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
      </View>
    </View>
  );
}

export default Form;
