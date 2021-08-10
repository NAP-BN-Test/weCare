import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Platform,
  Image,
} from 'react-native';
import {Button, Card, Icon, ListItem} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar, Chip} from 'react-native-paper';

function ProfileFamily({route, navigation}: any) {
  console.log(route.params);
  const navigate = useNavigation();
  const [arrayNote, setarrayNote] = useState([
    {
      id: '1',
      date: '01/02/2021',
      title: 'Đơn số 1',
    },

    {
      id: '2',
      date: '01/02/2021',
      title: 'Đơn số 2',
    },

    {
      id: '3',
      date: '01/02/2021',
      title: 'Đơn số 3',
    },
  ]);
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <ImageBackground
              style={styles.headerBackgroundImage}
              blurRadius={10}
              source={{
                uri:
                  'https://img.freepik.com/free-photo/black-texture_1205-327.jpg?size=626&ext=jpg',
              }}>
              <View style={styles.headerColumn}>
                <Image
                  style={styles.userImage}
                  source={{
                    uri: route.params.items.avatar,
                  }}
                />
                <Text style={styles.userNameText}>
                  {route.params.items.name}
                </Text>
                <View style={styles.userAddressRow}>
                  <View>
                    <Icon
                      name="place"
                      underlayColor="transparent"
                      iconStyle={styles.placeIcon}
                      //   onPress={this.onPressPlace}
                    />
                  </View>
                  <View style={styles.userCityRow}>
                    <Text style={styles.userCityText}>
                      {route.params.items.address}
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </Card>

        <View
          style={{
            paddingTop: 20,
            paddingBottom: 12,
            backgroundColor: '#F4F5F4',
          }}>
          <Text
            style={{
              fontSize: 16,
              marginLeft: 20,
              color: 'gray',
              fontWeight: '500',
            }}>
            Các đơn thuốc {route.params.items.name} đang sử dụng
          </Text>
        </View>

        {arrayNote.length > 0 ? (
          arrayNote.map((items: any, index: any) => (
            <ListItem.Swipeable
              bottomDivider
              leftContent={
                <Button
                  title="Info"
                  icon={{name: 'info', color: 'white'}}
                  buttonStyle={{
                    minHeight: '100%',
                    backgroundColor: 'orange',
                  }}
                  onPress={() =>
                    navigate.navigate('detailPrescriptionFamily', {items})
                  }
                />
              }
              rightContent={
                <Button
                  title="Nhắc"
                  icon={{name: 'notifications', color: 'white'}}
                  buttonStyle={{
                    minHeight: '100%',
                    backgroundColor: 'orange',
                  }}
                />
              }>
              {/* <Avatar.Image
                  size={32}
                  source={{
                    uri: items.avatar,
                  }}
                /> */}
              <ListItem.Content>
                <ListItem.Title>
                  {' '}
                  {items.title + ' - ' + items.date}
                </ListItem.Title>
              </ListItem.Content>
              {/* <ListItem.Chevron /> */}
            </ListItem.Swipeable>
          ))
        ) : (
          <View>
            <Chip
              style={{backgroundColor: '#fff'}}
              mode="outlined"
              // onClose={() => console.log('đóng')}
            >
              Chưa có đơn thuốc nào!
            </Chip>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default ProfileFamily;
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },

  placeIcon: {
    color: 'white',
    fontSize: 26,
  },

  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },

  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },

  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
