import * as React from 'react';
import {Button} from 'react-native-paper';
import {TimePickerModal} from 'react-native-paper-dates';

export default function TimePickerPage({
  value,
  setFieldValue,
  label,
  keyItem,
}: any) {
  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({hours, minutes}) => {
      setVisible(false);
      // console.log(keyItem, keyItem);

      if (keyItem != undefined) {
        setFieldValue({hours, minutes, key: keyItem});
      } else {
        setFieldValue({hours, minutes});
      }
    },
    [setVisible],
  );

  return (
    <>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={value?.hours ? value.hours : 12} // default: current hours
        minutes={value?.minutes ? value.minutes : 12} // default: current minutes
        label={label ? label : 'Chọn thời gian'} // optional, default 'Select time'
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
        locale={'vi'} // optional, default is automically detected by your system
      />
      <Button onPress={() => setVisible(true)}>
        {label ? label : 'Chọn giờ'}
      </Button>
    </>
  );
}
