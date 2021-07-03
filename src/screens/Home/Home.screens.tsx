import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import stylesGlobal from '../../assets/Css/cssGlobal.css';
import Hearder from '../../components/Hearders/Hearder';
import {
  Card,
  Title,
  Paragraph,
  Searchbar,
  FAB,
  Portal,
  Provider,
} from 'react-native-paper';
function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: any) => setSearchQuery(query);
  const [open, setopen] = useState(false);

  const onStateChange = ({open}: any) => setopen(open);

  return (
    <View
      style={[
        stylesGlobal.container,
        // {paddingBottom: 300}
      ]}>
      {/* <Hearder /> */}
      <View
        style={[
          stylesGlobal.container,
          {paddingHorizontal: 10, paddingVertical: 10},
        ]}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{marginBottom: 10}}
        />
        {/* <Text>Danh sách nhắc nhở</Text> */}
        <TouchableOpacity>
          <Card style={styles.card_content}>
            <Card.Content>
              <Title>Uống thuốc</Title>
              <Paragraph>08:00 uống thuốc</Paragraph>
              <Paragraph>03/07/2021</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card style={styles.card_content}>
            <Card.Content>
              <Title>Đá bóng</Title>
              <Paragraph>18:30 ngày mai</Paragraph>
              <Paragraph>04/07/2021</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card style={styles.card_content}>
            <Card.Content>
              <Title>Uống thuốc</Title>
              <Paragraph>20:30 uống thuốc</Paragraph>
              <Paragraph>03/07/2021</Paragraph>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      </View>
      <Provider>
        <Portal>
          <FAB.Group
            // theme={{colors: {accent: 'blue'}}}
            open={open}
            visible={true}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              {
                icon: 'plus',
                label: 'Add',
                onPress: () => console.log('Pressed add'),
              },
              {
                icon: 'star',
                label: 'Star',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'email',
                label: 'Email',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => console.log('Pressed notifications'),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  card_content: {
    marginBottom: 10,
  },
});
