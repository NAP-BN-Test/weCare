import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import {Avatar, Button, Card, Title} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Action} from '../../redux/actions/index.action';
function Menu() {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  return (
    <View
      style={[
        stylesGlobal.container,

        // {paddingBottom: 300}
      ]}>
      <View
        style={[
          stylesGlobal.container,
          {paddingHorizontal: 10, paddingVertical: 10},
        ]}>
        <TouchableOpacity>
          <View
            style={[
              stylesGlobal.action,
              {flexDirection: 'row', marginBottom: 10},
            ]}>
            <Avatar.Text size={40} label="AD" />
            <View style={{marginLeft: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Anh Dũng</Text>
              <Text style={{}}>Xem thông tin tài khoản</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Menu */}
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{width: '48%', marginRight: 10, flexDirection: 'column'}}>
            <TouchableOpacity>
              <Card style={styles.card_content}>
                <Card.Content>
                  <View>
                    <Title>Chức năng</Title>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity>
              <Card style={styles.card_content}>
                <Card.Content>
                  <View>
                    <Title>Chức năng</Title>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity>
              <Card style={styles.card_content}>
                <Card.Content>
                  <View>
                    <Title>Chức năng</Title>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          </View>

          <View
            style={{width: '48%', marginRight: 10, flexDirection: 'column'}}>
            <TouchableOpacity>
              <Card style={styles.card_content}>
                <Card.Content>
                  <View>
                    <Title>Chức năng</Title>
                    <Text>thông tin</Text>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity>
              <Card style={styles.card_content}>
                <Card.Content>
                  <View>
                    <Title>Chức năng</Title>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity>
              <Card style={styles.card_content}>
                <Card.Content>
                  <View>
                    <Title>Chức năng</Title>
                    <Text>thông tin</Text>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}
        <View style={stylesGlobal.input}>
          <Button
            mode="contained"
            // disabled={!isFormValid(isValid, touched)}
            onPress={() => {
              dispatch(Action.act_logout());
            }}>
            Đăng xuất
          </Button>
        </View>
      </View>
    </View>
  );
}

export default Menu;
const styles = StyleSheet.create({
  card_content: {
    marginBottom: 10,
  },
});
