import React, {useState} from 'react';
import {View, Text} from 'react-native';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Action} from '../../../redux/actions/index.action';
import {useDispatch} from 'react-redux';
import FormField from '../../../components/FormField/FormFieldComponent';
import ValidationForm from '../../../assets/Validation/validationlogin';
import * as Yup from 'yup';
import {Formik} from 'formik';
const ResetPass = ({navigation}: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  const [numberphone, setnumberphone] = useState('');
  function isFormValid(isValid: any, touched: any) {
    return isValid && Object.keys(touched).length !== 0;
  }
  const Validation = Yup.object().shape({
    numberphone: Yup.string().min(10 , 'Số điện thoại chưa đúng!').required('Nhập số điện thoại'),
  });
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', marginBottom: 15, fontSize: 14}}>Nhập số điện thoại của bạn</Text>
        </View>
        <Formik
          initialValues={{
            numberphone: '',
          }}
          onSubmit={(values) => {
            console.log(values);
            navigate.navigate('VerifyAccount', {
              numberphone: values.numberphone,
            });
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
              </View>

              <View style={stylesGlobal.input}>
                <Button
                  // icon="camera"
                  mode="contained"
                  // disabled={!isFormValid(isValid, touched)}
                  onPress={handleSubmit}>
                  Tìm tài khoản của bạn
                </Button>
              </View>
            </View>
          )}
        </Formik>
        {/* <View style={stylesGlobal.input}>
          <TextInput
            label="Số điện thoại"
            // mode="outlined"
            value={numberphone}
            onChangeText={(text) => setnumberphone(text)}
            right={<TextInput style={{marginRight: 20}} />}
          />
        </View> */}
      </View>
    </View>
  );
};

export default ResetPass;
