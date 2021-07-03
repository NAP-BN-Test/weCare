import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
const FormField = ({
  handleChange,
  handleBlur,
  values,
  label,
  title,
  touched,
  errors,
  secureTextEntry,
  right,
  keyboardType
}: any) => {
  return (
    <View style={styles.input}>
      <TextInput
        mode="outlined"
        theme={{
          // roundness: 50,
          colors: {
            // primary: 'green',
            background: 'white',
          },
        }}
        keyboardType={keyboardType}
        right={right ? right : <></>}
        label={title}
        secureTextEntry={secureTextEntry}
        onChangeText={handleChange(label)}
        // onBlur={handleBlur(label)}
        value={values[label]}
      />
      {touched[label] && errors[label] ? (
        <Text style={styles.textYup}>{errors[label]}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingBottom: 15,
  },
  title_input: {
    paddingBottom: 5,
  },

  textYup: {
    color: 'red',
  },
});

export default FormField;
