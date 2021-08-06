import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import ImagePicker from '../ImagePicker/ImagePicker';

function Camera() {
  const sheetRef = useRef(null as any);
  const [localFile, setLocalFile] = useState(null as any);
  const onFileSelected = (image: any) => {
    closeSheet();
    setLocalFile(image);
    console.log(image);
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  return (
    <View>
      <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
    </View>
  );
}

export default Camera;
