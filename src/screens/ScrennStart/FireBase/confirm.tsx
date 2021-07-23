import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import FormField from '../../../components/FormField/FormFieldComponent';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import { useDispatch } from 'react-redux';
import { Action } from '../../../redux/actions/index.action';

const VerifyAccountFireBase = ({route, navigation}: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [secureTextEntry, setsecureTextEntry] = useState(true);
  // console.log(navigation);
  const {numberphone} = route.params.numberphone;
  const {confirmation} = route.params.confirmation;
  console.log(route.params);

  const Validation = Yup.object().shape({
    code: Yup.string().required('Nhập mã'),
  });

  const submit = async (value: any)  => {
    const result = await route.params.confirmation.confirm(value.code);
    if (result) {
      console.log('Chuyển trang');
      dispatch(Action.act_login('0123456789', '123456'));
    }
    console.log('result', result);
  }

  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <View style={{flexDirection: 'column'}}>
          <View style={stylesGlobal.row_center}>
            <Text style={{fontWeight: 'bold'}}>
              Nhập mã chúng tôi đã gửi đến số{' '}
            </Text>
          </View>
          <View style={stylesGlobal.row_center}>
            <Text style={{fontWeight: 'bold'}}>{route.params.numberphone}</Text>
          </View>
          <View
            style={{
              marginVertical: 20,
            }}>
            <View style={stylesGlobal.row_center}>
              <Text>Chúng tôi đã gửi mã gồm 6 chữ số đến số</Text>
            </View>
            <View style={stylesGlobal.row_center}>
              <Text>di động của bạn. Hãy nhập mã đó để đặt lại mật</Text>
            </View>
            <View style={stylesGlobal.row_center}>
              <Text>khẩu.</Text>
            </View>
          </View>
        </View>
        <Formik
          initialValues={{
            code: '',
          }}
          onSubmit={async (values) => {
            console.log(values);
            submit(values);

            // try {
            //   const result = await confirmation.confirm(values.code);
            //   console.log('result', result);
            // } catch(error) {
            //   console.log('Đăng nhập thất bại');
            // }
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
                  label="code"
                  title="Nhập mã"
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
                  Tiếp tục
                </Button>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button
                  // icon="send"
                  onPress={() => console.log('Gửi mã')}>
                  Gửi lại SMS
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default VerifyAccountFireBase;
