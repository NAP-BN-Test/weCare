import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePickerCropper from 'react-native-image-crop-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ImagePicker = React.forwardRef(({onFileSelected}: any, ref: any) => {
  const options = [
    {
      name: 'Chụp ảnh',
      icon: <Ionicons name={'camera'} size={18} color="#6000ec" />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {});
      },
    },
    {
      name: 'Chọn ảnh có sẵn',
      icon: <Ionicons name={'albums'} size={18} color="#6000ec" />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then((images) => {
            onFileSelected(images);
          })
          .catch((error) => {});
      },
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={190}
      openDuration={250}
      dragFromTopOnly
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <View style={style.optionsWrapper}>
        {options.map(({name, onPress, icon}) => (
          <TouchableOpacity
            onPress={onPress}
            style={style.pickerOption}
            key={name}>
            {icon}
            <Text style={style.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
const style = StyleSheet.create({
  pickerOption: {
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'center',
  },

  optionsWrapper: {
    paddingHorizontal: 20,
  },

  text: {
    fontSize: 17,
    paddingLeft: 17,
  },
});
