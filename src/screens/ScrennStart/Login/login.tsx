import React, {useState} from 'react';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import ValidationForm from '../../../assets/Validation/validationlogin';
import FormField from '../../../components/FormField/FormFieldComponent';
import {Action} from '../../../redux/actions/index.action';
import {useDispatch} from 'react-redux';
const Login = ({navigation}: any) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <View style={{justifyContent: 'center', flex: 1}}>
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
            }}
            onSubmit={(values) => {
              console.log(values);
              dispatch(Action.act_login(values.numberphone, values.password));
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
                    title="S??? ??i???n tho???i"
                    touched={touched}
                    errors={errors}
                    // right={<TextInput.Affix text="/100" />}
                    keyboardType="numeric"
                  />
                  {/* <TextInput
                    label="S??? ??i???n tho???i"
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
                    title="M???t kh???u"
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
                    ????ng nh???p
                  </Button>
                </View>
                <View style={stylesGlobal.space_between}>
                  <Button onPress={() => navigate.navigate('registration')}>
                    ????ng k??
                  </Button>
                  <Button onPress={() => navigate.navigate('ResetPass')}>
                    Qu??n m???t kh???u
                  </Button>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Button onPress={() => navigate.navigate('FireBaseOTP')}>
                    ????ng nh???p b???ng SMS
                  </Button>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default Login;
