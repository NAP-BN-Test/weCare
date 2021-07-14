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
import firebaseSetup from '../../../assets/FireBaseOTP/setup';
import {useDispatch} from 'react-redux';
const LoginFireBase = ({navigation}: any) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const {auth} = firebaseSetup();
  const [confirm, setConfirm] = useState(null as any);
  const [code, setCode] = useState('');

  if (!confirm) {
  }

  const signInWithPhoneNumber = async (number: any) => {
    const confirmation = await auth().signInWithPhoneNumber(number);
    setConfirm(confirmation);
  };
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize: 31}}>Đăng nhập bằng số điện thoại</Text>
          </View>
          <Formik
            initialValues={{
              numberphone: '',
              password: '123456',
            }}
            onSubmit={(values) => {
              console.log(values);
              navigate.navigate('ConfirmOTP', {
                numberphone: values.numberphone,
              });
              signInWithPhoneNumber("+84"+values.numberphone);
            }}
            // validationSchema={ValidationForm}
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
                    // right={<TextInput.Affix text="/100" />}
                    keyboardType="numeric"
                  />
                </View>

                <View style={stylesGlobal.input}>
                  <Button
                    mode="contained"
                    // disabled={!isFormValid(isValid, touched)}
                    onPress={handleSubmit}>
                    Gửi mã đăng nhập
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

export default LoginFireBase;
