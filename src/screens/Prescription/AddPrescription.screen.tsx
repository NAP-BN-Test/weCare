import React from 'react';
import {Text, View} from 'react-native';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import {Formik} from 'formik';
import FormField from '../../components/FormField/FormFieldComponent';
import {Button} from 'react-native-paper';
import DateSingle from '../../components/Date/DatetimeSinger';
function AddPrescription() {
  return (
    <View style={stylesGlobal.container}>
      <View style={stylesGlobal.footer}>
        <Formik
          initialValues={
            {
              // numberphone: '',
              // password: '',
            }
          }
          onSubmit={(values) => {
            console.log(values);
          }}
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
                  label="name"
                  title="Tên đơn"
                  touched={touched}
                  errors={errors}
                  // right={<TextInput.Affix text="/100" />}
                  keyboardType="numeric"
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
                  keyboardType="numeric"
                />
              </View>

              {/* <View style={stylesGlobal.input}>
                <FormField
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  label="date"
                  title="Ngày kê đơn"
                  touched={touched}
                  errors={errors}
                  // right={<TextInput.Affix text="/100" />}
                  keyboardType="numeric"
                />
              </View> */}

              <DateSingle label="date" title="Ngày kê đơn" />
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
      </View>
    </View>
  );
}

export default AddPrescription;
