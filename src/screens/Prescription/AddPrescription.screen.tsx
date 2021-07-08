import React from 'react';
import {Text, View} from 'react-native';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import {Formik} from 'formik';
import FormField from '../../components/FormField/FormFieldComponent';
import {Button} from 'react-native-paper';
import DateSingle from '../../components/Date/DatetimeSinger';
import moment from 'moment';
import BtnPluss from '../../components/Btn/btnPlusCompents';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
function AddPrescription() {
  const navigate = useNavigation();
  const Validation = Yup.object().shape({
    name: Yup.string().required('Nhập tên đơn'),
    address: Yup.string().required('Nhập nơi kê đơn'),
  });
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <Formik
          initialValues={{
            name: '',
            address: '',
            date: new Date(),
          }}
          onSubmit={(values) => {
            console.log(values);
            console.log('value ', {
              ...values,
              date: moment(values.date).format('DD-MM-YYYY'),
            });
            navigate.goBack();
            // console.log(Date());
          }}
          validationSchema={Validation}
          // validateOnMount={true}
        >
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
                  title="Tên đơn"
                  touched={touched}
                  errors={errors}
                  // right={<TextInput.Affix text="/100" />}
                />
              </View>

              <View style={stylesGlobal.input}>
                <FormField
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  label="address"
                  title="Nơi kê đơn"
                  touched={touched}
                  errors={errors}
                  // right={<TextInput.Affix text="/100" />}
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
                  mode="contained"
                  // disabled={!isFormValid(isValid, touched)}
                  onPress={handleSubmit}>
                  Thêm
                </Button>
              </View>
            </View>
          )}
        </Formik>

        <BtnPluss
          icon="plus"
          actions={[
            {
              icon: 'plus',
              label: 'Thêm thuốc',
              onPress: () => navigate.navigate('addMedicine'),
            },
            {
              icon: 'content-paste',
              label: 'Danh sách thuốc',
              onPress: () => navigate.navigate('listMedicine'),
              // small: false,
            },
          ]}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

export default AddPrescription;
