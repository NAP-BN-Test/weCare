import React, {useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {Button, Searchbar, TextInput} from 'react-native-paper';
import stylesGlobal from '../../../assets/Css/cssGlobal.css';
import ImagePicker from '../../../components/ImagePicker/ImagePicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native';
import SearchDropDown from '../../../components/SearchDropDown/SearchDropDown';
// import {RNCamera} from 'react-native-camera';
function AddMedicine({navigation}: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const [dataSource] = useState([
    'apple',
    'banana',
    'cow',
    'dex',
    'zee',
    'orange',
    'air',
    'bottle',
    'Apple',
    'Banana',
    'Cow',
    'Dex',
    'Zee',
    'Orange',
    'air',
    'Bottle',
    'AppLe',
    'BaNaNa',
    'coW',
    'deX',
    'zeE',
    'OranGe',
    'air',
    'BoTtle',
  ]);
  const [filtered, setFiltered] = useState(dataSource);
  const [searching, setSearching] = useState(false);
  // const onChangeSearch = (query: any) => setSearchQuery(query);
  const [camRef, setCamRef] = useState(null as any);
  const sheetRef = useRef(null as any);
  const [localFile, setLocalFile] = useState(null as any);
  const onFileSelected = (image: any) => {
    closeSheet();
    setLocalFile(image);
    console.log(image);
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
      setSearching(false);
    }
  };

  const onSearch = (text: string) => {
    setSearchQuery(text);
    if (text) {
      setSearching(true);
      // const temp = text.toLowerCase();
      const temp = text;

      const tempList = dataSource.filter((item) => {
        if (item.match(temp)) return item;
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(dataSource);
    }
  };

  const onPressSearchDropDown = (text: string) => {
    setSearching(false);
    console.log('text', text);
    setSearchQuery(text);
  };

  return (
    <View style={stylesGlobal.container}>
      <View
        style={[
          stylesGlobal.container,
          {paddingHorizontal: 10, paddingVertical: 10},
        ]}>
        <View>
          <View style={{flexDirection: 'column'}}>
            <View style={[stylesGlobal.row_center, {marginVertical: 10}]}>
              <Text style={{fontWeight: 'bold'}}>
                Nhập tên thuốc hoặc chụp ảnh thuốc{' '}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width: '90%'}}>
              <TextInput
                mode="outlined"
                placeholder="Nhập tên thuốc..."
                onChangeText={onSearch}
                value={searchQuery}
                style={{marginBottom: 10}}
              />
            </View>
            <View
              style={{
                width: '10%',
                flex: 1,
                justifyContent: 'center',
                height: 75,
                marginLeft: 4,
              }}>
              <TouchableOpacity onPress={openSheet}>
                <Ionicons name={'camera'} size={32} color="#6000ec" />
              </TouchableOpacity>
            </View>
          </View>

          <Button
            mode="contained"
            // disabled={!isFormValid(isValid, touched)}
            // onPress={handleSubmit}
          >
            Thêm
          </Button>
        </View>

        {searching && (
          <SearchDropDown
            onPressSearchDropDown={onPressSearchDropDown}
            dataSource={filtered}
          />
        )}

        <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
        {/* {localFile?.path.length > 10 ? (
          <Image
            style={{height: 200, width: 200}}
            source={{
              uri: localFile?.path,
            }}
          />
        ) : null} */}
      </View>
    </View>
  );
}

export default AddMedicine;
