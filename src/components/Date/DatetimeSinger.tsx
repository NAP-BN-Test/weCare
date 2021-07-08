import * as React from 'react';
import {Button} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';
import FormField from '../FormField/FormFieldComponent';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {StyleSheet, Text} from 'react-native';
const DateSingle = ({
  label,
  title,
  handleBlur,
  handleChange,
  values,
  errors,
  setFieldValue,
  ...props
}: any) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [open, setOpen] = React.useState(false);
  console.log('Ngày', date);
  console.log('label', label);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      console.log(params.date);
      setOpen(false);
      setDate(params.date);
      setFieldValue(label, params.date);
      
    },
    [setOpen, setDate],
  );

  return (
    <>
      <TextInput
        mode="outlined"
        theme={{
          colors: {
            background: 'white',
          },
        }}
        editable={false}
        label={title}
        right={
          <TextInput.Icon
            style={{marginRight: 20}}
            name={() => (
              <Ionicons name={'calendar-sharp'} size={18} color="#6000ec" />
            )}
            onPress={() => {
              setOpen(true);
            }}
          />
        }
        value={moment(values[label]).format('DD-MM-YYYY')}
      />
      <DatePickerModal
        {...props}
        // locale={'en'} //optional, default: automatic
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
        // onChange={(e) => setFieldValue(label, e.date)}
        saveLabel="Lưu"
        label={title}
        animationType="slide"
      />
      {errors[label] ? (
        <Text style={styles.textYup}>{errors[label]}</Text>
      ) : null}
    </>
  );
};
export default DateSingle;
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
