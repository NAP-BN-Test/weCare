import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import BaseIcon from '../../components/IconBase/IconBase';
import TouchableScale from 'react-native-touchable-scale';
function ListItemMenu() {
  const [pushNotifications, setpushNotifications] = useState(true);
  const [expanded, setexpanded] = useState(false);

  const list2 = [
    {
      name: 'Amy Farha',
      subtitle: 'Vice President',
      icon: {
        type: 'material',
        name: 'notifications',
      },
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
      icon: {
        type: 'material',
        name: 'notifications',
      },
    },
  ];
  return (
    <View>
      <View
        style={{paddingTop: 20, paddingBottom: 12, backgroundColor: '#F4F5F4'}}>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            color: 'gray',
            fontWeight: '500',
          }}>
          Tài khoản
        </Text>
      </View>

      <View>
        <ListItem key={1} bottomDivider>
          <BaseIcon
            containerStyle={{backgroundColor: '#FAD291'}}
            icon={{
              type: 'material',
              name: 'notifications',
            }}
          />
          <ListItem.Content>
            <ListItem.Title>Push Notifications</ListItem.Title>
          </ListItem.Content>
          {/* <ListItem.Chevron /> */}
          <Switch
            onValueChange={() => setpushNotifications(!pushNotifications)}
            value={pushNotifications}
          />
        </ListItem>

        <ListItem.Accordion
          key={2}
          //   Component={TouchableScale}
          bottomDivider
          content={
            <>
              <BaseIcon
                containerStyle={{backgroundColor: '#FAD291'}}
                icon={{
                  type: 'font-awesome',
                  name: 'money',
                }}
              />
              <ListItem.Content>
                <ListItem.Title>Push Notifications</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setexpanded(!expanded);
          }}>
          {list2.map((l, i) => (
            <ListItem
              key={i}
              bottomDivider
              Component={TouchableScale}
              containerStyle={{backgroundColor: '#FAD291'}}>
              <BaseIcon
                containerStyle={{backgroundColor: '#FAD291'}}
                icon={l.icon}
              />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
        </ListItem.Accordion>

        <ListItem key={3} bottomDivider Component={TouchableScale}>
          <BaseIcon
            containerStyle={{backgroundColor: '#FAD291'}}
            icon={{
              type: 'material',
              name: 'place',
            }}
          />
          <ListItem.Content>
            <ListItem.Title>Location</ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <ListItem key={4} bottomDivider Component={TouchableScale}>
          <BaseIcon
            containerStyle={{backgroundColor: '#FAD291'}}
            icon={{
              type: 'material',
              name: 'language',
            }}
          />
          <ListItem.Content>
            <ListItem.Title>Language</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>

      <View
        style={{paddingTop: 20, paddingBottom: 12, backgroundColor: '#F4F5F4'}}>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            color: 'gray',
            fontWeight: '500',
          }}>
          Nhiều hơn
        </Text>
      </View>

      <View>
        <ListItem key={6} bottomDivider Component={TouchableScale}>
          <BaseIcon
            containerStyle={{backgroundColor: '#FAD291'}}
            icon={{
              type: 'ionicon',
              name: 'md-information-circle',
            }}
          />
          <ListItem.Content>
            <ListItem.Title>About US</ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <ListItem key={7} bottomDivider Component={TouchableScale}>
          <BaseIcon
            containerStyle={{backgroundColor: '#FAD291'}}
            icon={{
              type: 'entypo',
              name: 'light-bulb',
            }}
          />
          <ListItem.Content>
            <ListItem.Title>Idea</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    </View>
  );
}

export default ListItemMenu;
