import React, {useState} from 'react';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Button} from 'react-native-paper';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import ValidationForm from '../../../assets/Validation/validationRegistration';
import FormField from '../../../components/FormField/FormFieldComponent';
const Registration = ({navigation}: any) => {
  const navigate = useNavigation();
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [secureTextEntryCF, setsecureTextEntryCF] = useState(true);
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Avatar.Icon
            size={100}
            icon="android"
            style={{alignItems: 'center', marginBottom: 10}}
          />
        </View>
        <Formik
          initialValues={{
            numberphone: '',
            password: '',
            passwordConfirm: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={ValidationForm}
          validateOnMount={true}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View>
              <View style={stylesGlobal.input}>
                <FormField
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  label="numberphone"
                  title="Số điện thoại"
                  touched={touched}
                  errors={errors}
                  keyboardType="numeric"
                />
                {/* <TextInput
                    label="Số điện thoại"
                    // mode="outlined"
                    keyboardType="numeric"
                    right={
                      
                    }
                  /> */}
              </View>

              <View style={stylesGlobal.input}>
                <FormField
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  label="password"
                  title="Mật khẩu"
                  touched={touched}
                  errors={errors}
                  secureTextEntry={secureTextEntry}
                  right={
                    <TextInput.Icon
                      style={{marginRight: 20}}
                      name={() => (
                        <Ionicons
                          name={secureTextEntry === false ? 'eye' : 'eye-off'}
                          size={18}
                          color="#6000ec"
                        />
                      )}
                      onPress={() => {
                        setsecureTextEntry(
                          secureTextEntry === true ? false : true,
                        );
                      }}
                    />
                  }
                />
              </View>

              <View style={stylesGlobal.input}>
                <FormField
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  label="passwordConfirm"
                  title="Nhập lại mật khẩu"
                  touched={touched}
                  errors={errors}
                  secureTextEntry={secureTextEntry}
                  right={
                    <TextInput.Icon
                      style={{marginRight: 20}}
                      name={() => (
                        <Ionicons
                          name={secureTextEntry === false ? 'eye' : 'eye-off'}
                          size={18}
                          color="#6000ec"
                        />
                      )}
                      onPress={() => {
                        setsecureTextEntry(
                          secureTextEntry === true ? false : true,
                        );
                      }}
                    />
                  }
                />
              </View>
              <View style={stylesGlobal.input}>
                <Button
                  mode="contained"
                  // disabled={!isFormValid(isValid, touched)}
                  onPress={handleSubmit}>
                  Đăng ký
                </Button>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button onPress={() => navigate.navigate('login')}>
                  Đăng nhập
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Registration;
