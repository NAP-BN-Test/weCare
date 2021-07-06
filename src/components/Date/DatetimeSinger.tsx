import * as React from 'react';
import {Button} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';
import FormField from '../FormField/FormFieldComponent';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
const DateSingle = ({label, value, title}: any) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  // React.useEffect(()=>{
  //   setDate(value)
  // },[value])

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate],
  );

  return (
    <>
      {/* <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
        Pick single date
      </Button> */}
      <TextInput
        mode="outlined"
        theme={{
          // roundness: 50,
          colors: {
            // primary: 'green',
            background: 'white',
          },
        }}
        // outlineColor='gray'
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
        // onBlur={handleBlur(label)}
        // value={date?.toDateString()}
        value={moment(date).format('DD-MM-YYYY')}
        // onTextInput={() => setOpen(true)}
        // onChange={() => setOpen(true)}
      />
      <DatePickerModal
        // locale={'en'} optional, default: automatic
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
        // validRange={{
        //   startDate: new Date(2021, 1, 2),  // optional
        //   endDate: new Date(), // optional
        // }}
        // onChange={} // same props as onConfirm but triggered without confirmed by user
        // saveLabel="Save" // optional
        label={title} // optional
        animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
      />
    </>
  );
};
export default DateSingle;
